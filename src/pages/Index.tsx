import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Utensils, Compass, ShoppingCart, Star, ArrowRight, Smartphone, Monitor } from "lucide-react";
import Layout from "@/components/Layout";
import RestaurantCard from "@/components/RestaurantCard";
import ExperienceCard from "@/components/ExperienceCard";
import { restaurants, experiences } from "@/data/mockData";
import heroPraia from "@/assets/hero-praia.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <img
          src={heroPraia}
          alt="Praia do Forte"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <span className="inline-block bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-medium px-4 py-2 rounded-full border border-primary-foreground/20">
              📍 Praia do Forte, Bahia
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Encontre Aqui
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-lg">
              Descubra restaurantes, experiências e serviços incríveis na Praia do Forte. Tudo na palma da sua mão.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/restaurantes"
                className="inline-flex items-center gap-2 bg-gradient-sunset text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-primary-glow hover:scale-105 active:scale-95 transition-transform"
              >
                <Utensils className="w-5 h-5" /> Explorar Restaurantes
              </Link>
              <Link
                to="/experiencias"
                className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground font-semibold px-8 py-4 rounded-xl border border-primary-foreground/25 hover:bg-primary-foreground/25 transition-colors"
              >
                <Compass className="w-5 h-5" /> Ver Experiências
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden lg:flex absolute right-12 bottom-16 bg-card/90 backdrop-blur-xl rounded-2xl p-6 shadow-card-hover gap-8"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-xs text-muted-foreground">Restaurantes</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary">30+</p>
            <p className="text-xs text-muted-foreground">Experiências</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <p className="text-3xl font-bold text-accent">4.8</p>
            <p className="text-xs text-muted-foreground">Avaliação</p>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-tropical-warm">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Três soluções integradas para a melhor experiência
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: "Pelo Celular", desc: "Explore restaurantes, veja cardápios, faça pedidos e pague direto do seu smartphone.", color: "bg-gradient-sunset" },
              { icon: Monitor, title: "Totem Físico", desc: "Totens espalhados pela região permitem fazer pedidos presencialmente, sem esperar.", color: "bg-gradient-ocean" },
              { icon: Compass, title: "Experiências", desc: "Descubra passeios, atividades e pontos turísticos imperdíveis na Praia do Forte.", color: "bg-gradient-sunset" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 shadow-card text-center space-y-4 hover:shadow-card-hover transition-shadow"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto`}>
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Restaurantes em Destaque
              </h2>
              <p className="text-muted-foreground mt-1">Os melhores sabores da Praia do Forte</p>
            </motion.div>
            <Link
              to="/restaurantes"
              className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.slice(0, 3).map((r, i) => (
              <RestaurantCard key={r.id} restaurant={r} index={i} />
            ))}
          </div>
          <div className="sm:hidden mt-6 text-center">
            <Link to="/restaurantes" className="inline-flex items-center gap-2 text-primary font-semibold">
              Ver todos os restaurantes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-20 bg-tropical-ocean">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Experiências Imperdíveis
              </h2>
              <p className="text-muted-foreground mt-1">Aventuras e passeios para todos os gostos</p>
            </motion.div>
            <Link
              to="/experiencias"
              className="hidden sm:flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              Ver todas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((e, i) => (
              <ExperienceCard key={e.id} experience={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-sunset rounded-3xl p-12 md:p-16 text-center text-primary-foreground"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Pronto para explorar?
            </h2>
            <p className="text-lg opacity-90 max-w-lg mx-auto mb-8">
              Comece agora a descobrir tudo que a Praia do Forte tem de melhor para oferecer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/restaurantes"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-xl hover:bg-primary-foreground/90 transition-colors"
              >
                <Utensils className="w-5 h-5" /> Começar Agora
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
