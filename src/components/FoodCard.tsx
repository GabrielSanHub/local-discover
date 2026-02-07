import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FoodItem } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface FoodCardProps {
  item: FoodItem;
  index?: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, index = 0 }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAdd = () => {
    addItem(item);
    toast({
      title: "Adicionado ao carrinho!",
      description: `${item.name} foi adicionado.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="flex gap-4 p-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <h4 className="font-display text-base font-semibold text-foreground">{item.name}</h4>
            {item.popular && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-sunset text-primary-foreground px-2 py-0.5 rounded-full">
                Popular
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
          <div className="flex items-center justify-between pt-1">
            <span className="text-lg font-bold text-primary">
              R$ {item.price.toFixed(2).replace(".", ",")}
            </span>
            <button
              onClick={handleAdd}
              className="w-9 h-9 rounded-full bg-gradient-sunset text-primary-foreground flex items-center justify-center shadow-primary-glow hover:scale-110 active:scale-95 transition-transform"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
