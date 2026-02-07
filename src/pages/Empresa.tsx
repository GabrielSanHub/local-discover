import Layout from "@/components/Layout"; // Adicionado
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Smartphone, Store } from "lucide-react";
import totemEmpresa from "../assets/Totem_Empresa.jpeg";
import totemPessoa from "../assets/Totem_Pessoa.jpeg";

const Empresa = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Leve a inovação para o seu estabelecimento</h1>
            <p className="text-xl opacity-90 mb-8">
              Transforme a experiência dos seus clientes e turistas com o Totem Encontre Aqui. 
              Agilidade no pedido, pagamento simplificado e retirada no balcão.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8">
              Quero ser parceiro
            </Button>
          </div>
        </section>

        {/* Conceito do Projeto */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é o Encontre Aqui?</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                O Encontre Aqui é uma plataforma completa de descoberta local que conecta turistas e moradores 
                aos melhores estabelecimentos da região. Não somos apenas um app de delivery; somos um guia interativo.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Através do nosso site e dos nossos Totens físicos espalhados pela cidade, 
                o cliente visualiza seu cardápio, faz o pedido e realiza o pagamento de forma autônoma.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" />
                  <span className="text-gray-700">Visibilidade para turistas e locais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" />
                  <span className="text-gray-700">Cardápio digital interativo e sempre atualizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" />
                  <span className="text-gray-700">Redução de filas e otimização do atendimento</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* O Totem - Visualização Dupla */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">A Experiência do Totem</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Visão do Estabelecimento */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-64 overflow-hidden relative">
                   <img src={totemEmpresa} alt="Totem no estabelecimento" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                      <h3 className="text-white text-2xl font-bold">Para o seu Negócio</h3>
                   </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    Um equipamento moderno que se integra ao ambiente. O Totem funciona como um vendedor extra, 
                    disponível 24h, reduzindo a necessidade de garçons apenas para tirar pedidos e evitando erros de comunicação.
                  </p>
                </CardContent>
              </Card>

              {/* Visão do Cliente */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-64 overflow-hidden relative">
                   <img src={totemPessoa} alt="Cliente usando o totem" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                      <h3 className="text-white text-2xl font-bold">Para o Cliente</h3>
                   </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    Navegação intuitiva por toque. O cliente explora as opções, personaliza o pedido e paga 
                    diretamente na máquina via cartão ou Pix. Simples, rápido e sem contato humano desnecessário.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Modelo de Retirada (Diferencial) */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Store className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Como funciona a entrega?</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">Modelo "Pegue no Balcão"</h3>
              <p className="text-gray-700 text-lg">
                Diferente dos apps tradicionais, <strong>não realizamos entregas na porta do cliente</strong> via motoboy parceiro.
              </p>
              <div className="my-6 border-t border-gray-100"></div>
              <p className="text-gray-600">
                O cliente recebe uma notificação (via SMS ou App) assim que o pedido está pronto. 
                Ele então se dirige ao balcão de retirada do seu estabelecimento para buscar o produto. 
                Isso garante que a comida chegue quente, elimina taxas de entrega abusivas e traz o fluxo de pessoas para dentro da sua loja.
              </p>
            </div>
          </div>
        </section>

        {/* Como Adquirir */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Como adquirir seu Totem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold text-lg mb-2">Cadastro Inicial</h3>
              <p className="text-gray-500">Preencha o formulário de interesse com os dados da sua empresa.</p>
            </div>
            <div className="text-center p-6">
               <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold text-lg mb-2">Análise e Instalação</h3>
              <p className="text-gray-500">Nossa equipe avalia o local, configura o menu digital e instala o Totem (taxa de adesão sob consulta).</p>
            </div>
            <div className="text-center p-6">
               <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold text-lg mb-2">Comece a Vender</h3>
              <p className="text-gray-500">Treinamento rápido e seu negócio já está pronto para receber pedidos digitais.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Empresa;