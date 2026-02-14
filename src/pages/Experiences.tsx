import { useState } from "react";
import Layout from "@/components/Layout";
import { experiences, hotels, events } from "@/data/mockData";
import ExperienceCard from "@/components/ExperienceCard";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Star, Bed, TentTree, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Experiences = () => {
  const [activeTab, setActiveTab] = useState<"experiences" | "hotels" | "events">("experiences");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pb-24">
        <h1 className="text-3xl font-bold mb-6 text-primary">Descubra o Melhor</h1>
        
        {/* Botões de Navegação Personalizados */}
        <div className="grid grid-cols-3 gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm border">
          <button
            onClick={() => setActiveTab("experiences")}
            className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 ${
              activeTab === "experiences" 
                ? "bg-primary text-white shadow-md transform scale-105" 
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <TentTree size={24} className="mb-1" />
            <span className="text-xs font-semibold">Experiências</span>
          </button>

          <button
            onClick={() => setActiveTab("hotels")}
            className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 ${
              activeTab === "hotels" 
                ? "bg-primary text-white shadow-md transform scale-105" 
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <Bed size={24} className="mb-1" />
            <span className="text-xs font-semibold">Hotéis</span>
          </button>

          <button
            onClick={() => setActiveTab("events")}
            className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 ${
              activeTab === "events" 
                ? "bg-primary text-white shadow-md transform scale-105" 
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <Ticket size={24} className="mb-1" />
            <span className="text-xs font-semibold">Eventos</span>
          </button>
        </div>

        {/* Conteúdo Dinâmico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          
          {/* LISTA DE EXPERIÊNCIAS - CORREÇÃO AQUI */}
          {activeTab === "experiences" && experiences.map((exp) => (
            // AQUI ESTAVA O ERRO: Usar {...exp} espalha as props e não passa 'experience'
            // CORREÇÃO: Passar explicitamente o objeto na prop 'experience'
            <ExperienceCard key={exp.id} experience={exp} />
          ))}

          {/* LISTA DE HOTÉIS */}
          {activeTab === "hotels" && hotels.map((hotel) => (
            <Link to={`/hotels/${hotel.id}`} key={hotel.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative h-48">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-bold shadow flex items-center gap-1">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" /> {hotel.rating}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-xs text-primary font-semibold mb-1 uppercase">{hotel.category}</div>
                  <h3 className="font-bold text-lg mb-2">{hotel.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin size={14} className="mr-1" /> {hotel.location}
                  </div>
                  <div className="font-bold text-gray-900">{hotel.price}</div>
                </CardContent>
              </Card>
            </Link>
          ))}

          {/* LISTA DE EVENTOS */}
          {activeTab === "events" && events.map((evt) => (
            <Link to={`/events/${evt.id}`} key={evt.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48">
                  <img src={evt.image} alt={evt.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-primary text-white px-3 py-1 rounded-md text-xs font-bold shadow">
                    {evt.date.split(" - ")[0]}
                  </div>
                </div>
                <CardContent className="p-4 flex-grow">
                  <h3 className="font-bold text-lg mb-2">{evt.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-1">
                    <MapPin size={14} className="mr-1" /> {evt.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-1" /> {evt.date.split(" - ")[1]}
                  </div>
                  <Button className="w-full mt-auto" variant="outline">Ver Detalhes</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experiences;