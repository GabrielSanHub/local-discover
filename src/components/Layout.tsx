import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideFooter }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    {/* Removi o 'pt-16' daqui. Agora o conteúdo encosta no Header corretamente. */}
    <main className="flex-1">{children}</main>
    {!hideFooter && <Footer />}
  </div>
);

export default Layout;