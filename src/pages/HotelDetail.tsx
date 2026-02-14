import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { hotels } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Star, 
  CalendarCheck, 
  Clock, 
  Users,
  CalendarDays
} from "lucide-react";
import { toast } from "sonner";

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === Number(id));

  // Estados do Formulário de Reserva
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(1);

  // Efeito para calcular o preço total quando as datas mudam
  useEffect(() => {
    if (hotel && checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      
      const numNights = diffDays > 0 ? diffDays : 1;
      setNights(numNights);
      
      // Extraindo valor numérico do preço (ex: "R$ 1.500/noite" -> 1500)
      const priceNumeric = parseFloat(hotel.price.replace(/[^0-9,]/g, '').replace(',', '.').replace('/noite', ''));
      setTotalPrice(priceNumeric * numNights);
    } else if (hotel) {
      // Preço padrão de 1 noite
      const priceNumeric = parseFloat(hotel.price.replace(/[^0-9,]/g, '').replace(',', '.').replace('/noite', ''));
      setTotalPrice(priceNumeric);
    }
  }, [checkIn, checkOut, hotel]);

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      toast.error("Por favor, selecione as datas de entrada e saída.");
      return;
    }
    toast.success(`Reserva solicitada para ${guests} hóspedes!`);
  };

  if (!hotel) return <div>Hotel não encontrado</div>;

  return (
    <Layout>
      {/* Header com Imagem */}
      <div className="relative h-[40vh]">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <Link to="/experiences" className="absolute top-4 left-4 z-10">
          <Button variant="secondary" size="icon" className="rounded-full bg-white/20 hover:bg-white/40 text-white border-none">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-6 -mt-10 relative z-20 pb-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          
          {/* Cabeçalho do Hotel */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wide">{hotel.category}</span>
                <h1 className="text-2xl font-bold mt-1 text-gray-900">{hotel.name}</h1>
              </div>
              <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="font-bold text-yellow-700">{hotel.rating}</span>
              </div>
            </div>

            <div className="flex items-center text-gray-500">
              <MapPin className="h-4 w-4 mr-1 text-primary" />
              <span className="text-sm">{hotel.location}</span>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-lg">Comodidades</h3>
              <div className="grid grid-cols-2 gap-3">
                {hotel.amenities.map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="mr-2 text-primary">✓</div> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold mb-2 text-lg">Sobre a acomodação</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{hotel.description}</p>
            </div>

            {/* SEÇÃO DE RESERVA ATUALIZADA */}
            <div className="bg-primary/5 rounded-xl border border-primary/10 overflow-hidden">
                <div className="bg-primary/10 p-4 border-b border-primary/10 flex items-center gap-2">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg text-primary-dark">Faça sua Reserva</h3>
                </div>
                
                <div className="p-6 space-y-5">
                  
                  {/* Datas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkin" className="flex items-center gap-2 text-gray-600">
                        <CalendarDays className="h-4 w-4" /> Check-in
                      </Label>
                      <Input 
                        type="date" 
                        id="checkin" 
                        className="bg-white"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkout" className="flex items-center gap-2 text-gray-600">
                        <CalendarDays className="h-4 w-4" /> Check-out
                      </Label>
                      <Input 
                        type="date" 
                        id="checkout" 
                        className="bg-white"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Hora e Hóspedes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" /> Previsão de Chegada
                      </Label>
                      <Input 
                        type="time" 
                        id="time" 
                        className="bg-white"
                        value={arrivalTime}
                        onChange={(e) => setArrivalTime(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-gray-600">
                        <Users className="h-4 w-4" /> Hóspedes
                      </Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Adulto</SelectItem>
                          <SelectItem value="2">2 Adultos</SelectItem>
                          <SelectItem value="3">2 Adultos, 1 Criança</SelectItem>
                          <SelectItem value="4">2 Adultos, 2 Crianças</SelectItem>
                          <SelectItem value="5">Família (5+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Resumo de Preço */}
                  <div className="pt-4 mt-4 border-t border-dashed border-gray-300">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600 text-sm">Diária média</span>
                      <span className="font-semibold">{hotel.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 text-sm">Total ({nights} noite{nights !== 1 ? 's' : ''})</span>
                      <span className="text-2xl font-bold text-primary">
                        R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>

                    <Button 
                      className="w-full py-6 text-lg font-bold shadow-lg hover:scale-[1.01] transition-transform"
                      onClick={handleReserve}
                    >
                      Solicitar Reserva
                    </Button>
                    <p className="text-xs text-center text-gray-400 mt-3">
                      Você não será cobrado agora. Cancelamento grátis até 48h.
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

export default HotelDetail;