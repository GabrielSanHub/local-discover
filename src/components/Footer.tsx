import { Link } from "react-router-dom";
import { MapPin, Instagram, Facebook, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-sunset flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">Encontre Aqui</span>
          </div>
          <p className="text-sm opacity-70">
            Descubra os melhores restaurantes, serviços e experiências da Praia do Forte.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Explorar</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/restaurantes" className="hover:opacity-100 transition-opacity">Sabores</Link></li>
            <li><Link to="/experiencias" className="hover:opacity-100 transition-opacity">Experiências</Link></li>
            <li><Link to="/locais" className="hover:opacity-100 transition-opacity">Locais Próximos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Institucional</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/sobre" className="hover:opacity-100 transition-opacity">Sobre o Projeto</Link></li>
            <li><Link to="/privacidade" className="hover:opacity-100 transition-opacity">Política de Privacidade</Link></li>
            <li><Link to="/login" className="hover:opacity-100 transition-opacity">Entrar / Cadastrar</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(71) 3676-0000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contato@encontreaqui.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Praia do Forte, BA - Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-sm opacity-50">
        © 2026 Encontre Aqui. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
