import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, Sparkles, TrendingUp, Heart, Brain, Apple, Dumbbell } from "lucide-react";

const categories = [
  { name: "Todos", icon: TrendingUp, active: true },
  { name: "Nutrição", icon: Apple, active: false },
  { name: "Exercícios", icon: Dumbbell, active: false },
  { name: "Saúde Mental", icon: Brain, active: false },
  { name: "Bem-estar", icon: Heart, active: false },
];

const featuredPost = {
  title: "Guia Completo: Como Montar um Prato Saudável e Equilibrado",
  excerpt: "Aprenda os princípios fundamentais para criar refeições nutritivas e saborosas que vão transformar sua alimentação e energia no dia a dia. Um guia prático para todas as refeições.",
  category: "Nutrição",
  date: "05 Dez 2024",
  readTime: "12 min",
  featured: true,
};

const blogPosts = [
  {
    title: "10 Dicas para uma Alimentação Saudável no Dia a Dia",
    excerpt: "Descubra como pequenas mudanças na sua alimentação podem fazer uma grande diferença na sua saúde e bem-estar.",
    category: "Nutrição",
    date: "01 Dez 2024",
    readTime: "5 min",
  },
  {
    title: "A Importância da Atividade Física para a Saúde Mental",
    excerpt: "Entenda a conexão entre exercícios físicos e saúde mental, e como começar uma rotina de atividades.",
    category: "Exercícios",
    date: "28 Nov 2024",
    readTime: "7 min",
  },
  {
    title: "Suplementação: Quando é Realmente Necessária?",
    excerpt: "Saiba quando a suplementação é recomendada e como escolher os suplementos adequados para suas necessidades.",
    category: "Nutrição",
    date: "25 Nov 2024",
    readTime: "6 min",
  },
  {
    title: "Gerenciando o Estresse no Mundo Moderno",
    excerpt: "Técnicas e estratégias eficazes para lidar com o estresse do dia a dia e melhorar sua qualidade de vida.",
    category: "Saúde Mental",
    date: "22 Nov 2024",
    readTime: "8 min",
  },
  {
    title: "Hidratação: A Base da Saúde que Muitos Ignoram",
    excerpt: "Por que beber água é tão importante e como garantir uma hidratação adequada todos os dias.",
    category: "Bem-estar",
    date: "19 Nov 2024",
    readTime: "4 min",
  },
  {
    title: "Como Criar uma Rotina de Exercícios Sustentável",
    excerpt: "Dicas práticas para estabelecer e manter uma rotina de exercícios que se encaixe no seu estilo de vida.",
    category: "Exercícios",
    date: "16 Nov 2024",
    readTime: "6 min",
  },
  {
    title: "Sono e Recuperação: O Pilar Esquecido da Saúde",
    excerpt: "Descubra como a qualidade do sono afeta todos os aspectos da sua saúde e como melhorá-la.",
    category: "Bem-estar",
    date: "13 Nov 2024",
    readTime: "7 min",
  },
  {
    title: "Mindfulness: Práticas Simples para o Dia a Dia",
    excerpt: "Aprenda técnicas de atenção plena que podem ser incorporadas facilmente na sua rotina.",
    category: "Saúde Mental",
    date: "10 Nov 2024",
    readTime: "5 min",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Nutrição": "from-emerald-500 to-teal-500",
    "Exercícios": "from-blue-500 to-indigo-500",
    "Saúde Mental": "from-purple-500 to-pink-500",
    "Bem-estar": "from-amber-500 to-orange-500",
  };
  return colors[category] || "from-primary to-accent";
};

const Blog = () => {
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
                Conteúdo Exclusivo
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Blog{" "}
                <span className="text-gradient">Pro Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conteúdos exclusivos sobre saúde, bem-estar e qualidade de vida criados por nossos
                especialistas para ajudar você a viver melhor.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.name}
                  variant={cat.active ? "default" : "outline"}
                  size="sm"
                  className="gap-2"
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 md:p-12 border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 hover-lift cursor-pointer group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(featuredPost.category)} text-white`}>
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        Destaque
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div className="w-48 h-48 rounded-3xl gradient-primary flex items-center justify-center">
                      <Apple className="w-24 h-24 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Últimos Artigos
              </h2>
              <p className="text-muted-foreground">
                Explore nossos conteúdos mais recentes sobre saúde e bem-estar.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {blogPosts.map((post) => (
                <motion.div key={post.title} variants={cardVariants}>
                  <Card className="p-6 h-full flex flex-col border-border/50 bg-card hover-lift group cursor-pointer">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <Button size="lg" variant="outline" className="group">
                Carregar Mais Artigos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <Card className="p-8 md:p-12 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Receba Conteúdos Exclusivos
                </h2>
                <p className="text-muted-foreground mb-6">
                  Cadastre-se para receber dicas, artigos e novidades sobre saúde e bem-estar diretamente no seu e-mail.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-grow px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="lg">
                    Inscrever-se
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

export default Blog;
