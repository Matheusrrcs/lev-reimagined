import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import nutritionImage from "@/assets/service-nutrition.jpg";
import physicalImage from "@/assets/service-physical.jpg";
import psychologyImage from "@/assets/service-psychology.jpg";

const services = {
  nutricionista: {
    title: "Nutricionista",
    subtitle: "Transforme sua relação com a alimentação",
    description:
      "A Nutrição é o ato de fornecer componentes fundamentais para organismos e células em pleno funcionamento. Nossos nutricionistas trabalham para promover saúde através da alimentação balanceada e personalizada.",
    image: nutritionImage,
    benefits: [
      "Plano alimentar personalizado",
      "Acompanhamento nutricional contínuo",
      "Educação alimentar",
      "Estratégias para mudança de hábitos",
      "Orientação para necessidades especiais",
      "Suporte para objetivos específicos",
    ],
    conditions: [
      "Emagrecimento saudável",
      "Ganho de massa muscular",
      "Diabetes e pré-diabetes",
      "Hipertensão arterial",
      "Distúrbios gastrointestinais",
      "Gestação e lactação",
    ],
  },
  nutrologo: {
    title: "Nutrólogo",
    subtitle: "Medicina especializada em nutrição",
    description:
      "A Nutrologia é especialidade médica reconhecida pelo Conselho Federal de Medicina, que entre suas múltiplas abordagens estuda e trata doenças relacionadas à nutrição, oferecendo uma visão médica completa sobre alimentação e saúde.",
    image: nutritionImage,
    benefits: [
      "Avaliação médica completa",
      "Prescrição de suplementação quando necessário",
      "Tratamento de deficiências nutricionais",
      "Abordagem integrativa da saúde",
      "Exames laboratoriais direcionados",
      "Protocolos médicos personalizados",
    ],
    conditions: [
      "Deficiências vitamínicas",
      "Obesidade e sobrepeso",
      "Síndrome metabólica",
      "Sarcopenia",
      "Distúrbios do metabolismo",
      "Suplementação terapêutica",
    ],
  },
  "educador-fisico": {
    title: "Educador Físico",
    subtitle: "Movimento é saúde",
    description:
      "O educador físico tem um papel fundamental na promoção da saúde e no desenvolvimento social das pessoas. Através de atividades físicas personalizadas, ajudamos você a alcançar seus objetivos de forma segura e eficiente.",
    image: physicalImage,
    benefits: [
      "Programa de treino personalizado",
      "Acompanhamento online em tempo real",
      "Progressão segura e eficiente",
      "Prevenção de lesões",
      "Motivação e suporte constante",
      "Adaptação para todas as idades",
    ],
    conditions: [
      "Sedentarismo",
      "Condicionamento físico",
      "Reabilitação física",
      "Preparação esportiva",
      "Qualidade de vida",
      "Performance atlética",
    ],
  },
  psicologo: {
    title: "Psicólogo",
    subtitle: "Cuidando da sua saúde mental",
    description:
      "Psicologia é a área da ciência que estuda a mente e o comportamento humano e as suas interações com o ambiente físico e social. Nossos psicólogos oferecem suporte profissional para promover bem-estar emocional e mental.",
    image: psychologyImage,
    benefits: [
      "Atendimento humanizado e acolhedor",
      "Ambiente seguro e confidencial",
      "Técnicas baseadas em evidências",
      "Horários flexíveis online",
      "Acompanhamento personalizado",
      "Suporte em momentos difíceis",
    ],
    conditions: [
      "Ansiedade e depressão",
      "Estresse e burnout",
      "Relacionamentos",
      "Autoestima e autoconhecimento",
      "Transtornos alimentares",
      "Desenvolvimento pessoal",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? services[slug as keyof typeof services] : null;

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

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
                <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
                  {service.title}
                </h1>
                <p className="text-2xl text-primary font-medium mb-6">{service.subtitle}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <Button size="lg" asChild>
                  <a href="https://wa.me/557197218432" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Agendar Consulta
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-3xl overflow-hidden shadow-card-hover">
                  <img
                    src={service.image}
                    alt={`Serviço de ${service.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits & Conditions */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 h-full shadow-card">
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Benefícios do Tratamento
                  </h2>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-8 h-full shadow-card">
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    O que Tratamos
                  </h2>
                  <ul className="space-y-4">
                    {service.conditions.map((condition) => (
                      <li key={condition} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{condition}</span>
                      </li>
                    ))}
                  </ul>
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

export default ServiceDetail;
