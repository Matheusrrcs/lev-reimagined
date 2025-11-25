import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 Dicas para uma Alimentação Saudável no Dia a Dia",
    excerpt:
      "Descubra como pequenas mudanças na sua alimentação podem fazer uma grande diferença na sua saúde e bem-estar.",
    category: "Nutrição",
    date: "15 Jan 2025",
    readTime: "5 min",
  },
  {
    title: "A Importância da Atividade Física para a Saúde Mental",
    excerpt:
      "Entenda a conexão entre exercícios físicos e saúde mental, e como começar uma rotina de atividades.",
    category: "Bem-estar",
    date: "12 Jan 2025",
    readTime: "7 min",
  },
  {
    title: "Suplementação: Quando é Necessária?",
    excerpt:
      "Saiba quando a suplementação é recomendada e como escolher os suplementos adequados para suas necessidades.",
    category: "Nutrologia",
    date: "08 Jan 2025",
    readTime: "6 min",
  },
  {
    title: "Gerenciando o Estresse no Mundo Moderno",
    excerpt:
      "Técnicas e estratégias eficazes para lidar com o estresse do dia a dia e melhorar sua qualidade de vida.",
    category: "Psicologia",
    date: "05 Jan 2025",
    readTime: "8 min",
  },
  {
    title: "Hidratação: A Base da Saúde",
    excerpt:
      "Por que beber água é tão importante e como garantir uma hidratação adequada todos os dias.",
    category: "Saúde",
    date: "01 Jan 2025",
    readTime: "4 min",
  },
  {
    title: "Como Criar uma Rotina de Exercícios Sustentável",
    excerpt:
      "Dicas práticas para estabelecer e manter uma rotina de exercícios que se encaixe no seu estilo de vida.",
    category: "Educação Física",
    date: "28 Dez 2024",
    readTime: "6 min",
  },
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Blog{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pro Insights
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conteúdos exclusivos sobre saúde, bem-estar e qualidade de vida criados por nossos
                especialistas.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full flex flex-col shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-smooth" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <Button size="lg" variant="outline">
                Carregar Mais Artigos
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
