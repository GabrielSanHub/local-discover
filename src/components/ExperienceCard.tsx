import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";
// Importando logo placeholder se não houver no objeto
import placeholderLogo from "@/assets/logo.png"; 

// Defina a interface estendida se necessário, ou use 'any' temporariamente se mockData for complexo
interface ExperienceCardProps {
  experience: any; 
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
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={experience.image}
          alt={experience.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Badge da Categoria */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
          {experience.category}
        </div>

        {/* Informação do Fornecedor (Portomar, etc) */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white p-0.5 overflow-hidden shadow-md">
                <img 
                    src={experience.providerLogo || placeholderLogo} 
                    alt={experience.providerName || "Fornecedor"} 
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-md">
                {experience.providerName || "Portomar"} {/* Padrão Portomar se não tiver nome */}
            </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-[#F76300] transition-colors line-clamp-1">
            {experience.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{experience.description}</p>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              {experience.rating}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {experience.duration}
            </span>
          </div>
          <span className="text-xl font-bold text-[#F76300]">
            R$ {experience.price.toFixed(0)}
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ExperienceCard;