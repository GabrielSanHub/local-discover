import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Navigation } from "lucide-react";
import Layout from "@/components/Layout";
import { nearbyLocations } from "@/data/mockData";

const NearbyLocations = () => {
  const categories = ["Todos", ...new Set(nearbyLocations.map((l) => l.category))];
  const [selected, setSelected] = useState("Todos");

  const filtered = nearbyLocations.filter(
    (l) => selected === "Todos" || l.category === selected
  );

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">Locais Próximos</h1>
            <p className="text-muted-foreground">Pontos turísticos e locais de interesse na região</p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selected === cat
                    ? "bg-gradient-sunset text-primary-foreground"
                    : "bg-card text-muted-foreground border border-border hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-foreground">
                    {loc.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-foreground flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-primary" /> {loc.distance}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold text-foreground">{loc.name}</h3>
                    <span className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-accent fill-accent" /> {loc.rating}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{loc.description}</p>
                  <button className="w-full mt-2 bg-muted text-foreground font-medium py-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-sm flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" /> Ver no Mapa
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NearbyLocations;
