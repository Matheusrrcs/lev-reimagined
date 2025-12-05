import { useParams, Navigate, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Phone, ArrowLeft, Clock, Video, Shield, MessageCircle, FileText, Star, Sparkles } from "lucide-react";
import nutritionImage from "@/assets/service-nutrition.jpg";
import physicalImage from "@/assets/service-physical.jpg";
import psychologyImage from "@/assets/service-psychology.jpg";

const services = {
  nutricionista: {
    title: "Nutricionista",
    subtitle: "Transforme sua relação com a alimentação",
    description:
      "A Nutrição é o ato de fornecer componentes fundamentais para organismos e células em pleno funcionamento. Nossos nutricionistas trabalham para promover saúde através da alimentação balanceada e personalizada, respeitando seu estilo de vida e preferências.",
    longDescription:
      "Através de uma avaliação completa do seu histórico alimentar, rotina e objetivos, elaboramos um plano alimentar totalmente personalizado. Nosso acompanhamento inclui orientações práticas, receitas, lista de compras e suporte contínuo para garantir sua evolução.",
    image: nutritionImage,
    gradient: "from-emerald-500 to-teal-500",
    benefits: [
      "Plano alimentar personalizado e flexível",
      "Acompanhamento nutricional contínuo",
      "Educação alimentar para autonomia",
      "Estratégias para mudança de hábitos",
      "Orientação para necessidades especiais",
      "Receitas e dicas práticas",
    ],
    conditions: [
      "Emagrecimento saudável",
      "Ganho de massa muscular",
      "Diabetes e pré-diabetes",
      "Hipertensão arterial",
      "Distúrbios gastrointestinais",
      "Gestação e lactação",
    ],
    process: [
      { step: "1", title: "Anamnese Completa", desc: "Avaliação detalhada do histórico alimentar e de saúde" },
      { step: "2", title: "Plano Personalizado", desc: "Elaboração do plano alimentar adequado aos seus objetivos" },
      { step: "3", title: "Orientações", desc: "Explicação detalhada e dicas práticas para o dia a dia" },
      { step: "4", title: "Acompanhamento", desc: "Retornos periódicos para ajustes e evolução" },
    ],
  },
  nutrologo: {
    title: "Nutrólogo",
    subtitle: "Medicina especializada em nutrição",
    description:
      "A Nutrologia é especialidade médica reconhecida pelo Conselho Federal de Medicina, que estuda e trata doenças relacionadas à nutrição, oferecendo uma visão médica completa sobre alimentação e saúde.",
    longDescription:
      "O nutrólogo realiza avaliação clínica completa, podendo solicitar exames laboratoriais para identificar deficiências nutricionais e prescrever tratamentos específicos, incluindo suplementação quando necessário. É a especialidade ideal para quem busca uma abordagem médica integrada.",
    image: nutritionImage,
    gradient: "from-teal-500 to-cyan-500",
    benefits: [
      "Avaliação médica completa",
      "Solicitação de exames laboratoriais",
      "Prescrição de suplementação",
      "Tratamento de deficiências nutricionais",
      "Abordagem integrativa da saúde",
      "Protocolos médicos personalizados",
    ],
    conditions: [
      "Deficiências vitamínicas e minerais",
      "Obesidade e sobrepeso",
      "Síndrome metabólica",
      "Sarcopenia",
      "Distúrbios do metabolismo",
      "Suplementação terapêutica",
    ],
    process: [
      { step: "1", title: "Consulta Médica", desc: "Avaliação clínica completa e histórico de saúde" },
      { step: "2", title: "Exames", desc: "Solicitação de exames laboratoriais quando necessário" },
      { step: "3", title: "Diagnóstico", desc: "Identificação de deficiências e necessidades" },
      { step: "4", title: "Tratamento", desc: "Prescrição de tratamento e acompanhamento médico" },
    ],
  },
  "educador-fisico": {
    title: "Educador Físico",
    subtitle: "Movimento é saúde",
    description:
      "O educador físico tem um papel fundamental na promoção da saúde através de atividades físicas personalizadas. Ajudamos você a alcançar seus objetivos de forma segura e eficiente.",
    longDescription:
      "Com base em uma avaliação física e dos seus objetivos, elaboramos um programa de treinamento completo e personalizado. O acompanhamento online permite correções em tempo real, adaptações conforme sua evolução e motivação constante para manter a consistência.",
    image: physicalImage,
    gradient: "from-cyan-500 to-blue-500",
    benefits: [
      "Programa de treino personalizado",
      "Acompanhamento online em tempo real",
      "Progressão segura e eficiente",
      "Prevenção de lesões",
      "Motivação e suporte constante",
      "Treinos adaptados para casa ou academia",
    ],
    conditions: [
      "Sedentarismo",
      "Condicionamento físico",
      "Reabilitação física",
      "Preparação esportiva",
      "Melhora da qualidade de vida",
      "Performance atlética",
    ],
    process: [
      { step: "1", title: "Avaliação Física", desc: "Análise do condicionamento e limitações" },
      { step: "2", title: "Definição de Metas", desc: "Estabelecimento de objetivos realistas" },
      { step: "3", title: "Programa de Treino", desc: "Elaboração do plano de exercícios personalizado" },
      { step: "4", title: "Evolução", desc: "Acompanhamento e progressão dos treinos" },
    ],
  },
  psicologo: {
    title: "Psicólogo",
    subtitle: "Cuidando da sua saúde mental",
    description:
      "Psicologia é a área da ciência que estuda a mente e o comportamento humano. Nossos psicólogos oferecem suporte profissional para promover bem-estar emocional e mental.",
    longDescription:
      "A terapia online oferece o mesmo nível de qualidade e eficácia da presencial, com a vantagem da comodidade e privacidade do seu próprio ambiente. Utilizamos abordagens baseadas em evidências científicas para ajudar você a superar desafios e desenvolver-se pessoalmente.",
    image: psychologyImage,
    gradient: "from-blue-500 to-indigo-500",
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
      "Relacionamentos interpessoais",
      "Autoestima e autoconhecimento",
      "Transtornos alimentares",
      "Desenvolvimento pessoal",
    ],
    process: [
      { step: "1", title: "Acolhimento", desc: "Primeira sessão para conhecer sua história" },
      { step: "2", title: "Avaliação", desc: "Compreensão das demandas e objetivos terapêuticos" },
      { step: "3", title: "Processo", desc: "Sessões semanais de psicoterapia" },
      { step: "4", title: "Evolução", desc: "Acompanhamento do seu desenvolvimento" },
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
        <section className="py-28 gradient-subtle relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                to="/servicos"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Serviços
              </Link>
            </motion.div>

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
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${service.gradient} text-white mb-6`}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Especialidade
                </motion.span>

                <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
                  {service.title}
                </h1>
                <p className="text-2xl text-gradient font-medium mb-6">{service.subtitle}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">Online</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">~50min</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">Sigilo</span>
                  </div>
                </div>

                <Button size="lg" className="group" asChild>
                  <a href="https://wa.me/557197218432" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Agendar Consulta
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={`Serviço de ${service.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                
                {/* Rating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Excelência</p>
                      <p className="text-sm text-muted-foreground">98% satisfação</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Como Funciona
              </h2>
              <p className="text-muted-foreground">
                Processo simples e organizado para seu atendimento.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full text-center border-border/50 bg-card/50 hover-lift">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                      {item.step}
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Conditions */}
        <section className="py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 h-full border-border/50 bg-card shadow-xl">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Benefícios do Tratamento
                  </h2>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
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
                <Card className="p-8 h-full border-border/50 bg-card shadow-xl">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    O que Tratamos
                  </h2>
                  <ul className="space-y-4">
                    {service.conditions.map((condition) => (
                      <li key={condition} className="flex items-start">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Card className={`p-8 md:p-12 border-0 bg-gradient-to-br ${service.gradient} text-white text-center`}>
                <h2 className="text-3xl font-display font-bold mb-4">
                  Pronto para começar?
                </h2>
                <p className="text-white/90 mb-8 max-w-xl mx-auto">
                  Agende sua consulta agora e dê o primeiro passo para uma vida mais saudável com acompanhamento profissional especializado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90" asChild>
                    <a href="https://wa.me/557197218432" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link to="/servicos">
                      Ver Outros Serviços
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;
