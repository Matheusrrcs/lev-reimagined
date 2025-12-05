import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook, Linkedin, MapPin, ArrowUpRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  servicos: [
    { name: "Nutricionista", path: "/servicos/nutricionista" },
    { name: "Nutrólogo", path: "/servicos/nutrologo" },
    { name: "Educador Físico", path: "/servicos/educador-fisico" },
    { name: "Psicólogo", path: "/servicos/psicologo" },
  ],
  empresa: [
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Produtos", path: "/produtos" },
    { name: "Blog", path: "/blog" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-white">L</span>
              </motion.div>
              <span className="text-xl font-display font-bold">Clínica Levin</span>
            </Link>
            <p className="text-background/70 mb-6 leading-relaxed">
              Transformando vidas através da saúde e bem-estar com atendimento online de excelência.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/557197218432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-background/70 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-background/10 group-hover:bg-primary/20 flex items-center justify-center mr-3 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>(71) 9721-8432</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@clinicalevin.com.br"
                  className="flex items-center text-background/70 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-background/10 group-hover:bg-primary/20 flex items-center justify-center mr-3 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>contato@clinicalevin.com.br</span>
                </a>
              </li>
              <li className="flex items-start text-background/70">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Atendimento 100% Online em todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm flex items-center">
              © {new Date().getFullYear()} Clínica Levin. Feito com{" "}
              <Heart className="w-4 h-4 mx-1 text-primary fill-primary" /> para sua saúde.
            </p>
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
