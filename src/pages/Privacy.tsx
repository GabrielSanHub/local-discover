import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Privacy = () => {
  const sections = [
    { title: "1. Coleta de Informações", content: "Coletamos informações que você nos fornece diretamente, como nome, e-mail, endereço e telefone ao criar uma conta ou realizar um pedido. Também podemos coletar dados de localização para oferecer serviços baseados em proximidade." },
    { title: "2. Uso das Informações", content: "Utilizamos suas informações para processar pedidos, personalizar sua experiência, enviar comunicações relevantes, melhorar nossos serviços e garantir a segurança da plataforma." },
    { title: "3. Compartilhamento de Dados", content: "Compartilhamos suas informações apenas com restaurantes e prestadores de serviços parceiros necessários para a execução dos seus pedidos. Não vendemos seus dados pessoais a terceiros." },
    { title: "4. Segurança", content: "Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição." },
    { title: "5. Cookies", content: "Utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação, analisar o uso da plataforma e personalizar conteúdo e anúncios." },
    { title: "6. Seus Direitos", content: "Você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais. Para exercer esses direitos, entre em contato conosco pelo e-mail contato@encontreaqui.com." },
    { title: "7. Alterações", content: "Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através da plataforma." },
  ];

  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">Política de Privacidade</h1>
          <p className="text-muted-foreground">Última atualização: Fevereiro de 2026</p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 shadow-card"
            >
              <h2 className="font-display text-lg font-bold text-foreground mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
