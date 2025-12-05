import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, ShoppingBag, Leaf, Award, Truck, Shield, Star, ArrowUpRight } from "lucide-react";

const partners = [
  {
    name: "Growth Supplements",
    description: "Suplementos de alta qualidade para nutrição esportiva e saúde. Whey protein, creatina, vitaminas e muito mais.",
    category: "Suplementação Esportiva",
    url: "https://www.gsuplementos.com.br",
    features: ["Frete grátis acima de R$99", "Produtos nacionais", "Alta pureza"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Vitafor",
    description: "Líder em suplementos naturais e vitaminas. Produtos para imunidade, energia e bem-estar geral.",
    category: "Vitaminas e Minerais",
    url: "https://www.vitafor.com.br",
    features: ["Qualidade premium", "Fórmulas exclusivas", "Aprovado ANVISA"],
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    name: "Essential Nutrition",
    description: "Suplementos premium com ingredientes de alta biodisponibilidade. Foco em qualidade e eficácia.",
    category: "Nutrição Premium",
    url: "https://www.essentialnutrition.com.br",
    features: ["Ingredientes importados", "Clean label", "Sem aditivos"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Puravida",
    description: "Produtos naturais e orgânicos para uma vida mais saudável. Superfoods, colágenos e suplementos naturais.",
    category: "Produtos Naturais",
    url: "https://www.puravida.com.br",
    features: ["100% Natural", "Orgânicos", "Veganos disponíveis"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Loja do Suplemento",
    description: "Grande variedade de marcas e produtos com preços competitivos. Entrega rápida para todo Brasil.",
    category: "Multi-marcas",
    url: "https://www.lojadosuplemento.com.br",
    features: ["Melhores preços", "Várias marcas", "Entrega rápida"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Farmácia de Manipulação",
    description: "Fórmulas personalizadas conforme prescrição médica. Manipulados de alta qualidade.",
    category: "Manipulados",
    url: "https://wa.me/557197218432",
    features: ["Prescrição personalizada", "Qualidade garantida", "Acompanhamento"],
    gradient: "from-purple-500 to-pink-500",
  },
];

const benefits = [
  {
    icon: Award,
    title: "Parceiros Selecionados",
    description: "Indicamos apenas lojas e marcas que conhecemos e confiamos na qualidade dos produtos.",
  },
  {
    icon: Shield,
    title: "Segurança na Compra",
    description: "Todos os parceiros são estabelecimentos confiáveis com garantia de procedência.",
  },
  {
    icon: Truck,
    title: "Entrega em Todo Brasil",
    description: "Nossos parceiros entregam em todo o território nacional com rapidez.",
  },
  {
    icon: Star,
    title: "Prescrição Personalizada",
    description: "Os produtos são indicados de acordo com sua consulta e necessidades específicas.",
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

const Products = () => {
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
                <ShoppingBag className="w-4 h-4 mr-2" />
                Parceiros Recomendados
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Onde Comprar seus{" "}
                <span className="text-gradient">Suplementos</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Indicamos lojas e marcas de confiança para você adquirir os produtos prescritos em sua consulta com total segurança.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Todos os parceiros foram selecionados por nossa equipe levando em consideração qualidade, procedência e atendimento.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full text-center border-border/50 bg-card/50 hover-lift">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Lojas <span className="text-gradient">Parceiras</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Clique para acessar o site de cada parceiro e adquirir seus produtos com segurança.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {partners.map((partner) => (
                <motion.div key={partner.name} variants={cardVariants}>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="p-6 h-full flex flex-col border-border/50 bg-card hover-lift group cursor-pointer relative overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />
                      
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${partner.gradient} text-white mb-3`}>
                            {partner.category}
                          </span>
                          <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                            {partner.name}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                        {partner.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {partner.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-muted text-muted-foreground"
                          >
                            <Leaf className="w-3 h-3 mr-1" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="p-8 md:p-12 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      Importante: Consulte Antes de Comprar
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A suplementação deve ser sempre orientada por um profissional de saúde. Agende sua consulta conosco antes de adquirir qualquer produto para garantir que a indicação seja adequada às suas necessidades específicas.
                    </p>
                    <Button asChild>
                      <a href="https://wa.me/557197218432" target="_blank" rel="noopener noreferrer">
                        Agendar Consulta
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
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

export default Products;
