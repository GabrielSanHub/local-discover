import Layout from "@/components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { restaurants } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, ChevronLeft, Navigation, Check, Plus } from "lucide-react"; // Importar Check e Plus
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart(); // Hook do carrinho
  
  // Estado para controlar qual item está sendo adicionado (para animação individual)
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800">Restaurante não encontrado</h2>
          <Button variant="link" onClick={() => navigate("/restaurantes")}>Voltar para lista</Button>
        </div>
      </Layout>
    );
  }

  const handleOpenMap = () => {
    const query = encodeURIComponent(`${restaurant.name} ${restaurant.address || "Praia do Forte Bahia"}`);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    toast.info("Abrindo localização...");
    setTimeout(() => window.open(mapUrl, "_blank"), 500);
  };

  const handleAddToCart = (item: any) => {
    // Adiciona ao carrinho
    addItem({
      id: `${restaurant.id}-${item.id}`, // ID único combinando restaurante e prato
      name: item.name,
      price: item.price,
      image: item.image,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      // ... outros campos necessários pelo FoodItem
      cuisine: restaurant.cuisine,
      rating: restaurant.rating,
      deliveryTime: restaurant.deliveryTime,
      description: item.desc
    });

    // Ativa animação para este item específico
    setAddedItems(prev => ({ ...prev, [item.id]: true }));

    toast.success(`${item.name} adicionado ao carrinho!`);

    // Remove estado de "adicionado" após 2 segundos
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  const menuItems = [
    { id: 1, name: "Prato Principal da Casa", price: 49.90, desc: "A especialidade do chef, servida com acompanhamentos frescos.", image: restaurant.image },
    { id: 2, name: "Entrada Especial", price: 29.90, desc: "Perfeito para começar sua experiência gastronômica.", image: restaurant.image },
    { id: 3, name: "Sobremesa Artesanal", price: 18.90, desc: "Doce na medida certa para fechar com chave de ouro.", image: restaurant.image },
    { id: 4, name: "Bebida Refrescante", price: 12.00, desc: "Sucos naturais da fruta da estação.", image: restaurant.image },
  ];

  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20 font-sans"> {/* font-sans aplica Poppins */}
        
        {/* Banner Hero (Igual ao anterior) */}
        <div className="relative h-64 md:h-80 w-full">
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <Button variant="secondary" size="icon" className="rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 border-none" onClick={() => navigate(-1)}>
                <ChevronLeft />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <div className="container mx-auto">
                <span className="bg-[#F76300] px-3 py-1 rounded-md text-sm font-bold mb-2 inline-block shadow-lg">
                    {restaurant.cuisine}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{restaurant.name}</h1>
                <div className="flex items-center gap-4 text-sm md:text-base opacity-90 font-medium">
                    <span className="flex items-center gap-1"><Star className="fill-yellow-400 text-yellow-400 w-4 h-4"/> {restaurant.rating}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {restaurant.deliveryTime}</span>
                    <span>• {restaurant.priceRange}</span>
                </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
          
          {/* Coluna Principal: Cardápio */}
          <div className="md:col-span-2 space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Cardápio</h2>
                <div className="grid gap-4">
                    {menuItems.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 group">
                            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">{item.desc}</p>
                                </div>
                                <div className="flex justify-between items-end mt-2">
                                    <span className="font-bold text-xl text-[#F76300]">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                                    
                                    {/* Botão com Animação */}
                                    <Button 
                                      size="sm" 
                                      className={`h-9 px-4 font-semibold transition-all duration-300 ${
                                        addedItems[item.id] 
                                          ? "bg-green-500 hover:bg-green-600 text-white w-32" 
                                          : "bg-gray-100 hover:bg-[#F76300] text-gray-700 hover:text-white"
                                      }`}
                                      onClick={() => handleAddToCart(item)}
                                      disabled={addedItems[item.id]}
                                    >
                                      {addedItems[item.id] ? (
                                        <span className="flex items-center gap-1 animate-in zoom-in">
                                          <Check size={16} /> Adicionado
                                        </span>
                                      ) : (
                                        <span className="flex items-center gap-1">
                                          <Plus size={16} /> Adicionar
                                        </span>
                                      )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Coluna Lateral (Mantida igual) */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 sticky top-24">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MapPin className="text-[#F76300]" /> Localização
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                    {restaurant.address || "Endereço não informado, Praia do Forte - BA"}
                </p>
                <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold gap-2 shadow-lg shadow-green-200"
                    onClick={handleOpenMap}
                >
                    <Navigation size={18} /> Ver rota no Mapa
                </Button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default RestaurantDetail;