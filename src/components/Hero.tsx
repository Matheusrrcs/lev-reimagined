import { Button } from "./ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-doctor.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-secondary rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-secondary-foreground">
                Atendimento Online de Qualidade
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
              Transforme sua{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                saúde e bem-estar
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Agende agora sua consulta online com nossos especialistas para receber orientações
              personalizadas que o ajudarão a alcançar uma vida mais saudável e equilibrada, de
              forma rápida, segura e prática.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base" asChild>
                <a href="https://wa.me/557197218432" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#servicos">
                  Conheça Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary font-display">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-display">1000+</div>
                <div className="text-sm text-muted-foreground">Pacientes Atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-display">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src={heroImage}
                alt="Profissional de saúde da Clínica Levin"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
