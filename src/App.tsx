import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Restaurants from "./pages/Restaurants";
import RestaurantDetail from "./pages/RestaurantDetail";
import Experiences from "./pages/Experiences";
import ExperienceDetail from "./pages/ExperienceDetail";
import NearbyLocations from "./pages/NearbyLocations";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import OrderTracking from "./pages/OrderTracking";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/restaurantes" element={<Restaurants />} />
            <Route path="/restaurante/:id" element={<RestaurantDetail />} />
            <Route path="/experiencias" element={<Experiences />} />
            <Route path="/experiencia/:id" element={<ExperienceDetail />} />
            <Route path="/locais" element={<NearbyLocations />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/acompanhamento" element={<OrderTracking />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
