import Layout from "@/components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { experiences } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, ChevronLeft, Navigation, Calendar, Users, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Busca a experiência pelo ID
  const experience = experiences.find((e) => e.id === id);

  if (!experience) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800">Experiência não encontrada</h2>
          <Button variant="link" onClick={() => navigate("/experiencias")}>
            Voltar para lista
          </Button>
        </div>
      </Layout>
    );
  }

  const handleBooking = () => {
    toast.success("Redirecionando para agendamento...");
    // Aqui você colocaria a lógica de agendamento ou link externo
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20 font-sans">
        
        {/* Banner Hero */}
        <div className="relative h-64 md:h-80 w-full">
          <img 
            src={experience.image} 
            alt={experience.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <Button 
                variant="secondary" 
                size="icon" 
                className="rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 border-none"
                onClick={() => navigate(-1)}
            >
                <ChevronLeft />
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <div className="container mx-auto"> {/* Centraliza o texto do banner */}
                <span className="bg-[#F76300] px-3 py-1 rounded-md text-sm font-bold mb-2 inline-block shadow-lg uppercase tracking-wider">
                    {experience.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{experience.name}</h1>
                <div className="flex items-center gap-4 text-sm md:text-base opacity-90 font-medium">
                    <span className="flex items-center gap-1"><Star className="fill-yellow-400 text-yellow-400 w-4 h-4"/> {experience.rating} ({experience.reviewCount} avaliações)</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {experience.duration}</span>
                </div>
            </div>
          </div>
        </div>

        {/* Conteúdo Principal Centralizado */}
        <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
          
          {/* Coluna da Esquerda (Informações) - 2/3 da largura */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Sobre */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre o passeio</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {experience.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mt-4">
                    Viva momentos inesquecíveis explorando as belezas naturais da região. 
                    Este passeio é acompanhado por guias experientes e segue todos os protocolos de segurança.
                </p>
            </div>

            {/* Destaques */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                    <ShieldCheck className="text-[#F76300] w-6 h-6" />
                    <div>
                        <h3 className="font-bold text-gray-800">Seguro Incluso</h3>
                        <p className="text-sm text-gray-500">Atividade com seguro total</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                    <Users className="text-[#F76300] w-6 h-6" />
                    <div>
                        <h3 className="font-bold text-gray-800">Grupos Pequenos</h3>
                        <p className="text-sm text-gray-500">Máximo de 8 pessoas</p>
                    </div>
                </div>
            </div>

            {/* O que levar (Exemplo estático) */}
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">O que levar</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Protetor solar e óculos de sol</li>
                    <li>Roupa de banho e toalha</li>
                    <li>Água e lanches leves</li>
                    <li>Câmera ou celular para fotos</li>
                </ul>
            </div>

          </div>

          {/* Coluna da Direita (Reserva/Info) - 1/3 da largura */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-24">
                <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-1">Preço por pessoa</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#F76300]">R$ {experience.price.toFixed(0)}</span>
                        <span className="text-sm text-gray-400">/ {experience.duration}</span>
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-5 h-5 text-[#F76300]" />
                        <span>Disponível todos os dias</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-[#F76300]" />
                        <span>Saídas: 09:00 e 14:00</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-[#F76300]" />
                        <span>Ponto de Encontro: Vila Principal</span>
                    </div>
                </div>

                <Button 
                    className="w-full bg-[#F76300] hover:bg-orange-600 text-white font-bold h-12 text-lg shadow-lg shadow-orange-200 mb-3"
                    onClick={handleBooking}
                >
                    Reservar Agora
                </Button>

                <Button 
                    variant="outline"
                    className="w-full font-semibold border-gray-300 hover:bg-gray-50"
                    onClick={() => window.open(`https://wa.me/?text=Tenho interesse no passeio ${experience.name}`, '_blank')}
                >
                    Falar no WhatsApp
                </Button>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                    Cancelamento grátis até 24h antes
                </p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ExperienceDetail;