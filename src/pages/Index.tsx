import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// Use uma imagem de background de alta qualidade aqui, ex: hero-praia.jpg
import heroImage from "../assets/hero-praia.jpg";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section Imersivo */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Descubra o local" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Encontre Aqui
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            O seu guia definitivo para descobrir os melhores sabores e experiências da cidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
            <Link to="/restaurants" className="w-full">
              <Button size="lg" className="w-full rounded-full bg-primary hover:bg-orange-600 text-lg h-12">
                Buscar Restaurantes
              </Button>
            </Link>
            <Link to="/experiences" className="w-full">
              <Button size="lg" variant="secondary" className="w-full rounded-full bg-white text-gray-900 hover:bg-gray-100 text-lg h-12">
                Ver Experiências
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Apresentação do Propósito */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Conectando você ao melhor da cidade</h2>
            <p className="text-gray-500 mt-2">Uma nova forma de explorar o turismo e a gastronomia local.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Para Turistas</h3>
              <p className="text-gray-600">
                Não sabe onde ir? Encontre as joias escondidas da cidade, veja avaliações reais e chegue fácil com nossos mapas integrados.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Para Moradores</h3>
              <p className="text-gray-600">
                Descubra novos pratos e serviços perto de você. Faça seu pedido pelo site e retire sem filas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4">
                <Store size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Para Empresas</h3>
              <p className="text-gray-600">
                Modernize seu atendimento com nossos Totens de autoatendimento. Aumente suas vendas e otimize sua operação.
              </p>
              <Link to="/empresa" className="text-primary font-bold mt-4 inline-flex items-center hover:underline">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;