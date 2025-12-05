import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Activity, Brain, Apple, Dumbbell, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Apple,
    title: "Nutricionista",
    description:
      "Nutrição é fornecer componentes fundamentais para organismos em pleno funcionamento, promovendo saúde através da alimentação balanceada.",
    slug: "nutricionista",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Activity,
    title: "Nutrólogo",
    description:
      "Especialidade médica que estuda e trata doenças relacionadas à nutrição com abordagem clínica e personalizada.",
    slug: "nutrologo",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Dumbbell,
    title: "Educador Físico",
    description:
      "Promoção da saúde e desenvolvimento social através de atividades físicas personalizadas para seu perfil.",
    slug: "educador-fisico",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Psicólogo",
    description:
      "Estudo da mente e comportamento humano, promovendo bem-estar emocional e qualidade de vida.",
    slug: "psicologo",
    color: "from-blue-500 to-indigo-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const Services = () => {
  return (
    <section id="servicos" className="py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6"
          >
            Nossos Serviços
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Conheça Nossas{" "}
            <span className="text-gradient">Especialidades</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Agende uma consulta com o melhor time de especialistas e melhore sua qualidade de vida.
            Descubra nossos serviços e comece sua jornada para uma vida mais saudável.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.slug} variants={cardVariants}>
              <Link to={`/servicos/${service.slug}`} className="block h-full">
                <Card className="p-6 h-full flex flex-col relative group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm hover-lift overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                  </motion.div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center text-primary font-medium">
                    <span className="mr-2">Saiba Mais</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="group" asChild>
            <Link to="/servicos">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
