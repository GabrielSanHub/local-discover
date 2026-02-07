import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, MapPin, Settings, ShoppingCart, Star, LogOut, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

const Profile = () => {
  const mockUser = {
    name: "Maria Silva",
    email: "maria@email.com",
    phone: "(71) 99999-0000",
    address: "Av. do Farol, 100 - Praia do Forte, BA",
  };

  const recentOrders = [
    { id: "1234", restaurant: "Restaurante do Mar", total: 135.80, status: "Entregue", date: "05/02/2026" },
    { id: "1235", restaurant: "Açaí da Vila", total: 49.80, status: "Entregue", date: "03/02/2026" },
    { id: "1236", restaurant: "Pizzaria Bella Praia", total: 112.80, status: "Em preparo", date: "07/02/2026" },
  ];

  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-4xl font-bold text-foreground">Meu Perfil</h1>
        </motion.div>

        {/* Profile Card */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl p-6 shadow-card mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">{mockUser.name}</h2>
              <p className="text-sm text-muted-foreground">{mockUser.email}</p>
              <p className="text-sm text-muted-foreground">{mockUser.phone}</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            {mockUser.address}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { icon: ShoppingCart, label: "Carrinho", to: "/carrinho" },
            { icon: Star, label: "Favoritos", to: "#" },
            { icon: Settings, label: "Configurações", to: "#" },
            { icon: LogOut, label: "Sair", to: "/login" },
          ].map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="bg-card rounded-xl p-4 shadow-card text-center hover:shadow-card-hover transition-shadow"
            >
              <action.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">{action.label}</span>
            </Link>
          ))}
        </div>

        {/* Recent Orders */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h3 className="font-display text-xl font-bold text-foreground mb-4">Pedidos Recentes</h3>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <Link
                key={order.id}
                to="/acompanhamento"
                className="bg-card rounded-xl p-4 shadow-card flex items-center justify-between hover:shadow-card-hover transition-shadow group"
              >
                <div>
                  <p className="font-semibold text-foreground">{order.restaurant}</p>
                  <p className="text-sm text-muted-foreground">Pedido #{order.id} · {order.date}</p>
                </div>
                <div className="text-right flex items-center gap-3">
                  <div>
                    <p className="font-bold text-primary">R$ {order.total.toFixed(2).replace(".", ",")}</p>
                    <span className={`text-xs font-medium ${order.status === "Entregue" ? "text-secondary" : "text-accent"}`}>
                      {order.status}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Profile;
