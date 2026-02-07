import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Clock } from "lucide-react";
import { Restaurant } from "@/data/mockData";

interface RestaurantCardProps {
  restaurant: Restaurant;
  index?: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
  >
    <Link
      to={`/restaurante/${restaurant.id}`}
      className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-foreground">
          {restaurant.priceRange}
        </div>
        <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3 text-primary" />
          {restaurant.distance}
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-semibold text-foreground">{restaurant.rating}</span>
            <span className="text-xs text-muted-foreground">({restaurant.reviewCount})</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{restaurant.description}</p>
        <div className="flex items-center gap-3 pt-1">
          <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">{restaurant.cuisine}</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" /> {restaurant.deliveryTime}
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default RestaurantCard;
