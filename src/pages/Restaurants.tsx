import Layout from "@/components/Layout"; // CORREÇÃO 1: Importar Layout
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import FoodCard from "@/components/FoodCard"; // Usando o novo card
import { restaurants } from "@/data/mockData"; 

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tudo");

  const categories = ["Tudo", "Lanches", "Brasileira", "Japonesa", "Pizza", "Sobremesas", "Saudável"];

  // Lógica para transformar a lista de Restaurantes em uma lista de Pratos (Estilo iFood)
  // Como não temos um array de "allFoods" no mockData, vamos criar um fictício baseado nos restaurantes
  const allDishes = restaurants.flatMap((restaurant) => [
    {
      id: `${restaurant.id}-1`,
      name: `Prato Especial do ${restaurant.name}`, // Nome genérico para exemplo
      image: restaurant.image, // Usando a imagem do restaurante como se fosse do prato
      price: Math.floor(Math.random() * 40) + 20, // Preço aleatório entre 20 e 60
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      restaurantLogo: restaurant.image, // Usando a mesma imagem como logo por enquanto
      cuisine: restaurant.cuisine,
      rating: restaurant.rating,
      deliveryTime: restaurant.deliveryTime
    },
    {
      id: `${restaurant.id}-2`,
      name: `Combo Família ${restaurant.cuisine}`,
      image: restaurant.image,
      price: Math.floor(Math.random() * 80) + 50,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      restaurantLogo: restaurant.image,
      cuisine: restaurant.cuisine,
      rating: restaurant.rating,
      deliveryTime: restaurant.deliveryTime
    }
  ]);

  // Filtragem
  const filteredDishes = allDishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dish.restaurantName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Tudo" || dish.cuisine.includes(activeCategory) || (activeCategory === "Lanches" && dish.cuisine === "Hambúrguer");
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout> {/* CORREÇÃO 1: Envolvendo com Layout para Header/Footer aparecerem */}
      <div className="min-h-screen bg-gray-50 pb-20">
        
        {/* Barra de Busca Fixa (Estilo App) */}
        <div className="bg-white sticky top-[64px] z-30 px-4 py-3 shadow-sm border-b border-gray-100">
          <div className="container mx-auto max-w-5xl">
            <div className="flex gap-2 items-center mb-3">
                <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                    placeholder="Buscar prato ou restaurante..." 
                    className="pl-9 bg-gray-100 border-none h-10 rounded-xl text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
                <button className="p-2.5 bg-gray-100 rounded-xl text-gray-600 hover:bg-gray-200 transition-colors">
                    <Filter size={18} />
                </button>
            </div>
            
            {/* Filtros em Pílula */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    activeCategory === cat 
                      ? "bg-primary text-white border-primary shadow-sm" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl px-4 mt-6">
          
          {/* Título da Seção */}
          <h2 className="text-lg font-bold text-gray-800 mb-4">Destaques para você</h2>

          {/* Grid de Pratos (Visual iFood) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredDishes.map((dish, index) => (
              <FoodCard key={dish.id} data={dish} index={index} />
            ))}
          </div>

          {filteredDishes.length === 0 && (
            <div className="text-center py-20">
                <div className="text-gray-300 mb-4">
                    <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600">Nenhum prato encontrado</h3>
                <p className="text-gray-400 text-sm">Tente buscar por outro termo ou categoria.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Restaurants;