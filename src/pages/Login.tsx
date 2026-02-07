import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, MapPin, Eye, EyeOff } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: isLogin ? "Login realizado!" : "Conta criada!", description: "Bem-vindo ao Encontre Aqui!" });
    navigate("/perfil");
  };

  return (
    <Layout>
      <div className="container py-16 flex items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-sunset flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              {isLogin ? "Entrar" : "Criar Conta"}
            </h1>
            <p className="text-muted-foreground mt-1">
              {isLogin ? "Acesse sua conta Encontre Aqui" : "Junte-se à comunidade"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Nome completo"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="E-mail"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                required
                className="w-full pl-12 pr-12 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-sunset text-primary-foreground font-semibold py-3.5 rounded-xl shadow-primary-glow hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              {isLogin ? "Entrar" : "Criar Conta"}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary font-medium hover:underline"
              >
                {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Entrar"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Login;
