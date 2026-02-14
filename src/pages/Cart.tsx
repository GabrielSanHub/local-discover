import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
            <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
              <ShoppingCart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Carrinho vazio</h2>
            <p className="text-muted-foreground">Adicione itens dos nossos restaurantes parceiros.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-sunset text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-primary-glow"
            >
              Voltar ao Início
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link to="/restaurantes" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-4">
            <ArrowLeft className="w-4 h-4" /> Continuar comprando
          </Link>
          <h1 className="font-display text-4xl font-bold text-foreground">Carrinho</h1>
          <p className="text-muted-foreground">{totalItems} {totalItems === 1 ? "item" : "itens"}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-4 shadow-card flex gap-4"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                  <p className="text-primary font-bold mt-1">R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <button onClick={() => removeItem(item.id)} className="p-1 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2 bg-muted rounded-lg">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:text-primary transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-bold text-foreground w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:text-primary transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="bg-card rounded-2xl p-6 shadow-card space-y-4 sticky top-24">
              <h3 className="font-display text-xl font-bold text-foreground">Resumo do Pedido</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxa de entrega</span>
                  <span className="font-medium text-secondary">Grátis</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-bold text-primary text-lg">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-sunset text-primary-foreground font-semibold py-4 rounded-xl shadow-primary-glow hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Finalizar Pedido <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
