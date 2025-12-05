import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Activity, Brain, Apple, Dumbbell, ArrowRight, CheckCircle, Sparkles, Clock, Video, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Apple,
    title: "Nutricionista",
    slug: "nutricionista",
    description: "A Nutrição é o ato de fornecer componentes fundamentais para organismos e células em pleno funcionamento, promovendo saúde através da alimentação balanceada.",
    benefits: [
      "Plano alimentar personalizado",
      "Reeducação alimentar",
      "Controle de peso saudável",
      "Orientação para objetivos específicos",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Activity,
    title: "Nutrólogo",
    slug: "nutrologo",
    description: "A Nutrologia é especialidade médica reconhecida pelo Conselho Federal de Medicina, que entre suas múltiplas abordagens estuda e trata doenças relacionadas à nutrição.",
    benefits: [
      "Diagnóstico de carências nutricionais",
      "Prescrição de suplementação",
      "Tratamento de obesidade",
      "Acompanhamento médico completo",
    ],
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Dumbbell,
    title: "Educador Físico",
    slug: "educador-fisico",
    description: "O educador físico tem um papel fundamental na promoção da saúde e no desenvolvimento social das pessoas através de atividades físicas personalizadas.",
    benefits: [
      "Treinos personalizados",
      "Prescrição de exercícios",
      "Acompanhamento de performance",
      "Orientação para objetivos fitness",
    ],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Psicólogo",
    slug: "psicologo",
    description: "Psicologia é a área da ciência que estuda a mente e o comportamento humano e as suas interações com o ambiente físico e social, promovendo bem-estar emocional.",
    benefits: [
      "Terapia individual online",
      "Manejo de ansiedade e estresse",
      "Desenvolvimento pessoal",
      "Suporte emocional contínuo",
    ],
    gradient: "from-blue-500 to-indigo-500",
  },
];

const howItWorks = [
  {
    icon: MessageCircle,
    title: "1. Agende sua Consulta",
    description: "Entre em contato pelo WhatsApp e escolha o melhor horário para você.",
  },
  {
    icon: Video,
    title: "2. Consulta Online",
    description: "Realize sua consulta por videochamada de onde estiver, com total privacidade.",
  },
  {
    icon: FileText,
    title: "3. Receba seu Plano",
    description: "Receba orientações personalizadas e materiais de apoio por e-mail.",
  },
  {
    icon: Clock,
    title: "4. Acompanhamento",
    description: "Tenha suporte contínuo e retornos programados para acompanhar sua evolução.",
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

const ServicesPage = () => {
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Especialidades
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Nossos{" "}
                <span className="text-gradient">Serviços</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Oferecemos uma ampla gama de especialidades para cuidar da sua saúde de forma
                completa e integrada.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Todos os atendimentos são realizados online, com a mesma qualidade de um atendimento presencial, 
                de qualquer lugar do Brasil.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How it Works */}
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
                Processo simples e prático para você cuidar da sua saúde.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full text-center border-border/50 bg-card/50 hover-lift">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Nossas <span className="text-gradient">Especialidades</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Escolha a especialidade que melhor atende suas necessidades e comece sua jornada.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {services.map((service) => (
                <motion.div key={service.slug} variants={cardVariants}>
                  <Card className="p-8 h-full border-border/50 bg-card hover-lift group relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                          {service.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <Button asChild>
                            <a href="https://wa.me/557197218432" target="_blank" rel="noopener noreferrer">
                              Agendar Consulta
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to={`/servicos/${service.slug}`}>
                              Saiba Mais
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-display font-bold text-foreground mb-4">
                  Perguntas Frequentes
                </h2>
                <p className="text-muted-foreground">
                  Tire suas dúvidas sobre nossos serviços online.
                </p>
              </motion.div>

              <div className="space-y-4">
                {[
                  {
                    question: "Como funciona a consulta online?",
                    answer: "As consultas são realizadas por videochamada em plataforma segura. Você receberá um link no horário agendado e poderá conversar com o profissional de onde estiver.",
                  },
                  {
                    question: "A consulta online tem a mesma qualidade da presencial?",
                    answer: "Sim! Nossos profissionais são treinados para oferecer atendimento de excelência no formato online, com anamnese completa e plano de tratamento personalizado.",
                  },
                  {
                    question: "Como recebo meu plano de tratamento?",
                    answer: "Após a consulta, você recebe por e-mail todos os documentos: plano alimentar, prescrições, orientações e materiais de apoio.",
                  },
                  {
                    question: "Posso tirar dúvidas entre as consultas?",
                    answer: "Sim! Oferecemos suporte via WhatsApp para dúvidas pontuais entre as consultas, garantindo acompanhamento contínuo.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-border/50">
                      <h4 className="font-display font-bold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
