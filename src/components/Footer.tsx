import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">L</span>
              </div>
              <span className="text-xl font-display font-bold text-foreground">Clínica Levin</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando vidas através de atendimento online de qualidade em saúde e bem-estar.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/produtos"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Produtos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/servicos/nutricionista"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Nutricionista
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/nutrologo"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Nutrólogo
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/educador-fisico"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Educador Físico
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/psicologo"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Psicólogo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Phone size={18} className="mt-1 text-primary" />
                <span className="text-sm">(71) 9721-8432</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Mail size={18} className="mt-1 text-primary" />
                <span className="text-sm">contato@clinicalevin.com.br</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={18} className="mt-1 text-primary" />
                <span className="text-sm">Atendimento 100% Online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Clínica Levin. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
