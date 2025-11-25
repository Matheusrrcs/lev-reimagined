import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Atendimento Flexível",
    description: "Consultas online no horário que melhor se encaixa na sua rotina.",
  },
  {
    icon: Shield,
    title: "Segurança e Privacidade",
    description: "Suas informações protegidas com os mais altos padrões de segurança.",
  },
  {
    icon: Users,
    title: "Equipe Qualificada",
    description: "Profissionais experientes e em constante atualização.",
  },
  {
    icon: Heart,
    title: "Cuidado Personalizado",
    description: "Cada atendimento é único e focado nas suas necessidades.",
  },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Por que escolher a Clínica Levin?
              </h2>
              <p className="text-lg text-muted-foreground">
                Oferecemos o que há de melhor em atendimento online com tecnologia de ponta e
                profissionais altamente qualificados.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full shadow-card hover:shadow-card-hover transition-smooth">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
