import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { shops } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Clock, ShoppingBag } from "lucide-react";

const Shops = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Artesanato", "Moda", "Empório", "Esportes"];

  const filteredShops = shops.filter(shop => {
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || shop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pb-24">
        
        {/* Cabeçalho */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">Comércio Local</h1>
          <p className="text-gray-500">Descubra lojas, artesanato e lembranças da Praia do Forte</p>
        </div>

        {/* Barra de Pesquisa */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input 
            placeholder="Buscar loja..." 
            className="pl-10 h-12 rounded-xl border-gray-200 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtros de Categoria */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Lojas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map((shop) => (
            <Link to={`/shops/${shop.id}`} key={shop.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none shadow-sm h-full group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={shop.image} 
                    alt={shop.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm flex items-center gap-1">
                    <ShoppingBag size={12} className="text-primary" />
                    {shop.category}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{shop.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{shop.description}</p>
                  
                  <div className="flex flex-col gap-2 text-sm text-gray-600 border-t pt-3">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-primary" /> {shop.hours}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary" /> {shop.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredShops.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Nenhuma loja encontrada com esses filtros.
          </div>
        )}

      </div>
    </Layout>
  );
};

export default Shops;