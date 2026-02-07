import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Tent, PlusCircle, Package, LayoutDashboard, TrendingUp, Store } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PartnerDashboard = () => {
  // Estado para controlar se o usuário já tem empresa cadastrada ou não
  const [hasCompany, setHasCompany] = useState(false);
  const [selectedType, setSelectedType] = useState<"restaurant" | "experience" | null>(null);

  // Função para simular o cadastro da empresa
  const handleRegisterCompany = (e: React.FormEvent) => {
    e.preventDefault();
    setHasCompany(true);
    toast.success("Empresa cadastrada com sucesso!", {
      description: "Bem-vindo ao painel do parceiro Encontre Aqui."
    });
  };

  // Se o usuário ainda não tem empresa, mostra a tela de escolha
  if (!hasCompany) {
    return (
      <Layout hideFooter>
        <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo, Parceiro!</h1>
              <p className="text-xl text-gray-600">
                Para começar, vamos configurar o seu perfil. Qual é o seu tipo de negócio?
              </p>
            </div>

            {/* Seleção do Tipo */}
            {!selectedType ? (
              <div className="grid md:grid-cols-2 gap-8">
                <div 
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-[#F76300] group text-center"
                  onClick={() => setSelectedType("restaurant")}
                >
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F76300] transition-colors">
                    <Utensils className="w-10 h-10 text-[#F76300] group-hover:text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Restaurante / Lanchonete</h2>
                  <p className="text-gray-500">
                    Quero vender pratos, bebidas e lanches. Gerenciar cardápio e receber pedidos para retirada.
                  </p>
                </div>

                <div 
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-[#F76300] group text-center"
                  onClick={() => setSelectedType("experience")}
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                    <Tent className="w-10 h-10 text-blue-600 group-hover:text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Turismo / Experiências</h2>
                  <p className="text-gray-500">
                    Quero oferecer passeios, aluguel de equipamentos ou aventuras locais. Gerenciar agendamentos.
                  </p>
                </div>
              </div>
            ) : (
              /* Formulário de Cadastro Inicial */
              <Card className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-5">
                <CardHeader>
                  <CardTitle>Dados da sua {selectedType === 'restaurant' ? 'Loja' : 'Agência'}</CardTitle>
                  <CardDescription>Preencha as informações básicas para aparecer no app.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegisterCompany} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome do Estabelecimento</Label>
                      <Input id="name" placeholder="Ex: Restaurante da Praia" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Categoria Principal</Label>
                      <Input id="category" placeholder={selectedType === 'restaurant' ? "Ex: Italiana, Lanches..." : "Ex: Passeio de Barco, Mergulho..."} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Descrição Curta</Label>
                      <Input id="description" placeholder="Uma breve descrição que atraia clientes..." />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button type="button" variant="outline" onClick={() => setSelectedType(null)} className="flex-1">
                        Voltar
                      </Button>
                      <Button type="submit" className="flex-1 bg-[#F76300] hover:bg-orange-600 text-white font-bold">
                        Criar Conta
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  // DASHBOARD PRINCIPAL (Pós cadastro)
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 font-sans pb-20">
        {/* Header do Dashboard */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#F76300] p-2 rounded-lg text-white">
                <Store size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Minha Empresa</h1>
                <p className="text-sm text-gray-500">Painel de Controle</p>
              </div>
            </div>
            <Button className="bg-[#F76300] hover:bg-orange-600 text-white font-bold gap-2">
              <PlusCircle size={18} /> Novo Produto
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-gray-100">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#F76300] data-[state=active]:text-white rounded-lg px-6">Visão Geral</TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-[#F76300] data-[state=active]:text-white rounded-lg px-6">Meus Produtos</TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-[#F76300] data-[state=active]:text-white rounded-lg px-6">Configurações</TabsTrigger>
            </TabsList>

            {/* ABA: Visão Geral */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Vendas Totais</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">R$ 0,00</div>
                    <p className="text-xs text-muted-foreground">+0% em relação ao mês passado</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pedidos Ativos</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0</div>
                    <p className="text-xs text-muted-foreground">Aguardando confirmação</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Visualizações</CardTitle>
                    <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">Visitas no perfil hoje</p>
                  </CardContent>
                </Card>
              </div>

              {/* Área de Gráfico Placeholder */}
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Desempenho Recente</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <p className="text-gray-400">Gráfico de vendas aparecerá aqui quando houver dados.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ABA: Produtos */}
            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Gerenciar Catálogo</CardTitle>
                  <CardDescription>
                    Adicione, edite ou remova itens do seu cardápio ou lista de passeios.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="text-gray-400 w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Nenhum produto cadastrado</h3>
                    <p className="text-gray-500 mb-6">Comece adicionando o primeiro item para venda.</p>
                    <Button className="bg-[#F76300] hover:bg-orange-600 text-white font-bold">
                      Adicionar Item
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* ABA: Configurações */}
             <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da Conta</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-gray-500">Configurações de pagamento, horário de funcionamento e endereço.</p>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default PartnerDashboard;