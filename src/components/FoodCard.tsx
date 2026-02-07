import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
// Importe a interface Restaurant se necessário, ou defina as props localmente
// Assumindo estrutura básica baseada no seu pedido

interface FoodCardProps {
  data: {
    id: string; // ID do prato (se houver) ou índice
    name: string;
    image: string;
    price: number;
    description?: string;
    restaurantId: string;
    restaurantName: string;
    restaurantLogo: string; // Imagem do restaurante
    deliveryTime: string;
    rating: number;
  };
  index?: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ data, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    className="w-full"
  >
    <Link
      to={`/restaurante/${data.restaurantId}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      {/* Imagem do Prato */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Logo do Restaurante (No cantinho, estilo iFood) */}
        <div className="absolute bottom-2 right-2">
            <div className="bg-white p-1 rounded-full shadow-md">
                <img 
                    src={data.restaurantLogo} 
                    alt={data.restaurantName} 
                    className="w-8 h-8 rounded-full object-cover border border-gray-100" 
                />
            </div>
        </div>

        {/* Badge de Tempo */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-[10px] font-bold flex items-center gap-1 shadow-sm">
           <Clock size={10} /> {data.deliveryTime}
        </div>
      </div>

      {/* Informações */}
      <div className="p-3">
        <h3 className="font-bold text-gray-800 text-sm line-clamp-1 mb-1 group-hover:text-primary transition-colors">
          {data.name}
        </h3>
        
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 line-clamp-1">{data.restaurantName}</span>
                <span className="text-primary font-bold text-sm">
                  R$ {data.price.toFixed(2).replace('.', ',')}
                </span>
            </div>
            
            <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded text-xs font-medium text-gray-600">
                <Star size={10} className="fill-yellow-400 text-yellow-400" />
                {data.rating}
            </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default FoodCard;