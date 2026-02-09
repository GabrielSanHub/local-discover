import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Store, ChevronLeft, ChevronRight, Quote } from "lucide-react"; // MapPin, Smartphone removidos pois não usados
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import totemEmpresa from "../assets/Totem_Empresa.jpeg";
import totemPessoa from "../assets/Totem_Pessoa.jpeg";
import logoPortomar from "../assets/logo-portomar.png";

// Mock de Parceiros
const partners = [
  {
    id: 1,
    name: "Portomar",
    slug: "portomar", // Identificador para link
    image: "https://portomar.com.br/wp-content/uploads/2025/10/Portomar-Logotipo.png",
    comment: "A parceria aumentou nossa visibilidade em 40%. O totem agilizou muito nosso atendimento."
  },
  {
    id: 2,
    name: "Sabor da Vila",
    slug: "sabor-da-vila",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop",
    comment: "Incrível como os turistas já chegam sabendo o que pedir. Reduziu erros nos pedidos."
  },
  {
    id: 3,
    name: "Aventura Quadri",
    slug: "aventura-quadri",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=200&h=200&fit=crop",
    comment: "O sistema de agendamento facilitou muito a venda dos nossos passeios."
  },
  {
    id: 4,
    name: "Bistrô do Mar",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop",
    comment: "O totem reduziu as filas em dias de movimento intenso. Recomendo!"
  },
  {
    id: 5,
    name: "Eco Tartaruga",
    image: "https://images.unsplash.com/photo-1578496479763-c21c718af028?w=200&h=200&fit=crop",
    comment: "Os turistas adoram ver as fotos dos passeios no totem antes de comprar."
  },
  {
    id: 6,
    name: "Pousada Sol & Mar",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=200&fit=crop",
    comment: "Divulgar nosso restaurante para não-hóspedes ficou muito mais fácil."
  },
  {
    id: 7,
    name: "Café da Praça",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&h=200&fit=crop",
    comment: "Plataforma simples e intuitiva. O suporte é excelente e rápido."
  },
  {
    id: 8,
    name: "Artesanato Local",
    image: "https://images.unsplash.com/photo-1455620611406-966ca6889d80?w=200&h=200&fit=crop",
    comment: "Aumentou a procura pelos nossos workshops culturais significativamente."
  },
  {
    id: 9,
    name: "Surf School Bahia",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=200&h=200&fit=crop",
    comment: "Conseguimos preencher turmas que antes ficavam vazias na baixa temporada."
  }
];

