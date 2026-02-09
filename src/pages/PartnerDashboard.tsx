import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Importando Textarea se disponível, ou usar Input
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Utensils, 
  Tent, 
  PlusCircle, 
  Package, 
  LayoutDashboard, 
  TrendingUp, 
  Store, 
  ShoppingBag, 
  Pencil, 
  Trash2, 
  X 
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Interfaces para tipagem
interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
}

interface Order {
  id: string;
  customer: string;
  items: string;
  total: string;
  status: "Pendente" | "Preparando" | "Pronto" | "Entregue";
  time: string;
}

const PartnerDashboard = () => {
  const [hasCompany, setHasCompany] = useState(false);
  const [selectedType, setSelectedType] = useState<"restaurant" | "experience" | null>(null);
  
  // Estado dos Produtos
  const [products, setProducts] = useState<Product[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({ name: "", price: "", category: "", description: "" });

  // Mock de Pedidos para a notificação
  const [orders, setOrders] = useState<Order[]>([
    { id: "#1234", customer: "João Silva", items: "1x Peixe Frito, 2x Coca-cola", total: "R$ 85,00", status: "Pendente", time: "10:30" },
    { id: "#1235", customer: "Maria Souza", items: "2x Moqueca de Camarão", total: "R$ 150,00", status: "Preparando", time: "10:45" },
    { id: "#1236", customer: "Carlos Pereia", items: "1x Passeio de Buggy", total: "R$ 300,00", status: "Pendente", time: "11:00" },
  ]);

  const newOrdersCount = orders.filter(o => o.status === "Pendente").length;

  // --- Funções de Empresa ---
  const handleRegisterCompany = (e: React.FormEvent) => {
    e.preventDefault();
    setHasCompany(true);
    toast.success("Empresa cadastrada com sucesso!");
  };

  // --- Funções de Produto ---
  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({ 
        name: product.name, 
        price: product.price, 
        category: product.category, 
        description: product.description 
      });
    } else {
      setEditingProduct(null);
      setFormData({ name: "", price: "", category: "", description: "" });
    }
    setIsDialogOpen(true);
  };

  const handleSaveProduct = () => {
    if (!formData.name || !formData.price) {
      toast.error("Preencha os campos obrigatórios");
      return;
    }

    if (editingProduct) {
      // Editar
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? { ...p, ...formData } : p));
      toast.success("Produto atualizado!");
    } else {
      // Criar
      const newProduct: Product = {
        id: Date.now(),
        ...formData
      };
      setProducts(prev => [...prev, newProduct]);
      toast.success("Produto adicionado!");
    }
    setIsDialogOpen(false);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    toast.success("Produto removido.");
  };

  // Se o usuário ainda não tem empresa, mostra a tela de escolha (Mantida igual)
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

  // DASHBOARD PRINCIPAL
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 font-sans pb-20">
        
        {/* MODAL DE PRODUTO */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingProduct ? "Editar Item" : "Novo Item"}</DialogTitle>
              <DialogDescription>
                Adicione os detalhes do seu produto ou serviço abaixo.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="prod-name">Nome</Label>
                <Input 
                  id="prod-name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ex: Moqueca Completa" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="prod-price">Preço (R$)</Label>
                  <Input 
                    id="prod-price" 
                    value={formData.price} 
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="0,00" 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="prod-cat">Categoria</Label>
                  <Input 
                    id="prod-cat" 
                    value={formData.category} 
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    placeholder="Ex: Pratos Principais" 
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="prod-desc">Descrição</Label>
                <Textarea 
                  id="prod-desc" 
                  value={formData.description} 
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Ingredientes, detalhes do passeio, etc." 
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
              <Button onClick={handleSaveProduct} className="bg-[#F76300] hover:bg-orange-600 text-white">
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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
            <Button 
              className="bg-[#F76300] hover:bg-orange-600 text-white font-bold gap-2"
              onClick={() => handleOpenDialog()}
            >
              <PlusCircle size={18} /> Novo Produto
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-gray-100 flex flex-wrap h-auto">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#F76300] data-[state=active]:text-white rounded-lg px-6 flex-1">Visão Geral</TabsTrigger>
              
              {/* ABA MEUS PEDIDOS COM NOTIFICAÇÃO */}
              <TabsTrigger value="orders" className="data-[state=active]:bg-[#F76300] data-[state=active]:text-white rounded-lg px-6 flex-1 relative">
                Meus Pedidos
                {newOrdersCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#F76300] border-2 border-white text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-sm animate-pulse">
                    {newOrdersCount}
                  </span>
                )}
                {/* Bolinha branca dentro da aba ativa - lógica visual */}
                {newOrdersCount > 0 && (
                   <span className="ml-2 bg-white text-[#F76300] text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm hidden data-[state=active]:inline-block">
                     {newOrdersCount}
                   </span>
                )}
              </TabsTrigger>

              <TabsTrigger value="products" className="data-[state=active]:bg-[#F76300] data-[state=active]:text-white rounded-lg px-6 flex-1">Meus Produtos</TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-[#F76300] data-[state=active]:text-white rounded-lg px-6 flex-1">Configurações</TabsTrigger>
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
                    <div className="text-2xl font-bold">R$ 535,00</div>
                    <p className="text-xs text-muted-foreground">+12% em relação a ontem</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pedidos Ativos</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{newOrdersCount}</div>
                    <p className="text-xs text-muted-foreground">Aguardando ação</p>
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
            </TabsContent>

            {/* ABA: MEUS PEDIDOS (NOVA) */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Pedidos Recentes</CardTitle>
                  <CardDescription>Gerencie os pedidos recebidos em tempo real.</CardDescription>
                </CardHeader>
                <CardContent>
                  {orders.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">Nenhum pedido no momento.</div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="mb-2 md:mb-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-gray-800">{order.id}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                                order.status === "Pendente" ? "bg-red-100 text-red-600" :
                                order.status === "Preparando" ? "bg-yellow-100 text-yellow-600" :
                                "bg-green-100 text-green-600"
                              }`}>
                                {order.status}
                              </span>
                              <span className="text-xs text-gray-400">• {order.time}</span>
                            </div>
                            <h4 className="font-semibold text-gray-700">{order.customer}</h4>
                            <p className="text-sm text-gray-500">{order.items}</p>
                          </div>
                          
                          <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
                            <span className="font-bold text-lg text-gray-800">{order.total}</span>
                            {order.status === "Pendente" && (
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">Recusar</Button>
                                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Aceitar</Button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* ABA: Produtos (ATUALIZADA) */}
            <TabsContent value="products">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Gerenciar Catálogo</CardTitle>
                    <CardDescription>
                      Adicione, edite ou remova itens do seu cardápio ou lista de passeios.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  {products.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Package className="text-gray-400 w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">Nenhum produto cadastrado</h3>
                      <p className="text-gray-500 mb-6">Comece adicionando o primeiro item para venda.</p>
                      <Button 
                        className="bg-[#F76300] hover:bg-orange-600 text-white font-bold"
                        onClick={() => handleOpenDialog()}
                      >
                        Adicionar Item
                      </Button>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {products.map((product) => (
                        <div key={product.id} className="flex justify-between items-center p-4 border rounded-xl bg-white shadow-sm">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                              <Utensils className="text-gray-400" size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800">{product.name}</h4>
                              <p className="text-sm text-gray-500">{product.category} • {product.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-bold text-[#F76300]">R$ {product.price}</span>
                            <div className="flex gap-2">
                              <Button 
                                size="icon" 
                                variant="ghost" 
                                className="h-8 w-8 text-blue-600 hover:bg-blue-50"
                                onClick={() => handleOpenDialog(product)}
                              >
                                <Pencil size={16} />
                              </Button>
                              <Button 
                                size="icon" 
                                variant="ghost" 
                                className="h-8 w-8 text-red-600 hover:bg-red-50"
                                onClick={() => handleDeleteProduct(product.id)}
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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