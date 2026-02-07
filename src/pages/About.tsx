import { motion } from "framer-motion";
import { MapPin, Users, Smartphone, Monitor, Target, Heart } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Sobre o Projeto
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Encontre Aqui
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma digital inovadora voltada para a descoberta e consumo de restaurantes, serviços e experiências locais na Praia do Forte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Target, title: "Nossa Missão", desc: "Facilitar o acesso dos usuários às melhores opções de restaurantes, serviços turísticos e experiências disponíveis na região, conectando visitantes e moradores a tudo que a Praia do Forte tem de melhor." },
            { icon: Heart, title: "Nossa Visão", desc: "Ser a principal plataforma de descoberta de experiências locais no litoral norte da Bahia, expandindo para outras regiões turísticas do Brasil." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">Nossas Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: "Plataforma Mobile", desc: "Explore restaurantes, faça pedidos e pague diretamente pelo celular. Cardápios completos, distância até o local e entrega na palma da mão." },
              { icon: Monitor, title: "Totens Interativos", desc: "Totens físicos espalhados pela região permitem que turistas e moradores façam pedidos presencialmente, sem filas e sem complicação." },
              { icon: MapPin, title: "Experiências Locais", desc: "Descubra passeios de buggy, mergulho, pesca esportiva, e muito mais. Tudo organizado e fácil de reservar." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-tropical-warm rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-sunset rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-sunset rounded-3xl p-12 text-center text-primary-foreground"
        >
          <h2 className="font-display text-3xl font-bold mb-3">Praia do Forte</h2>
          <p className="opacity-90 max-w-lg mx-auto">
            Nosso projeto piloto nasce na Praia do Forte, um dos destinos mais encantadores do litoral norte da Bahia. O local perfeito para validar nossa proposta e encantar visitantes.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
