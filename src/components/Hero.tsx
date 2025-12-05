import { Button } from "./ui/button";
import { Phone, ArrowRight, Sparkles, Star, Shield, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-doctor.jpg";
import { useRef } from "react";

const floatingElements = [
  { icon: Star, delay: 0, position: "top-20 left-10" },
  { icon: Shield, delay: 0.5, position: "top-40 right-20" },
  { icon: CheckCircle, delay: 1, position: "bottom-40 left-20" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-subtle">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating Elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: el.delay + 1, duration: 0.5 }}
          className={`absolute ${el.position} hidden lg:block`}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: el.delay }}
            className="glass-card p-3 rounded-xl shadow-lg"
          >
            <el.icon className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 glass-card rounded-full"
            >
              <Sparkles className="w-4 h-4 text-primary mr-2 animate-pulse-soft" />
              <span className="text-sm font-medium text-foreground">
                Atendimento Online de Qualidade
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]"
            >
              Transforme sua{" "}
              <span className="text-gradient relative">
                saúde e bem-estar
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              Agende agora sua consulta online com nossos especialistas para receber orientações
              personalizadas que o ajudarão a alcançar uma vida mais saudável e equilibrada.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="text-base group relative overflow-hidden" asChild>
                <a href="https://wa.me/557197218432" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Agendar Consulta
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base group hover-lift" asChild>
                <a href="#servicos">
                  Conheça Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
            >
              {[
                { value: "5+", label: "Anos de Experiência" },
                { value: "1000+", label: "Pacientes Atendidos" },
                { value: "98%", label: "Satisfação" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient font-display group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Decorative ring */}
            <motion.div
              className="absolute -inset-4 rounded-[2rem] border-2 border-primary/20"
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <motion.img
                src={heroImage}
                alt="Profissional de saúde da Clínica Levin"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.02 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center animate-pulse-soft">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Consulta 100% Online</p>
                    <p className="text-sm text-muted-foreground">Atendimento de qualquer lugar</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background blobs */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
