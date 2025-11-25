import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Activity, Brain, Apple, Dumbbell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Apple,
    title: "Nutricionista",
    description:
      "A Nutrição é o ato de fornecer componentes fundamentais para organismos e células em pleno funcionamento, promovendo saúde através da alimentação balanceada.",
    slug: "nutricionista",
  },
  {
    icon: Activity,
    title: "Nutrólogo",
    description:
      "A Nutrologia é especialidade médica reconhecida pelo Conselho Federal de Medicina, que entre suas múltiplas abordagens estuda e trata doenças relacionadas à nutrição.",
    slug: "nutrologo",
  },
  {
    icon: Dumbbell,
    title: "Educador Físico",
    description:
      "O educador físico tem um papel fundamental na promoção da saúde e no desenvolvimento social das pessoas através de atividades físicas personalizadas.",
    slug: "educador-fisico",
  },
  {
    icon: Brain,
    title: "Psicólogo",
    description:
      "Psicologia é a área da ciência que estuda a mente e o comportamento humano e as suas interações com o ambiente físico e social, promovendo bem-estar emocional.",
    slug: "psicologo",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Conheça Nossas Especialidades
          </h2>
          <p className="text-lg text-muted-foreground">
            Agende uma consulta com o melhor time de especialistas e melhore sua qualidade de vida.
            Descubra nossos serviços e comece sua jornada para uma vida mais saudável hoje mesmo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer border-border">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Link to={`/servicos/${service.slug}`}>
                  <Button variant="ghost" className="w-full group-hover:text-primary">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
