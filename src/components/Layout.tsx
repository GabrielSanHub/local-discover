import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideFooter }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Mostra o botão de voltar em qualquer página que não seja a Home ("/")
  const showBackButton = location.pathname !== "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative">
        
        {/* Botão Floating de Voltar */}
        {showBackButton && (
          <div className="fixed bottom-6 left-6 z-50 print:hidden animate-in fade-in zoom-in duration-300">
            <Button 
              onClick={() => navigate(-1)}
              variant="secondary"
              className="shadow-2xl bg-white hover:bg-gray-50 text-[#F76300] border border-gray-100 rounded-full h-14 w-14 md:w-auto md:px-6 md:h-14 gap-0 md:gap-2 transition-all hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
              title="Voltar"
            >
              <ArrowLeft size={24} strokeWidth={2.5} />
              
              {/* Texto aparece apenas em telas médias (md) ou maiores */}
              <span className="hidden md:inline font-bold text-lg uppercase tracking-wide">
                Voltar
              </span>
            </Button>
          </div>
        )}

        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;