const Empresa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const visiblePartners = [
    partners[currentIndex],
    partners[(currentIndex + 1) % partners.length],
    partners[(currentIndex + 2) % partners.length]
  ];

  // Função para navegar se for Portomar
  const handlePartnerClick = (partnerName: string) => {
    if (partnerName === "Portomar") {
      navigate("/portomar");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* ... Hero e Conceito (Mantidos Iguais) ... */}
        <section className="bg-[#F76300] text-white py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Leve a inovação para o seu estabelecimento</h1>
            <p className="text-xl opacity-90 mb-8">
              Transforme a experiência dos seus clientes e turistas com o Totem Encontre Aqui. 
              Agilidade no pedido, pagamento simplificado e retirada no balcão.
            </p>
            <Link to="/parceiro">
              <Button size="lg" className="bg-white text-[#F76300] hover:bg-gray-100 font-bold text-lg px-8 transition-transform hover:scale-105">
                Quero ser parceiro
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é o Encontre Aqui?</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                O Encontre Aqui é uma plataforma completa de descoberta local que conecta turistas e moradores 
                aos melhores estabelecimentos da região. Não somos apenas um app de delivery; somos um guia interativo.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Através do nosso site e dos nossos Totens físicos espalhados pela cidade, 
                o cliente visualiza seu cardápio, faz o pedido e realiza o pagamento de forma autônoma.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" />
                  <span className="text-gray-700">Visibilidade para turistas e locais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" />
                  <span className="text-gray-700">Cardápio digital interativo e sempre atualizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" />
                  <span className="text-gray-700">Redução de filas e otimização do atendimento</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEÇÃO NOSSOS PARCEIROS */}
        <section className="py-16 bg-orange-50/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Parceiros</h2>
            
            <div className="relative max-w-6xl mx-auto">
              
              <button 
                onClick={prevSlide}
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-white text-[#F76300] p-3 rounded-full shadow-lg hover:bg-[#F76300] hover:text-white transition-all z-20"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visiblePartners.map((partner, index) => (
                  <div 
                    key={`${partner.id}-${index}`} 
                    // Lógica para cursor e click apenas no Portomar (ou expanda para todos se desejar)
                    onClick={() => handlePartnerClick(partner.name)}
                    className={`bg-white rounded-2xl p-6 shadow-sm border border-orange-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in-95 ${
                      partner.name === "Portomar" ? "cursor-pointer ring-2 ring-transparent hover:ring-[#F76300]/50" : ""
                    }`}
                  >
                    <div className="relative group mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[#F76300] transition-all duration-300 shadow-md group-hover:scale-110">
                        <img 
                          src={partner.image} 
                          alt={partner.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-[#F76300] text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Quote size={10} />
                      </div>
                    </div>
                    
                    <h3 className={`text-lg font-bold text-gray-800 mb-2 ${partner.name === "Portomar" ? "text-[#F76300] underline decoration-dotted underline-offset-4" : ""}`}>
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3">
                      "{partner.comment}"
                    </p>

                    {partner.name === "Portomar" && (
                        <span className="mt-4 text-xs font-bold text-[#F76300] bg-orange-50 px-3 py-1 rounded-full">Ver Página</span>
                    )}
                  </div>
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-white text-[#F76300] p-3 rounded-full shadow-lg hover:bg-[#F76300] hover:text-white transition-all z-20"
              >
                <ChevronRight size={24} />
              </button>

              <div className="flex justify-center gap-2 mt-8">
                {partners.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#F76300] w-6" : "bg-gray-300 hover:bg-orange-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ... Resto das seções (Totem, Retirada, Como Adquirir) mantidas ... */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">A Experiência do Totem</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-none shadow-lg group">
                <div className="h-64 overflow-hidden relative">
                   <img src={totemEmpresa} alt="Totem no estabelecimento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                      <h3 className="text-white text-2xl font-bold">Para o seu Negócio</h3>
                   </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    Um equipamento moderno que se integra ao ambiente. O Totem funciona como um vendedor extra, 
                    disponível 24h, reduzindo a necessidade de garçons apenas para tirar pedidos e evitando erros de comunicação.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg group">
                <div className="h-64 overflow-hidden relative">
                   <img src={totemPessoa} alt="Cliente usando o totem" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                      <h3 className="text-white text-2xl font-bold">Para o Cliente</h3>
                   </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    Navegação intuitiva por toque. O cliente explora as opções, personaliza o pedido e paga 
                    diretamente na máquina via cartão ou Pix. Simples, rápido e sem contato humano desnecessário.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Store className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Como funciona a entrega?</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">Modelo "Pegue no Balcão"</h3>
              <p className="text-gray-700 text-lg">
                Diferente dos apps tradicionais, <strong>não realizamos entregas na porta do cliente</strong> via motoboy parceiro.
              </p>
              <div className="my-6 border-t border-gray-100"></div>
              <p className="text-gray-600">
                O cliente recebe uma notificação (via SMS ou App) assim que o pedido está pronto. 
                Ele então se dirige ao balcão de retirada do seu estabelecimento para buscar o produto. 
                Isso garante que a comida chegue quente, elimina taxas de entrega e traz o fluxo de pessoas para dentro da sua loja.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Como adquirir seu Totem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold text-lg mb-2">Cadastro Inicial</h3>
              <p className="text-gray-500">Preencha o formulário de interesse com os dados da sua empresa.</p>
            </div>
            <div className="text-center p-6">
               <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold text-lg mb-2">Análise e Instalação</h3>
              <p className="text-gray-500">Nossa equipe avalia o local, configura o menu digital e instala o Totem (taxa de adesão sob consulta).</p>
            </div>
            <div className="text-center p-6">
               <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold text-lg mb-2">Comece a Vender</h3>
              <p className="text-gray-500">Treinamento rápido e seu negócio já está pronto para receber pedidos digitais.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Empresa;