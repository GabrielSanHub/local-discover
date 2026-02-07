import { motion } from "framer-motion";
import { Check, Clock, ChefHat, Truck, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const steps = [
  { icon: Check, label: "Pedido Confirmado", time: "14:30", done: true },
  { icon: ChefHat, label: "Em Preparo", time: "14:35", done: true },
  { icon: Truck, label: "Saiu para Entrega", time: "14:55", done: false },
  { icon: MapPin, label: "Entregue", time: "", done: false },
];

const OrderTracking = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
            <Clock className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">Acompanhamento do Pedido</h1>
          <p className="text-muted-foreground mt-1">Pedido #1236 · Pizzaria Bella Praia</p>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl p-8 shadow-card mb-8">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.done ? "bg-gradient-ocean text-secondary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-0.5 h-12 ${step.done ? "bg-secondary" : "bg-border"}`} />
                  )}
                </div>
                <div className="pb-8">
                  <p className={`font-semibold ${step.done ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                  {step.time && <p className="text-sm text-muted-foreground">{step.time}</p>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Order Details */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-card rounded-2xl p-6 shadow-card">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Detalhes do Pedido</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">2x Pizza Margherita</span>
              <span className="text-foreground font-medium">R$ 105,80</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">1x Refrigerante</span>
              <span className="text-foreground font-medium">R$ 7,00</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-bold text-foreground">Total</span>
              <span className="font-bold text-primary text-lg">R$ 112,80</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Av. do Farol, 100 - Praia do Forte, BA
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default OrderTracking;
