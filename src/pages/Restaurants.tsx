import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Star, Clock, Heart } from "lucide-react";
import RestaurantCard from "@/components/RestaurantCard";
import { restaurants } from "@/data/mockData"; // Certifique-se que seus dados tenham imagens

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", "Lanches", "Brasileira", "Japonesa", "Pizza", "Sobremesas", "Saudável"];

  const filteredRestaurants = restaurants.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      {/* Header Falso de App */}
      <div className="bg-white p-4 shadow-sm sticky top-[64px] z-30">
        <div className="container mx-auto">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Buscar pratos, restaurantes..." 
              className="pl-10 bg-gray-100 border-none h-12 rounded-xl text-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Categorias com Scroll Horizontal */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6">
        {/* Seção de Destaques (Banners) */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white h-40 flex flex-col justify-center shadow-lg relative overflow-hidden group cursor-pointer">
                <div className="relative z-10">
                    <h3 className="font-bold text-2xl mb-1">Ofertas do Dia</h3>
                    <p className="opacity-90">Pratos a partir de R$ 19,90</p>
                </div>
                {/* Efeito decorativo */}
                <div className="absolute right-[-20px] bottom-[-20px] bg-white/20 w-32 h-32 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white h-40 flex flex-col justify-center shadow-lg relative overflow-hidden group cursor-pointer">
                <div className="relative z-10">
                    <h3 className="font-bold text-2xl mb-1">Novidades</h3>
                    <p className="opacity-90">Conheça os novos parceiros</p>
                </div>
                 <div className="absolute right-[-20px] bottom-[-20px] bg-white/20 w-32 h-32 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">Lojas</h2>
        
        {/* Grid de Restaurantes Refinado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            // Sugiro editar o componente RestaurantCard para remover bordas pesadas e usar shadow-sm
            <div key={restaurant.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                    <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white text-gray-600 hover:text-red-500 transition-colors">
                        <Heart size={18} />
                    </button>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-800">{restaurant.name}</h3>
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-xs font-bold">
                            <Star size={12} fill="currentColor" />
                            <span>{restaurant.rating}</span>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{restaurant.cuisine} • $$</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3">
                        <span className="flex items-center gap-1"><Clock size={12}/> 30-40 min</span>
                        <span className="text-green-600 font-medium">Retirada Grátis</span>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;