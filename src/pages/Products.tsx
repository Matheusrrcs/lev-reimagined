import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, Leaf, Pill, Heart, Sparkles } from "lucide-react";
import productsImage from "@/assets/products-hero.jpg";

const productCategories = [
  {
    icon: Leaf,
    title: "Suplementos Naturais",
    description: "Vitaminas e minerais essenciais para seu bem-estar diário.",
    items: ["Multivitamínicos", "Ômega 3", "Vitamina D", "Probióticos"],
  },
  {
    icon: Pill,
    title: "Suplementação Esportiva",
    description: "Produtos para potencializar seus resultados nos treinos.",
    items: ["Whey Protein", "BCAA", "Creatina", "Pré-treino"],
  },
  {
    icon: Heart,
    title: "Saúde Cardiovascular",
    description: "Cuidados específicos para o coração e sistema circulatório.",
    items: ["Coenzima Q10", "Magnésio", "Óleo de Peixe", "Alho em cápsula"],
  },
  {
    icon: Sparkles,
    title: "Bem-estar e Beleza",
    description: "Produtos para cabelo, pele e saúde estética.",
    items: ["Colágeno", "Biotina", "Antioxidantes", "Ácido Hialurônico"],
  },
];

const Products = () => {
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
                  Produtos de{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Qualidade
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Descubra nossa linha completa de suplementos e produtos para saúde, cuidadosamente
                  selecionados por nossos especialistas para complementar seu tratamento.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Todos os produtos são de marcas confiáveis e recomendados de acordo com suas
                  necessidades individuais durante a consulta com nossos profissionais.
                </p>
                <Button size="lg" asChild>
                  <a href="https://wa.me/557197218432" target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Consultar Disponibilidade
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-card-hover">
                  <img
                    src={productsImage}
                    alt="Produtos de saúde e bem-estar da Clínica Levin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Categories */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Nossas Categorias
              </h2>
              <p className="text-lg text-muted-foreground">
                Produtos selecionados para cada necessidade de saúde e bem-estar.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full shadow-card hover:shadow-card-hover transition-smooth">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <category.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://wa.me/557197218432"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Consultar Produtos
                      </a>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-display font-bold text-foreground mb-12 text-center">
                Por que escolher nossos produtos?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">✓</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    Recomendação Profissional
                  </h3>
                  <p className="text-muted-foreground">
                    Produtos indicados por nossos especialistas durante consulta
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">✓</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    Qualidade Garantida
                  </h3>
                  <p className="text-muted-foreground">
                    Marcas confiáveis e produtos certificados
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">✓</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    Acompanhamento Contínuo
                  </h3>
                  <p className="text-muted-foreground">
                    Suporte durante todo o uso dos produtos
                  </p>
                </div>
              </div>
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
