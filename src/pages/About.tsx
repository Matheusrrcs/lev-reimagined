import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Heart, Award, Users } from "lucide-react";
import aboutImage from "@/assets/about-clinic.jpg";

const values = [
  {
    icon: Heart,
    title: "Compromisso com o Cuidado",
    description:
      "Cada paciente é único e merece atendimento personalizado, com atenção aos detalhes e respeito às suas necessidades individuais.",
  },
  {
    icon: Award,
    title: "Excelência Profissional",
    description:
      "Nossa equipe é formada por profissionais altamente qualificados e em constante atualização para oferecer o melhor em saúde e bem-estar.",
  },
  {
    icon: Target,
    title: "Resultados Sustentáveis",
    description:
      "Focamos em mudanças reais e duradouras, não em soluções rápidas. Nosso objetivo é sua saúde a longo prazo.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description:
      "Acreditamos que a tecnologia deve aproximar, não afastar. Por isso, mantemos um atendimento acolhedor e próximo, mesmo à distância.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                  Sobre a{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Clínica Levin
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Aliando o atendimento clínico de alta performance à tradição técnica dos serviços
                  presenciais, oferecemos cuidado de excelência no ambiente online.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Para quem gosta de ser bem atendido, com compromisso, cuidado e atenção. De onde
                  você precisar, com mais comodidade para você!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-card-hover">
                  <img
                    src={aboutImage}
                    alt="Interior moderno da Clínica Levin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Atendimento Online de Qualidade com Técnicas Avançadas
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Voltada exclusivamente para atendimento online, a Clínica Levin oferece o que há de
                melhor em técnica e estrutura para tornar seu atendimento à distância o mais
                surpreendente. Utilizamos tecnologia de ponta e metodologias comprovadas para
                garantir resultados excepcionais.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full shadow-card hover:shadow-card-hover transition-smooth">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl font-bold font-display text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-5xl font-bold font-display text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Pacientes Atendidos</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-5xl font-bold font-display text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Taxa de Satisfação</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-5xl font-bold font-display text-primary mb-2">4</div>
                <div className="text-muted-foreground">Especialidades</div>
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
