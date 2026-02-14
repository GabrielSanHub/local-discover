import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { shops } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, Phone, Star, Share2, Navigation } from "lucide-react";

const ShopDetail = () => {
  const { id } = useParams();
  const shop = shops.find((s) => s.id === Number(id));

  if (!shop) return <div>Loja não encontrada</div>;

  return (
    <Layout>
      <div className="relative h-[35vh]">
        <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Link to="/shops" className="absolute top-4 left-4 z-10">
          <Button variant="secondary" size="icon" className="rounded-full bg-white/20 hover:bg-white/40 text-white border-none backdrop-blur-md">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20 pb-24">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-primary text-sm font-bold uppercase tracking-wider">{shop.category}</span>
                <h1 className="text-3xl font-bold mt-1 mb-2">{shop.name}</h1>
              </div>
              <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="font-bold text-yellow-700">{shop.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{shop.description}</p>

            <div className="space-y-4 bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-3 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Horário de Funcionamento</div>
                  <div className="text-sm text-gray-600">{shop.hours}</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-3 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Localização</div>
                  <div className="text-sm text-gray-600">{shop.location}</div>
                </div>
              </div>

              {shop.phone && (
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-3 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Contato</div>
                    <div className="text-sm text-gray-600">{shop.phone}</div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-40 shadow-lg">
        <div className="container mx-auto flex gap-3">
          <Button variant="outline" size="icon" className="shrink-0 border-gray-300">
            <Share2 className="h-5 w-5 text-gray-600" />
          </Button>
          <Button className="w-full text-lg font-bold bg-primary hover:bg-primary/90 flex items-center gap-2">
            <Navigation className="h-5 w-5" />
            Como Chegar
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ShopDetail;