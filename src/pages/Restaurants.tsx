import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import RestaurantCard from "@/components/RestaurantCard";
import { restaurants, cuisineCategories } from "@/data/mockData";

const Restaurants = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = restaurants.filter((r) => {
    const matchesCategory = selectedCategory === "Todos" || r.cuisine === selectedCategory;
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">Restaurantes</h1>
            <p className="text-muted-foreground">Descubra os melhores sabores da Praia do Forte</p>
          </motion.div>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar restaurantes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-2 mb-8">
            {cuisineCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-sunset text-primary-foreground shadow-primary-glow"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <RestaurantCard key={r.id} restaurant={r} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Nenhum restaurante encontrado.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Restaurants;
