import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { events } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Clock, 
  Plus, 
  Minus, 
  Trash2,
  Ticket,
  ShoppingBag
} from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

// Definição dos preços por tipo
const TICKET_PRICES: Record<string, number> = {
  "Inteira": 50,
  "Meia": 25,
  "VIP": 60,
  "Open-bar": 85
};

interface TicketSelection {
  id: number;
  quantity: number;
  type: string;
}

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const event = events.find((e) => e.id === Number(id));

  // Estado dos ingressos
  const [ticketSelections, setTicketSelections] = useState<TicketSelection[]>([
    { id: 1, quantity: 1, type: "Inteira" }
  ]);

  if (!event) return <div>Evento não encontrado</div>;

  // Adicionar linha
  const addTicketRow = () => {
    setTicketSelections([
      ...ticketSelections, 
      { id: Date.now(), quantity: 1, type: "Inteira" }
    ]);
  };

  // Remover linha
  const removeTicketRow = (id: number) => {
    if (ticketSelections.length > 1) {
      setTicketSelections(ticketSelections.filter(t => t.id !== id));
    } else {
      toast.error("Você precisa selecionar pelo menos um ingresso.");
    }
  };

  // Atualizar quantidade
  const updateQuantity = (id: number, delta: number) => {
    setTicketSelections(ticketSelections.map(t => {
      if (t.id === id) {
        const newQuantity = Math.max(1, t.quantity + delta);
        return { ...t, quantity: newQuantity };
      }
      return t;
    }));
  };

  // Atualizar tipo
  const updateType = (id: number, newType: string) => {
    setTicketSelections(ticketSelections.map(t => {
      if (t.id === id) return { ...t, type: newType };
      return t;
    }));
  };

  // Cálculos de Total
  const totalQuantity = ticketSelections.reduce((acc, curr) => acc + curr.quantity, 0);
  
  const totalValue = ticketSelections.reduce((acc, curr) => {
    const price = TICKET_PRICES[curr.type] || 0;
    return acc + (price * curr.quantity);
  }, 0);

  // Função de Adicionar ao Carrinho
  const handleAddToCart = () => {
    ticketSelections.forEach((ticket) => {
      const price = TICKET_PRICES[ticket.type];
      
      // Adicionamos 'quantity' vezes ao carrinho (já que o addItem do contexto adiciona 1 por vez ou incrementa)
      // Uma abordagem melhor seria passar a quantidade para o addItem se o contexto suportasse, 
      // mas aqui faremos um loop simples para garantir a quantidade correta.
      for (let i = 0; i < ticket.quantity; i++) {
        addItem({
          id: `evt-${event.id}-${ticket.type}`, // ID único para o tipo de ingresso
          restaurantId: `event-${event.id}`, // Agrupador
          name: `${event.name} (${ticket.type})`,
          description: `${event.date} • ${event.location}`,
          price: price,
          image: event.image,
          category: "Eventos"
        });
      }
    });

    toast.success("Ingressos adicionados ao carrinho!", {
      description: `Total: R$ ${totalValue.toFixed(2)}`,
      action: {
        label: "Ver Carrinho",
        onClick: () => navigate("/cart")
      }
    });
  };

  return (
    <Layout>
      <div className="relative h-[35vh]">
        <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <Link to="/experiences" className="absolute top-4 left-4 z-10">
          <Button variant="secondary" size="icon" className="rounded-full bg-white/20 hover:bg-white/40 text-white border-none">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20 pb-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{event.name}</h1>
            
            {/* Informações */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-3 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Data</div>
                  <div className="text-sm text-gray-600">{event.date.split(' - ')[0]}</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-3 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Horário</div>
                  <div className="text-sm text-gray-600">{event.date.split(' - ')[1]}</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-3 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Localização</div>
                  <div className="text-sm text-gray-600">{event.location}</div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 mb-8">
              <h3 className="font-semibold mb-3">Sobre o evento</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
            </div>

            {/* SEÇÃO DE INGRESSOS */}
            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Ticket className="text-primary h-5 w-5" />
                <h3 className="font-bold text-lg">Selecione seus Ingressos</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {ticketSelections.map((ticket) => (
                  <div key={ticket.id} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-2">
                    
                    {/* Contador */}
                    <div className="flex items-center bg-white rounded-lg border shadow-sm">
                      <button 
                        onClick={() => updateQuantity(ticket.id, -1)}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition-colors rounded-l-lg"
                        disabled={ticket.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center font-bold text-gray-900">{ticket.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(ticket.id, 1)}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition-colors rounded-r-lg"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Dropdown de Tipos */}
                    <div className="flex-1 w-full">
                      <Select 
                        value={ticket.type} 
                        onValueChange={(val) => updateType(ticket.id, val)}
                      >
                        <SelectTrigger className="w-full bg-white border-gray-200">
                          <SelectValue placeholder="Tipo de Ingresso" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(TICKET_PRICES).map(([type, price]) => (
                            <SelectItem key={type} value={type}>
                              {type} - R$ {price.toFixed(2)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {ticketSelections.length > 1 && (
                      <button 
                        onClick={() => removeTicketRow(ticket.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={addTicketRow}
                className="w-full mb-8 border-2 border-dashed border-gray-300 hover:border-[#F76300] hover:text-[#F76300] text-gray-500 font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Adicionar outro tipo de ingresso
              </button>

              {/* RESUMO DO PEDIDO - Estilo Hotel Laranja */}
              <div className="bg-orange-50 rounded-xl border border-orange-100 overflow-hidden">
                <div className="bg-[#F76300]/10 p-4 border-b border-[#F76300]/10 flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-[#F76300]" />
                  <h3 className="font-bold text-lg text-[#F76300]">Resumo da Compra</h3>
                </div>

                <div className="p-6">
                   <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className="text-sm text-gray-600">Total de Ingressos</p>
                        <p className="font-semibold text-gray-900">
                          {totalQuantity} un.
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Valor Total</p>
                        <div className="text-3xl font-bold text-[#F76300]">
                          R$ {totalValue.toFixed(2).replace('.', ',')}
                        </div>
                      </div>
                   </div>
                  
                  <Button 
                    className="w-full h-14 text-lg font-bold bg-[#F76300] hover:bg-[#F76300]/90 shadow-lg"
                    onClick={handleAddToCart}
                  >
                    Confirmar e Adicionar ao Carrinho
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-3">
                    Ingressos digitais enviados por e-mail após a confirmação.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;