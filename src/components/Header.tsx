import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import logo from "../assets/logo.png"; // Garanta que a logo.png está em src/assets

const Header = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    // bg-primary (ou bg-[#F76300]) para garantir contraste com a logo branca
    <header className="sticky top-0 z-40 w-full bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Encontre Aqui" className="h-10 w-auto object-contain" />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-white/80 transition-colors">Início</Link>
          <Link to="/restaurantes" className="hover:text-white/80 transition-colors">Restaurantes</Link>
          <Link to="/experiencias" className="hover:text-white/80 transition-colors">Experiências</Link>
          <Link to="/empresa" className="hover:text-white/80 transition-colors">Para Empresas</Link>
        </nav>

        {/* Ações (Carrinho/Perfil) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/cart" className="relative text-white hover:text-white/80">
            <ShoppingBag size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-white text-primary hover:bg-gray-100 font-semibold"
            onClick={() => navigate("/login")}
          >
            <User className="mr-2 h-4 w-4" />
            Entrar
          </Button>
        </div>

        {/* Botão Mobile */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/20 p-4 absolute w-full shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4 text-white">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link to="/restaurantes" onClick={() => setIsMenuOpen(false)}>Restaurantes</Link>
            <Link to="/experiencias" onClick={() => setIsMenuOpen(false)}>Experiências</Link>
            <Link to="/empresa" onClick={() => setIsMenuOpen(false)}>Para Empresas</Link>
            <div className="pt-2 border-t border-white/20 flex items-center justify-between">
               <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                 <ShoppingBag size={20} /> Carrinho ({itemCount})
               </Link>
               <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 font-semibold">
                 <User size={20} /> Entrar
               </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;