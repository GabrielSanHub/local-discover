import { useState } from "react";
import Layout from "@/components/Layout";
import { restaurants, foodItems, FoodItem } from "@/data/mockData";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Flame, Utensils, Star, ShoppingBag, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addItem } = useCart();

  // 1. Filtragem Geral
  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Dados para Tab "Destaques"
  const popularFoods = foodItems.filter((f) => f.popular);
  const topRestaurants = restaurants.filter((r) => r.rating >= 4.7);

  // 3. Dados para Tab "Refeições" (Agrupados por Categoria)
  // Cria um objeto onde a chave é a categoria e o valor é um array de comidas
  const mealsByCategory = foodItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, FoodItem[]>);

  // Função auxiliar para adicionar ao carrinho
  const handleAddToCart = (item: FoodItem) => {
    addItem(item);
    toast.success(`${item.name} adicionado!`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pb-24">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Gastronomia</h1>
            <p className="text-gray-500">Explore os sabores da Praia do Forte</p>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Buscar restaurantes..." 
              className="pl-10 bg-white border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Sistema de Abas (Tabs) */}
        <Tabs defaultValue="destaques" className="w-full">
          
          {/* Menu das Abas */}
          <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 bg-gray-100/50 rounded-xl mb-8">
            <TabsTrigger 
              value="destaques" 
              className="flex-1 min-w-[100px] py-3 rounded-lg data-[state=active]:bg-[#F76300] data-[state=active]:text-white transition-all font-medium"
            >
              <Flame className="w-4 h-4 mr-2" /> Destaques
            </TabsTrigger>
            <TabsTrigger 
              value="restaurantes" 
              className="flex-1 min-w-[100px] py-3 rounded-lg data-[state=active]:bg-[#F76300] data-[state=active]:text-white transition-all font-medium"
            >
              <StoreIcon className="w-4 h-4 mr-2" /> Restaurantes
            </TabsTrigger>
            <TabsTrigger 
              value="refeicoes" 
              className="flex-1 min-w-[100px] py-3 rounded-lg data-[state=active]:bg-[#F76300] data-[state=active]:text-white transition-all font-medium"
            >
              <Utensils className="w-4 h-4 mr-2" /> Refeições
            </TabsTrigger>
          </TabsList>

          {/* CONTEÚDO 1: DESTAQUES */}
          <TabsContent value="destaques" className="space-y-10 animate-fade-in">
            
            {/* Banner Promocional */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10 max-w-lg">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Promoção do Dia</span>
                <h2 className="text-3xl font-bold mb-2">Festival de Frutos do Mar</h2>
                <p className="opacity-90 mb-6">Descontos de até 30% nos melhores restaurantes da orla.</p>
                <Button variant="secondary" className="font-bold text-orange-600">Ver Ofertas</Button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80" 
                className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/2 object-cover opacity-30 mask-linear"
                alt="Banner food"
              />
            </div>

            {/* Grid de Pratos Populares */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Flame className="text-[#F76300] mr-2 h-5 w-5" /> Mais Pedidos da Semana
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularFoods.slice(0, 4).map((item) => (
                  <FoodCardItem key={item.id} item={item} onAdd={handleAddToCart} />
                ))}
              </div>
            </div>

            {/* Restaurantes em Alta */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Star className="text-yellow-500 mr-2 h-5 w-5 fill-yellow-500" /> Restaurantes Bem Avaliados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topRestaurants.slice(0, 3).map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            </div>
          </TabsContent>


          {/* CONTEÚDO 2: RESTAURANTES (Lista Completa) */}
          <TabsContent value="restaurantes" className="animate-fade-in">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
             </div>
             {filteredRestaurants.length === 0 && (
                <div className="text-center py-12 text-gray-500">Nenhum restaurante encontrado.</div>
             )}
          </TabsContent>


          {/* CONTEÚDO 3: REFEIÇÕES (Sliders por Categoria) */}
          <TabsContent value="refeicoes" className="space-y-12 animate-fade-in">
            {Object.entries(mealsByCategory).map(([category, items]) => (
              <div key={category} className="relative">
                <div className="flex justify-between items-center mb-4 px-1">
                  <h3 className="text-xl font-bold text-gray-800 border-l-4 border-[#F76300] pl-3">
                    {category}
                  </h3>
                  <span className="text-sm text-gray-500">{items.length} opções</span>
                </div>
                
                <Carousel 
                  opts={{ align: "start", loop: true }} 
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {items.map((item) => (
                      // Ajuste de Tamanho: Mobile (1 item), Tablet (2 itens), Desktop (3 ou 4 itens)
                      <CarouselItem key={item.id} className="pl-4 basis-11/12 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <div className="h-full">
                          <FoodCardItem item={item} onAdd={handleAddToCart} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Botões de Navegação do Slider */}
                  <div className="hidden md:block">
                    <CarouselPrevious className="left-0 -translate-x-1/2 bg-white/90 hover:bg-[#F76300] hover:text-white border-none shadow-md" />
                    <CarouselNext className="right-0 translate-x-1/2 bg-white/90 hover:bg-[#F76300] hover:text-white border-none shadow-md" />
                  </div>
                </Carousel>
              </div>
            ))}
          </TabsContent>

        </Tabs>

      </div>
    </Layout>
  );
};

// Componente Auxiliar de Ícone
const StoreIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    <path d="M2 7h20" />
    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
  </svg>
)

// Componente Interno para o Card de Comida (para garantir visual consistente no Carousel)
const FoodCardItem = ({ item, onAdd }: { item: FoodItem, onAdd: (i: FoodItem) => void }) => (
  <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all h-full flex flex-col group">
    <div className="relative h-40 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
      />
      {item.popular && (
        <div className="absolute top-2 left-2 bg-[#F76300] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
          POPULAR
        </div>
      )}
      <button 
        onClick={() => onAdd(item)}
        className="absolute bottom-2 right-2 bg-white text-[#F76300] hover:bg-[#F76300] hover:text-white p-2 rounded-full shadow-lg transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
      >
        <Plus size={18} strokeWidth={3} />
      </button>
    </div>
    <CardContent className="p-4 flex flex-col flex-1">
      <div className="text-xs text-gray-500 mb-1">{item.category}</div>
      <h4 className="font-bold text-gray-800 line-clamp-1 mb-1">{item.name}</h4>
      <p className="text-xs text-gray-500 line-clamp-2 mb-3 flex-1">{item.description}</p>
      <div className="font-bold text-[#F76300]">
        R$ {item.price.toFixed(2).replace('.', ',')}
      </div>
    </CardContent>
  </Card>
);

export default Restaurants;