import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
    Sheet, 
    SheetContent, 
    SheetTrigger, 
    SheetHeader, 
    SheetTitle,
    SheetClose 
  } from "@/components/ui/sheet"; // Componentes do Menu Lateral
import { MapPin, Clock, Star, ArrowLeft, Phone, Calendar, Info, Ship, Anchor, Search, Menu } from "lucide-react";
import logoEncontreAqui from "../assets/Logo.png"; // Para o botão flutuante
import logoPortomar from "../assets/logo-portomar.png";

// Dados mockados específicos da Portomar
const portomarTours = [
  {
    id: 1,
    name: "Mergulho nas Piscinas Naturais",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    price: 150,
    duration: "2h",
    description: "Explore a vida marinha incrível da Praia do Forte com instrutores certificados. Equipamento completo incluso.",
    details: "Saída da praia do Lord. Inclui máscara, snorkel e colete. Instrutores acompanham todo o percurso."
  },
  {
    id: 2,
    name: "Observação de Baleias (Sazonal)",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=2073&auto=format&fit=crop",
    price: 350,
    duration: "3h",
    description: "Uma experiência inesquecível observando as baleias jubarte em seu habitat natural.",
    details: "Disponível de Julho a Outubro. Barco com capacidade para 20 pessoas. Palestra biológica inclusa."
  },
  {
    id: 3,
    name: "Passeio de Escuna Pôr do Sol",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
    price: 120,
    duration: "1.5h",
    description: "Relaxe e curta o visual incrível do pôr do sol na Lagoa Timeantube.",
    details: "Drinks e petiscos inclusos. Música ao vivo nos finais de semana."
  },
  {
    id: 4,
    name: "Canoa Havaiana",
    image: "https://images.unsplash.com/photo-1541544537156-21c2d9900155?q=80&w=2070&auto=format&fit=crop",
    price: 80,
    duration: "1h",
    description: "Remada em grupo pela costa, conectando esporte e natureza.",
    details: "Aula teórica de 15min antes da saída. Colete salva-vidas obrigatório."
  }
];

