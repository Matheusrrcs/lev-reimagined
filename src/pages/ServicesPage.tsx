import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";

const ServicesPage = () => {
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
                Nossos{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Serviços
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Oferecemos uma ampla gama de especialidades para cuidar da sua saúde de forma
                completa e integrada. Todos os atendimentos são realizados online, com a mesma
                qualidade de um atendimento presencial.
              </p>
            </motion.div>
          </div>
        </section>

        <Services />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
