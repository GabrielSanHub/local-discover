import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartProvider } from "@/contexts/CartContext";

// Páginas
import Index from "./pages/Index";
import About from "./pages/About";
import Restaurants from "./pages/Restaurants";
import RestaurantDetail from "./pages/RestaurantDetail";
import Experiences from "./pages/Experiences";
import ExperienceDetail from "./pages/ExperienceDetail";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import NearbyLocations from "./pages/NearbyLocations";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Empresa from "./pages/Empresa"; // Nova página

import logoAnimada from "./assets/logo_animada.gif";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F76300]">
        <img 
          src={logoAnimada} 
          alt="Carregando..." 
          className="w-64 h-64 md:w-96 md:h-96 object-contain" // Aumentei bastante o tamanho
        />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Rotas diretas - Cada página chama seu próprio Layout internamente */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/empresa" element={<Empresa />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/restaurantes" element={<Restaurants />} /> {/* Alias para pt-br */}
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              <Route path="/restaurante/:id" element={<RestaurantDetail />} /> {/* Alias para pt-br */}
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/experiencias" element={<Experiences />} /> {/* Alias para pt-br */}
              <Route path="/experience/:id" element={<ExperienceDetail />} />
              <Route path="/experiencia/:id" element={<ExperienceDetail />} /> {/* Alias para pt-br */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/perfil" element={<Profile />} /> {/* Alias para pt-br */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/carrinho" element={<Cart />} /> {/* Alias para pt-br */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
              <Route path="/acompanhamento" element={<OrderTracking />} />
              <Route path="/nearby" element={<NearbyLocations />} />
              <Route path="/locais" element={<NearbyLocations />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/privacidade" element={<Privacy />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;