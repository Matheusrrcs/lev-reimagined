import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Pronto para Transformar sua Saúde?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Agende agora sua consulta online e dê o primeiro passo rumo a uma vida mais saudável e
            equilibrada com nossos especialistas.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-base shadow-card-hover hover:shadow-card"
            asChild
          >
            <a href="https://wa.me/557197218432" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Agendar Minha Consulta Agora
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
