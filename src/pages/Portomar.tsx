import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, ArrowLeft, Info, Calendar as CalendarIcon, Users, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import Layout from "@/components/Layout"; // Header e Footer padrão do Encontre Aqui

import logoPortomar from "../assets/logo-portomar.png";

// Interface para os passeios
interface Tour {
  id: number;
  name: string;
  image: string;
  price: number;
  duration: string;
  description: string;
  details: string;
  fullDay?: boolean;
  slots?: string[];
}

// Dados dos passeios
const portomarTours: Tour[] = [
  {
    id: 1,
    name: "Mergulho nas Piscinas Naturais",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    price: 150,
    duration: "2h",
    description: "Explore a vida marinha incrível da Praia do Forte com instrutores certificados.",
    details: "Saída da praia do Lord. Inclui máscara, snorkel e colete. Instrutores acompanham todo o percurso.",
    slots: ["09:00", "11:00", "14:00"]
  },
  {
    id: 2,
    name: "Observação de Baleias (Sazonal)",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=2073&auto=format&fit=crop",
    price: 350,
    duration: "3h",
    description: "Uma experiência inesquecível observando as baleias jubarte em seu habitat natural.",
    details: "Disponível de Julho a Outubro. Barco com capacidade para 20 pessoas. Palestra biológica inclusa.",
    slots: ["08:30", "13:30"]
  },
  {
    id: 3,
    name: "Passeio de Escuna Pôr do Sol",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
    price: 120,
    duration: "1.5h",
    description: "Relaxe e curta o visual incrível do pôr do sol na Lagoa Timeantube.",
    details: "Drinks e petiscos inclusos. Música ao vivo nos finais de semana.",
    slots: ["16:00"]
  },
  {
    id: 4,
    name: "Canoa Havaiana",
    image: "https://images.unsplash.com/photo-1541544537156-21c2d9900155?q=80&w=2070&auto=format&fit=crop",
    price: 80,
    duration: "1h",
    description: "Remada em grupo pela costa, conectando esporte e natureza.",
    details: "Aula teórica de 15min antes da saída. Colete salva-vidas obrigatório.",
    slots: ["08:00", "10:00", "16:00"]
  }
];

