import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, MapPin, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [payMethod, setPayMethod] = useState<"card" | "pix">("card");

  const handleOrder = () => {
    toast({ title: "Pedido confirmado! 🎉", description: "Você pode acompanhar seu pedido na página de acompanhamento." });
    clearCart();
    navigate("/acompanhamento");
  };

  if (items.length === 0) {
    navigate("/carrinho");
    return null;
  }

  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-4xl font-bold text-foreground">Finalizar Pedido</h1>
        </motion.div>

        <div className="space-y-6">
          {/* Address */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Endereço de Entrega
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Nome completo" className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Telefone" className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Endereço" className="sm:col-span-2 px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Complemento" className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Referência" className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </motion.div>

          {/* Payment */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" /> Forma de Pagamento
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPayMethod("card")}
                className={`p-4 rounded-xl border-2 text-sm font-medium transition-all ${
                  payMethod === "card" ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground"
                }`}
              >
                💳 Cartão de Crédito
              </button>
              <button
                onClick={() => setPayMethod("pix")}
                className={`p-4 rounded-xl border-2 text-sm font-medium transition-all ${
                  payMethod === "pix" ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground"
                }`}
              >
                📱 PIX
              </button>
            </div>
            {payMethod === "card" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <input placeholder="Número do cartão" className="sm:col-span-2 px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input placeholder="Validade" className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input placeholder="CVV" className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            )}
          </motion.div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Resumo</h3>
            <div className="space-y-2 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.quantity}x {item.name}</span>
                  <span className="text-foreground font-medium">R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-bold text-foreground">Total</span>
              <span className="font-bold text-primary text-xl">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
            </div>
          </motion.div>

          <button
            onClick={handleOrder}
            className="w-full bg-gradient-sunset text-primary-foreground font-bold py-4 rounded-xl shadow-primary-glow hover:scale-[1.02] active:scale-[0.98] transition-transform text-lg flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" /> Confirmar Pedido
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
