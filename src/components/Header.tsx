import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png"; 

const Header = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const isHome = location.pathname === "/"; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lógica de Estilos Atualizada:
  // 1. Mobile: Sempre 'sticky' (não sobrepõe o conteúdo) e sempre Laranja (#F76300).
  // 2. Desktop (Home): 'fixed' (sobrepõe o banner) e alterna entre transparente/laranja.
  // 3. Desktop (Outras): 'sticky' e sempre Laranja.
  
  const headerClasses = `
    z-50 w-full transition-all duration-300
    sticky top-0 bg-[#F76300] shadow-md
    ${isHome ? "md:fixed md:top-0 md:left-0 md:right-0" : ""} 
    
    ${isHome && !isScrolled ? "md:shadow-none" : ""}
  `;

  // ${isHome && !isScrolled ? "md:bg-transparent md:shadow-none" : ""}

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Encontre Aqui" className="h-16 w-auto object-contain" />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-medium text-lg">
          <Link to="/" className="hover:text-white/80 transition-colors">Início</Link>
          <Link to="/restaurantes" className="hover:text-white/80 transition-colors">Restaurantes</Link>
          <Link to="/experiencias" className="hover:text-white/80 transition-colors">Experiências</Link>
          <Link to="/empresa" className="hover:text-white/80 transition-colors">Para Empresas</Link>
        </nav>

        {/* Ações (Carrinho/Perfil) */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/cart" className="relative text-white hover:text-white/80 transition-transform hover:scale-105">
            <ShoppingBag size={28} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-[#F76300] text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-sm animate-in zoom-in duration-300">
                {itemCount}
              </span>
            )}
          </Link>
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-[#F76300] hover:bg-gray-100 font-bold rounded-full px-6"
            onClick={() => navigate("/login")}
          >
            <User className="mr-2 h-5 w-5" />
            Entrar
          </Button>
        </div>

        {/* Botão Mobile */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F76300] border-t border-white/10 p-4 absolute w-full shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4 text-white font-medium text-lg">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link to="/restaurantes" onClick={() => setIsMenuOpen(false)}>Restaurantes</Link>
            <Link to="/experiencias" onClick={() => setIsMenuOpen(false)}>Experiências</Link>
            <Link to="/empresa" onClick={() => setIsMenuOpen(false)}>Para Empresas</Link>
            <div className="pt-4 border-t border-white/20 flex items-center justify-between">
               <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                 <ShoppingBag size={24} /> Carrinho ({itemCount})
               </Link>
               <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 font-bold bg-white text-[#F76300] px-4 py-2 rounded-full">
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