const Portomar = () => {
  const { addItem } = useCart();
  
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  
  // Estados do Formulário de Reserva
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);

  // Resetar formulário ao mudar de passeio
  const handleSelectTour = (tour: Tour | null) => {
    setSelectedTour(tour);
    setDate(undefined);
    setTime("");
    setGuests(1);
  };

  const handleAddToCart = () => {
    if (!selectedTour) return;

    // Adiciona ao carrinho do Encontre Aqui
    // Adicionamos um item para cada "pessoa" para bater com a quantidade, 
    // ou poderíamos modificar a lógica do carrinho para aceitar qty > 1. 
    // Aqui usaremos um loop simples para garantir compatibilidade.
    for (let i = 0; i < guests; i++) {
        addItem({
            id: `portomar-${selectedTour.id}`, 
            name: selectedTour.name,
            price: selectedTour.price,
            image: selectedTour.image,
            restaurantId: "portomar", 
            restaurantName: "Portomar",
            cuisine: "Experiência",
            rating: 5.0,
            deliveryTime: date ? format(date, "dd/MM") : "Agendado",
            description: `Reserva para ${date ? format(date, "dd/MM/yyyy") : ""} às ${time}`
        });
    }

    toast.success("Reserva adicionada ao carrinho!", {
        description: `${selectedTour.name} para ${guests} pessoas. Finalize no checkout.`
    });
    
    // Fecha os detalhes e volta para a lista
    handleSelectTour(null);
  };

  // Validação do formulário
  const isFormValid = () => {
    if (!date) return false;
    if (!selectedTour?.fullDay && !time) return false;
    if (guests < 1) return false;
    return true;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 font-sans pb-20">
        
        {/* HERO SECTION */}
        <div className="relative h-[450px] w-full flex items-center justify-center text-center text-white">
            {/* Imagem de Fundo */}
            <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2576&auto=format&fit=crop" 
                alt="Portomar Hero" 
                className="w-full h-full object-cover brightness-50"
            />
            </div>
            
            {/* Conteúdo do Hero */}
            <div className="relative z-10 container px-4 flex flex-col items-center">
                <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border-2 border-white/20 shadow-xl p-4">
                    <img 
                        src={logoPortomar} 
                        alt="Portomar Logo" 
                        className="w-full h-auto object-contain drop-shadow-lg"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-md">
                    Experiências Náuticas
                </h1>
                <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-light">
                    Descubra a Praia do Forte por um novo ângulo. Segurança, conforto e as melhores paisagens da Bahia.
                </p>
            </div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="container mx-auto px-4 -mt-10 relative z-20">
            
            {/* LISTA DE PASSEIOS */}
            {!selectedTour && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portomarTours.map((tour) => (
                        <div 
                            key={tour.id} 
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                            onClick={() => handleSelectTour(tour)}
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="flex items-center gap-2 text-xs font-bold bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg w-fit mb-2">
                                        <Clock size={12} /> {tour.duration}
                                    </div>
                                    <h3 className="text-xl font-bold leading-tight shadow-black drop-shadow-md">{tour.name}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm line-clamp-2 mb-6">{tour.description}</p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">A partir de</span>
                                        <span className="text-xl font-bold text-blue-600">R$ {tour.price},00</span>
                                    </div>
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-blue-200 shadow-lg">
                                        Ver Detalhes
                                    </Button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            )}

            {/* DETALHES E RESERVA */}
            {selectedTour && (
                <div className="animate-in zoom-in-95 duration-300 pb-12">
                    <Button 
                        variant="ghost" 
                        className="mb-6 text-white hover:text-white/80 gap-2 pl-0 hover:bg-transparent"
                        onClick={() => handleSelectTour(null)}
                    >
                        <ArrowLeft size={20} /> Voltar para lista
                    </Button>

                    <div className="grid md:grid-cols-3 gap-8 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                        {/* Coluna Esquerda: Imagem e Info (Ocupa 2 colunas) */}
                        <div className="md:col-span-2">
                            <div className="rounded-2xl overflow-hidden h-[300px] md:h-[450px] mb-8 shadow-md">
                                <img src={selectedTour.image} alt={selectedTour.name} className="w-full h-full object-cover" />
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Experiência Portomar</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">{selectedTour.name}</h2>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium border border-blue-100">
                                        <Clock size={18} /> Duração: {selectedTour.duration}
                                    </div>
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium border border-blue-100">
                                        <MapPin size={18} /> Saída: Praia do Forte
                                    </div>
                                </div>

                                <div className="prose max-w-none text-gray-600 leading-relaxed">
                                    <p className="text-lg">{selectedTour.description}</p>
                                </div>
                                
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-lg">
                                        <Info size={20} className="text-blue-600" /> O que está incluso?
                                    </h4>
                                    <p className="text-gray-600">{selectedTour.details}</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Coluna Direita: Formulário de Reserva (Sticky) */}
                        <div className="relative">
                            <div className="sticky top-24 flex flex-col bg-white p-6 rounded-2xl border border-blue-100 shadow-lg shadow-blue-50/50">
                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                                    <CheckCircle className="text-green-500" size={24} /> Faça sua Reserva
                                </h3>

                                <div className="space-y-5 flex-1">
                                    {/* Seleção de Data */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <CalendarIcon size={16} className="text-blue-500" /> Data do Passeio
                                        </label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                "w-full justify-start text-left font-normal bg-gray-50 border-gray-200 h-12 rounded-xl hover:bg-white hover:border-blue-300 transition-all",
                                                !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}
                                            </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                                disabled={(date) => date < new Date()}
                                                className="rounded-xl border shadow-xl"
                                            />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    {/* Seleção de Horário */}
                                    {!selectedTour.fullDay && (
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <Clock size={16} className="text-blue-500" /> Horário de Saída
                                            </label>
                                            <Select onValueChange={setTime} value={time}>
                                                <SelectTrigger className="w-full bg-gray-50 border-gray-200 h-12 rounded-xl">
                                                <SelectValue placeholder="Selecione o horário" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                {selectedTour.slots?.map((slot) => (
                                                    <SelectItem key={slot} value={slot}>
                                                    {slot}
                                                    </SelectItem>
                                                ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}

                                    {/* Quantidade de Pessoas */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <Users size={16} className="text-blue-500" /> Passageiros
                                        </label>
                                        <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-xl border border-gray-200">
                                            <Button 
                                                variant="ghost" 
                                                size="icon"
                                                onClick={() => setGuests(Math.max(1, guests - 1))}
                                                className="h-10 w-10 rounded-lg hover:bg-white hover:shadow-sm"
                                            >
                                                -
                                            </Button>
                                            <div className="flex-1 text-center font-bold text-lg text-gray-800">
                                                {guests}
                                            </div>
                                            <Button 
                                                variant="ghost" 
                                                size="icon"
                                                onClick={() => setGuests(guests + 1)}
                                                className="h-10 w-10 rounded-lg hover:bg-white hover:shadow-sm"
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Resumo e Botão Final */}
                                <div className="mt-8 pt-6 border-t border-gray-100 bg-blue-50/50 -mx-6 -mb-6 p-6 rounded-b-2xl">
                                    <div className="flex justify-between items-end mb-4">
                                        <span className="text-sm text-gray-500 font-medium">Total estimado</span>
                                        <div className="text-right">
                                            <span className="text-3xl font-bold text-blue-600 block leading-none">
                                                R$ {(selectedTour.price * guests).toFixed(2).replace('.', ',')}
                                            </span>
                                            <span className="text-xs text-blue-400 font-medium">Sem taxas extras</span>
                                        </div>
                                    </div>
                                    
                                    <Button 
                                        className={`w-full h-14 text-lg font-bold rounded-xl shadow-lg transition-all ${
                                            isFormValid() 
                                            ? "bg-[#F76300] hover:bg-orange-600 text-white shadow-orange-200 hover:-translate-y-1" 
                                            : "bg-gray-300 text-gray-400 cursor-not-allowed"
                                        }`}
                                        disabled={!isFormValid()}
                                        onClick={handleAddToCart}
                                    >
                                        Reservar Agora
                                    </Button>
                                    {!isFormValid() && (
                                        <p className="text-center text-xs text-orange-400 mt-3 font-medium flex items-center justify-center gap-1">
                                            <Info size={12} /> Preencha os dados para continuar
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </Layout>
  );
};

export default Portomar;