const Portomar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"home" | "passeios" | "sobre">("home");
  const [selectedTour, setSelectedTour] = useState<typeof portomarTours[0] | null>(null);

  // Função para abrir o WhatsApp
  const handleConsult = (tourName: string) => {
    const message = `Olá Portomar! Vi o passeio "${tourName}" no Encontre Aqui e gostaria de mais informações.`;
    window.open(`https://wa.me/5571999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative">
      
{/* HEADER EXCLUSIVO PORTOMAR */}
<header className="bg-white shadow-sm sticky top-0 z-40 border-b border-blue-100">
  <div className="container mx-auto px-4 h-20 flex items-center justify-between">
    {/* Logo Portomar */}
    <div 
      className="flex items-center gap-2 cursor-pointer" 
      onClick={() => { setActiveTab("home"); setSelectedTour(null); }}
    >
      <img 
        src={logoPortomar} 
        alt="Portomar" 
        className="h-12 w-auto object-contain"
      />
    </div>

    {/* Navegação Desktop */}
    <nav className="hidden md:flex items-center gap-8">
      <button 
        onClick={() => { setActiveTab("home"); setSelectedTour(null); }}
        className={`font-medium transition-colors ${activeTab === "home" ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-600"}`}
      >
        Início
      </button>
      <button 
        onClick={() => { setActiveTab("passeios"); setSelectedTour(null); }}
        className={`font-medium transition-colors ${activeTab === "passeios" ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-600"}`}
      >
        Nossos Passeios
      </button>
      <button 
        onClick={() => { setActiveTab("sobre"); setSelectedTour(null); }}
        className={`font-medium transition-colors ${activeTab === "sobre" ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-600"}`}
      >
        Sobre Nós
      </button>
    </nav>
    
    {/* NAVEGAÇÃO MOBILE (Bússola + Menu Sidebar) */}
    <div className="md:hidden flex items-center gap-2">
       {/* Botão Bússola (Atalho Rápido para Passeios) */}
       <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => { setActiveTab("passeios"); setSelectedTour(null); }}
          className="hover:bg-blue-50"
       >
          <Search className="text-blue-900" />
       </Button>

       {/* Menu Sidebar */}
       <Sheet>
         <SheetTrigger asChild>
           <Button variant="ghost" size="icon" className="hover:bg-blue-50">
             <Menu className="text-blue-900 h-6 w-6" />
           </Button>
         </SheetTrigger>
         <SheetContent side="right" className="bg-white w-3/4">
           <SheetHeader>
             <SheetTitle className="text-blue-900 font-bold text-left text-xl flex items-center gap-2">
                <Anchor size={20} /> Menu
             </SheetTitle>
           </SheetHeader>
           
           <div className="flex flex-col gap-2 mt-8">
             <SheetClose asChild>
               <button
                 onClick={() => { setActiveTab("home"); setSelectedTour(null); }}
                 className={`text-lg font-medium text-left px-4 py-3 rounded-lg transition-colors ${activeTab === "home" ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-600 hover:bg-gray-50"}`}
               >
                 Início
               </button>
             </SheetClose>
             
             <SheetClose asChild>
               <button
                 onClick={() => { setActiveTab("passeios"); setSelectedTour(null); }}
                 className={`text-lg font-medium text-left px-4 py-3 rounded-lg transition-colors ${activeTab === "passeios" ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-600 hover:bg-gray-50"}`}
               >
                 Nossos Passeios
               </button>
             </SheetClose>
             
             <SheetClose asChild>
               <button
                 onClick={() => { setActiveTab("sobre"); setSelectedTour(null); }}
                 className={`text-lg font-medium text-left px-4 py-3 rounded-lg transition-colors ${activeTab === "sobre" ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-600 hover:bg-gray-50"}`}
               >
                 Sobre Nós
               </button>
             </SheetClose>
           </div>

           {/* Rodapé do Menu Mobile */}
           <div className="absolute bottom-8 left-6 right-6">
              <div className="bg-blue-50 p-4 rounded-xl text-center">
                 <p className="text-sm text-blue-800 font-medium">Precisa de ajuda?</p>
                 <p className="text-xs text-blue-600 mt-1">Clique em consultar passeio para falar no WhatsApp</p>
              </div>
           </div>
         </SheetContent>
       </Sheet>
    </div>
  </div>
</header>

      {/* CONTEÚDO PRINCIPAL (TABS) */}
      <main className="pb-24">
        
        {/* --- TAB HOME --- */}
        {activeTab === "home" && (
          <div className="animate-in fade-in duration-500">
            {/* Hero */}
            <div className="relative h-[500px] w-full flex items-center justify-center text-center text-white">
              <div className="absolute inset-0">
                <img 
                  src="https://portomar.com.br/wp-content/uploads/2025/10/Praia-do-Forte-Bahia.jpg" 
                  alt="Portomar Hero" 
                  className="w-full h-full object-cover brightness-50"
                />
              </div>
              <div className="relative z-10 container px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Sua aventura começa aqui!</h1>
                <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
                Descubra Praia do Forte através dos melhores passeios de terra, mar e ar.
                </p>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8 text-lg rounded-full"
                  onClick={() => setActiveTab("passeios")}
                >
                  Ver Passeios
                </Button>
              </div>
            </div>

            {/* Destaques */}
            <div className="container mx-auto px-4 py-16">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ship size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Frota Própria</h3>
                  <p className="text-gray-600">Embarcações modernas e vistoriadas para sua total segurança.</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Anchor size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Guias Locais</h3>
                  <p className="text-gray-600">Conheça os segredos da região com quem nasceu aqui.</p>
                </div>
                <div className="p-6">
                   <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Excelência</h3>
                  <p className="text-gray-600">Mais de 10 anos de experiência transformando turismo em memória.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB SOBRE --- */}
        {activeTab === "sobre" && (
        <div className="container mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-l-4 border-[#F76300] pl-4">
                    Sobre a Portomar
                </h2>
                
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                    Fundada em 2010, a Portomar nasceu da paixão pelo oceano e pelo desejo de apresentar as belezas naturais da Bahia de uma forma sustentável e respeitosa.
                    </p>
                    <p>
                    Nossa missão é proporcionar experiências seguras e inesquecíveis, conectando pessoas à natureza através de atividades náuticas de alta qualidade, sempre prezando pela preservação do meio ambiente e pela valorização da cultura local.
                    </p>
                </div>

                <div className="mt-10 overflow-hidden rounded-2xl shadow-md">
                    <img 
                        src="https://portomar.com.br/wp-content/uploads/2025/10/1f0b1cdb-83ff-450d-a6f1-7e789b85ad55-e1761824479580.jpg" 
                        // Fallback caso a imagem específica não carregue
                        onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1000&auto=format&fit=crop";
                        }}
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700" 
                        alt="Embarcação Portomar" 
                    />
                </div>
                
                {/* Rodapé do Card com Valores */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100 text-center">
                    <div>
                        <span className="block text-2xl font-bold text-[#F76300]">+14</span>
                        <span className="text-sm text-gray-500">Anos de História</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold text-[#F76300]">100%</span>
                        <span className="text-sm text-gray-500">Segurança</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold text-[#F76300]">5k+</span>
                        <span className="text-sm text-gray-500">Clientes Felizes</span>
                    </div>
                </div>
            </div>
        </div>
        )}

        {/* --- TAB PASSEIOS --- */}
        {activeTab === "passeios" && !selectedTour && (
          <div className="container mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4">
             <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">Nossos Passeios</h2>
             <p className="text-center text-gray-500 mb-10">Escolha sua próxima aventura</p>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portomarTours.map((tour) => (
                   <div 
                      key={tour.id} 
                      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
                      onClick={() => setSelectedTour(tour)}
                   >
                      <div className="h-56 overflow-hidden relative">
                         <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Clock size={12} /> {tour.duration}
                         </div>
                      </div>
                      <div className="p-6">
                         <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600">{tour.name}</h3>
                         <p className="text-gray-500 text-sm line-clamp-2 mb-4">{tour.description}</p>
                         <div className="flex items-center justify-between mt-auto">
                            <span className="text-lg font-bold text-blue-600">R$ {tour.price},00</span>
                            <span className="text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-transform">Ver detalhes →</span>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        )}

        {/* --- TAB DETALHES DO PASSEIO (Sub-rota interna) --- */}
        {selectedTour && activeTab === "passeios" && (
           <div className="container mx-auto px-4 py-8 animate-in zoom-in-95 duration-300">
              <Button 
                variant="ghost" 
                className="mb-4 text-gray-500 hover:text-blue-600 gap-2 pl-0 hover:bg-transparent"
                onClick={() => setSelectedTour(null)}
              >
                 <ArrowLeft size={20} /> Voltar para passeios
              </Button>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                 <div className="rounded-2xl overflow-hidden h-[300px] md:h-[450px]">
                    <img src={selectedTour.image} alt={selectedTour.name} className="w-full h-full object-cover" />
                 </div>
                 
                 <div className="flex flex-col justify-center">
                    <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Experiência Portomar</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedTour.name}</h2>
                    
                    <div className="flex gap-4 mb-6">
                       <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                          <Clock size={16} /> {selectedTour.duration}
                       </div>
                       <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                          <MapPin size={16} /> Praia do Forte
                       </div>
                    </div>

                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                       {selectedTour.description}
                    </p>

                    <div className="bg-gray-50 p-4 rounded-xl mb-8 border border-gray-100">
                       <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <Info size={16} className="text-blue-600" /> Detalhes
                       </h4>
                       <p className="text-gray-600 text-sm">{selectedTour.details}</p>
                    </div>

                    <div className="mt-auto">
                       <p className="text-sm text-gray-400 mb-1">Valor por pessoa</p>
                       <div className="flex items-end gap-2 mb-6">
                          <span className="text-4xl font-bold text-blue-600">R$ {selectedTour.price}</span>
                          <span className="text-gray-500 mb-1">,00</span>
                       </div>
                       
                       <Button 
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-14 text-lg rounded-xl gap-2 shadow-lg shadow-green-200 transition-all hover:-translate-y-1"
                          onClick={() => handleConsult(selectedTour.name)}
                       >
                          <Phone size={20} /> Consultar no WhatsApp
                       </Button>
                       <p className="text-center text-xs text-gray-400 mt-3">Você será redirecionado para o atendimento da Portomar</p>
                    </div>
                 </div>
              </div>
           </div>
        )}

      </main>

      {/* FOOTER SIMPLES PORTOMAR */}
      <footer className="bg-blue-900 text-blue-200 py-12 text-center">
         <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-white mb-4">PORTOMAR</h3>
            <p className="max-w-md mx-auto mb-6"> © 2025 Portomar Passeios Turísticos. Todos os direitos reservados. </p>
            <div className="flex justify-center gap-4 text-sm">
               <span>&copy; 2024 Portomar</span>
               <span>•</span>
               <span>Política de Privacidade</span>
            </div>
         </div>
      </footer>

      {/* BOTÃO FLUTUANTE "VOLTAR PARA ENCONTRE AQUI" */}
      <div className="fixed bottom-6 right-6 z-50">
         <button 
            onClick={() => navigate("/")}
            className="group flex items-center justify-center w-14 h-14 bg-[#F76300] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 relative"
            title="Voltar para Encontre Aqui"
         >
            {/* Ícone / Logo */}
            <img 
               src={logoEncontreAqui} 
               alt="Encontre Aqui" 
               className="w-8 h-8 object-contain brightness-0 invert" 
            />
            
            {/* Tooltip on Hover */}
            <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
               Voltar para Encontre Aqui
            </span>
         </button>
      </div>

    </div>
  );
};

export default Portomar;