import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Users } from "lucide-react";
import { Experience } from "@/data/mockData";

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
  >
    <Link
      to={`/experiencia/${experience.id}`}
      className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={experience.image}
          alt={experience.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-bold">
          {experience.category}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-display text-lg font-bold text-primary-foreground drop-shadow-lg">
            {experience.name}
          </h3>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{experience.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <span className="font-semibold text-foreground">{experience.rating}</span>
              ({experience.reviewCount})
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" /> {experience.duration}
            </span>
          </div>
          <span className="text-lg font-bold text-primary">
            R$ {experience.price.toFixed(0)}
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ExperienceCard;
