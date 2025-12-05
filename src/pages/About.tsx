import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Target, Heart, Award, Users, CheckCircle, Star, Sparkles, Shield, Clock, Video } from "lucide-react";
import aboutImage from "@/assets/about-clinic.jpg";
import { useRef } from "react";

const values = [
  {
    icon: Heart,
    title: "Compromisso com o Cuidado",
    description: "Cada paciente é único e merece atendimento personalizado, com atenção aos detalhes.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Excelência Profissional",
    description: "Equipe altamente qualificada e em constante atualização científica.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Resultados Sustentáveis",
    description: "Focamos em mudanças reais e duradouras, não em soluções rápidas.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Tecnologia que aproxima, com atendimento acolhedor mesmo à distância.",
    gradient: "from-blue-500 to-indigo-500",
  },
];

const differentials = [
  "Profissionais especializados e experientes",
  "Atendimento 100% online e prático",
  "Metodologias baseadas em evidências científicas",
  "Acompanhamento contínuo e personalizado",
  "Flexibilidade de horários",
  "Acesso de qualquer lugar do Brasil",
  "Plataforma segura e privada",
  "Suporte entre consultas",
];

const timeline = [
  {
    year: "2019",
    title: "Fundação",
    description: "Início das atividades com foco em atendimento nutricional online de qualidade.",
  },
  {
    year: "2020",
    title: "Expansão",
    description: "Ampliação da equipe com novos especialistas e mais de 500 pacientes atendidos.",
  },
  {
    year: "2022",
    title: "Crescimento",
    description: "Inclusão de novas especialidades: Psicologia e Educação Física.",
  },
  {
    year: "2024",
    title: "Consolidação",
    description: "Mais de 1000 pacientes satisfeitos e reconhecimento como referência em saúde online.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const About = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-28 gradient-subtle relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Conheça Nossa História
                </motion.span>
                
                <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Sobre a{" "}
                  <span className="text-gradient">Clínica Levin</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Aliando o atendimento clínico de alta performance à tradição técnica dos serviços
                  presenciais, oferecemos cuidado de excelência no ambiente online.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Para quem gosta de ser bem atendido, com compromisso, cuidado e atenção. De onde
                  você precisar, com mais comodidade para você!
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">100% Online</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Seguro e Privado</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Horários Flexíveis</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={aboutImage}
                    alt="Interior moderno da Clínica Levin"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">98% Satisfação</p>
                      <p className="text-sm text-muted-foreground">Dos nossos pacientes</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "5+", label: "Anos de Experiência" },
                { value: "1000+", label: "Pacientes Atendidos" },
                { value: "98%", label: "Taxa de Satisfação" },
                { value: "4", label: "Especialidades" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold font-display text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-background/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Nossos Valores
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                O que nos <span className="text-gradient">Move</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é transformar vidas através de um atendimento de saúde humanizado,
                acessível e de excelência técnica.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value) => (
                <motion.div key={value.title} variants={cardVariants}>
                  <Card className="p-6 h-full border-border/50 bg-card/50 hover-lift group relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 relative`}>
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Differentials */}
        <section className="py-28 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                  Por que nos escolher
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Nossos <span className="text-gradient">Diferenciais</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Combinamos tecnologia de ponta com atendimento humanizado para oferecer a melhor
                  experiência em saúde online.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {differentials.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 border-border/50 bg-card shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                    Nossa Trajetória
                  </h3>
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                            {item.year}
                          </div>
                          {index < timeline.length - 1 && (
                            <div className="w-0.5 h-full bg-border mt-2" />
                          )}
                        </div>
                        <div className="pb-6">
                          <h4 className="font-display font-bold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default About;
