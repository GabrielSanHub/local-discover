import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Phone, ArrowLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import FoodCard from "@/components/FoodCard";
import { restaurants, foodItems } from "@/data/mockData";

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const items = foodItems.filter((f) => f.restaurantId === id);
  const categories = [...new Set(items.map((i) => i.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");

  if (!restaurant) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground text-lg">Restaurante não encontrado.</p>
          <Link to="/restaurantes" className="text-primary font-semibold mt-4 inline-block">
            Voltar aos restaurantes
          </Link>
        </div>
      </Layout>
    );
  }

  const filteredItems = items.filter((i) => i.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-72 md:h-96">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute top-6 left-6">
          <Link
            to="/restaurantes"
            className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm text-foreground rounded-full px-4 py-2 text-sm font-medium hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-accent" /> {restaurant.rating} ({restaurant.reviewCount})
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {restaurant.distance}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {restaurant.deliveryTime}
              </span>
              <span>{restaurant.priceRange}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Info */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-muted-foreground mb-6">
              {restaurant.description}
            </motion.p>

            {/* Category tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-sunset text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Food items */}
            <div className="space-y-4">
              {filteredItems.map((item, i) => (
                <FoodCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Sidebar info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="bg-card rounded-2xl p-6 shadow-card space-y-4 sticky top-24">
              <h3 className="font-display text-lg font-bold text-foreground">Informações</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{restaurant.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{restaurant.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{restaurant.hours}</span>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground mb-2">Categorias</h4>
                <div className="flex flex-wrap gap-2">
                  {restaurant.categories.map((c) => (
                    <span key={c} className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/carrinho"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-sunset text-primary-foreground font-semibold py-3 rounded-xl shadow-primary-glow hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Ver Carrinho <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default RestaurantDetail;
