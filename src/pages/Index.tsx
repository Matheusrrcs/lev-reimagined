import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Shield, Clock, Users, Heart, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Clock,
    title: "Atendimento Flexível",
    description: "Consultas online no horário que melhor se encaixa na sua rotina.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Segurança e Privacidade",
    description: "Suas informações protegidas com os mais altos padrões de segurança.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Equipe Qualificada",
    description: "Profissionais experientes e em constante atualização.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Heart,
    title: "Cuidado Personalizado",
    description: "Cada atendimento é único e focado nas suas necessidades.",
    gradient: "from-pink-500 to-rose-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const Index = () => {
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />

        {/* Features Section */}
        <section ref={featuresRef} className="py-28 bg-muted/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6"
              >
                Por que nos escolher
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Por que escolher a{" "}
                <span className="text-gradient">Clínica Levin?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Oferecemos o que há de melhor em atendimento online com tecnologia de ponta e
                profissionais altamente qualificados.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div key={feature.title} variants={cardVariants}>
                  <Card className="p-6 text-center h-full group cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover-lift relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-5 relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                    </motion.div>
                    
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
