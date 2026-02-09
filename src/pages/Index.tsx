import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight, Store, Utensils, Tent } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-praia.jpg";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-white">
        
        {/* HERO SECTION MODERNA (Estilo iFood/App) */}
        <section className="pt-10 pb-12 md:pt-22 md:pb-20">
          <div className="container mx-auto max-w-6xl">
            
            {/* Título de Boas-vindas (Opcional, mas bom para contexto) */}
            <div className="mb-8 md:mb-12 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
                O que você quer <span className="text-[#F76300]">encontrar hoje?</span>
              </h1>
            </div>

            {/* Grid de Blocos Principais */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* BLOCO RESTAURANTES */}
              <Link to="/restaurantes" className="group relative h-64 md:h-96 w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Imagem de Fundo */}
                <div className="absolute inset-0 bg-red-600/20 z-10 transition-colors group-hover:bg-red-600/10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                  alt="Restaurantes" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                {/* Conteúdo */}
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="bg-red-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                        <Utensils size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Restaurantes</h2>
                      <p className="text-gray-200 text-sm md:text-base font-medium opacity-90 max-w-xs">
                        Descubra os sabores locais, cardápios variados e faça seu pedido.
                      </p>
                    </div>
                    
                    <div className="bg-white text-red-600 p-3 rounded-full opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 shadow-xl">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>

              {/* BLOCO EXPERIÊNCIAS */}
              <Link to="/experiencias" className="group relative h-64 md:h-96 w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Imagem de Fundo */}
                <div className="absolute inset-0 bg-blue-600/20 z-10 transition-colors group-hover:bg-blue-600/10"></div>
                <img 
                  src={heroImage} 
                  alt="Experiências" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                {/* Conteúdo */}
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="bg-[#F76300] w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                        <Tent size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Experiências</h2>
                      <p className="text-gray-200 text-sm md:text-base font-medium opacity-90 max-w-xs">
                        Passeios, aventuras e momentos inesquecíveis na região.
                      </p>
                    </div>

                    <div className="bg-white text-[#F76300] p-3 rounded-full opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 shadow-xl">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Apresentação do Propósito (Simplificada) */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-800">Conectando você ao melhor da cidade</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center text-[#F76300] mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Para Turistas</h3>
                <p className="text-gray-600 text-sm">
                  Encontre joias escondidas e chegue fácil com nossos mapas integrados.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center text-[#F76300] mb-4">
                  <Search size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Para Moradores</h3>
                <p className="text-gray-600 text-sm">
                  Descubra novos pratos e serviços perto de você. Peça e retire sem filas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center text-[#F76300] mb-4">
                  <Store size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Para Empresas</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Modernize seu atendimento com nossos Totens de autoatendimento.
                </p>
                <Link to="/empresa" className="text-[#F76300] font-bold text-sm inline-flex items-center hover:underline">
                  Saiba mais <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;