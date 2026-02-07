import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, ArrowLeft, Check, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { experiences } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const ExperienceDetail = () => {
  const { id } = useParams();
  const experience = experiences.find((e) => e.id === id);
  const { toast } = useToast();

  if (!experience) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground text-lg">Experiência não encontrada.</p>
          <Link to="/experiencias" className="text-secondary font-semibold mt-4 inline-block">Voltar</Link>
        </div>
      </Layout>
    );
  }

  const handleReserve = () => {
    toast({ title: "Reserva solicitada!", description: `Sua reserva para "${experience.name}" foi enviada com sucesso.` });
  };

  return (
    <Layout>
      <div className="relative h-72 md:h-[28rem]">
        <img src={experience.image} alt={experience.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute top-6 left-6">
          <Link
            to="/experiencias"
            className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm text-foreground rounded-full px-4 py-2 text-sm font-medium hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
              {experience.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-2">{experience.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-accent fill-accent" /> {experience.rating} ({experience.reviewCount})</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {experience.duration}</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {experience.distance}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Sobre</h2>
              <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
            </motion.div>

            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">O que está incluso</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experience.includes.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="bg-card rounded-2xl p-6 shadow-card space-y-5 sticky top-24">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">A partir de</p>
                <p className="font-display text-4xl font-bold text-primary">R$ {experience.price}</p>
                <p className="text-sm text-muted-foreground">por pessoa</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duração</span>
                  <span className="font-medium text-foreground">{experience.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Local</span>
                  <span className="font-medium text-foreground text-right">{experience.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Distância</span>
                  <span className="font-medium text-foreground">{experience.distance}</span>
                </div>
              </div>
              <button
                onClick={handleReserve}
                className="w-full bg-gradient-ocean text-secondary-foreground font-semibold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Reservar Agora
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ExperienceDetail;
