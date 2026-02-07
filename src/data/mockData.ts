export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  cuisine: string;
  priceRange: string;
  distance: string;
  deliveryTime: string;
  address: string;
  phone: string;
  hours: string;
  categories: string[];
}

export interface FoodItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
  duration: string;
  category: string;
  distance: string;
  location: string;
  includes: string[];
}

export interface NearbyLocation {
  id: string;
  name: string;
  description: string;
  image: string;
  distance: string;
  category: string;
  rating: number;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Restaurante do Mar",
    description: "Frutos do mar frescos com vista para o oceano. Uma experiência gastronômica inesquecível na Praia do Forte.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600",
    rating: 4.8,
    reviewCount: 324,
    cuisine: "Frutos do Mar",
    priceRange: "$$",
    distance: "0.3 km",
    deliveryTime: "25-35 min",
    address: "Av. do Farol, 123 - Praia do Forte",
    phone: "(71) 3676-1234",
    hours: "11:00 - 23:00",
    categories: ["Frutos do Mar", "Brasileira"],
  },
  {
    id: "2",
    name: "Sabor Tropical",
    description: "Culinária baiana autêntica com ingredientes regionais selecionados. Sabores que encantam o paladar.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    rating: 4.6,
    reviewCount: 198,
    cuisine: "Baiana",
    priceRange: "$$$",
    distance: "0.8 km",
    deliveryTime: "30-40 min",
    address: "Rua da Corvina, 45 - Praia do Forte",
    phone: "(71) 3676-5678",
    hours: "12:00 - 22:00",
    categories: ["Baiana", "Regional"],
  },
  {
    id: "3",
    name: "Pizzaria Bella Praia",
    description: "Pizzas artesanais com massa feita na hora e ingredientes importados da Itália.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
    rating: 4.5,
    reviewCount: 267,
    cuisine: "Italiana",
    priceRange: "$$",
    distance: "1.2 km",
    deliveryTime: "35-45 min",
    address: "Alameda do Sol, 78 - Praia do Forte",
    phone: "(71) 3676-9012",
    hours: "18:00 - 00:00",
    categories: ["Italiana", "Pizzaria"],
  },
  {
    id: "4",
    name: "Açaí da Vila",
    description: "O melhor açaí da região com frutas frescas, granola artesanal e complementos especiais.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
    rating: 4.9,
    reviewCount: 456,
    cuisine: "Saudável",
    priceRange: "$",
    distance: "0.5 km",
    deliveryTime: "15-20 min",
    address: "Praça dos Coqueiros, 12 - Praia do Forte",
    phone: "(71) 3676-3456",
    hours: "08:00 - 20:00",
    categories: ["Saudável", "Açaí"],
  },
  {
    id: "5",
    name: "Churrascaria Fogo & Brasa",
    description: "Carnes nobres grelhadas na brasa com acompanhamentos tradicionais e buffet completo.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
    rating: 4.7,
    reviewCount: 189,
    cuisine: "Churrascaria",
    priceRange: "$$$",
    distance: "1.5 km",
    deliveryTime: "40-50 min",
    address: "Estrada do Coco, 200 - Praia do Forte",
    phone: "(71) 3676-7890",
    hours: "11:30 - 23:30",
    categories: ["Churrascaria", "Brasileira"],
  },
  {
    id: "6",
    name: "Café & Crepes Praia",
    description: "Café gourmet, crepes doces e salgados com vista para o mar em ambiente aconchegante.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
    rating: 4.4,
    reviewCount: 142,
    cuisine: "Cafeteria",
    priceRange: "$",
    distance: "0.2 km",
    deliveryTime: "10-15 min",
    address: "Rua do Farol, 56 - Praia do Forte",
    phone: "(71) 3676-2345",
    hours: "07:00 - 19:00",
    categories: ["Cafeteria", "Crepes"],
  },
];

export const foodItems: FoodItem[] = [
  // Restaurante do Mar
  { id: "f1", restaurantId: "1", name: "Moqueca de Camarão", description: "Moqueca tradicional com camarões frescos, leite de coco e dendê", price: 89.90, image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400", category: "Pratos Principais", popular: true },
  { id: "f2", restaurantId: "1", name: "Lagosta Grelhada", description: "Lagosta fresca grelhada com manteiga de ervas e limão", price: 159.90, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400", category: "Pratos Principais", popular: true },
  { id: "f3", restaurantId: "1", name: "Casquinha de Siri", description: "Casquinha crocante recheada com siri desfiado temperado", price: 32.90, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400", category: "Entradas" },
  { id: "f4", restaurantId: "1", name: "Ceviche de Peixe", description: "Peixe branco fresco marinado em limão com cebola roxa e coentro", price: 45.90, image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400", category: "Entradas" },
  { id: "f5", restaurantId: "1", name: "Caipirinha de Maracujá", description: "Caipirinha refrescante feita com maracujá fresco", price: 22.90, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400", category: "Bebidas" },
  // Sabor Tropical
  { id: "f6", restaurantId: "2", name: "Acarajé Tradicional", description: "Acarajé crocante com recheio de vatapá, caruru e camarão seco", price: 28.90, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400", category: "Pratos Típicos", popular: true },
  { id: "f7", restaurantId: "2", name: "Bobó de Camarão", description: "Creme de mandioca com camarões, leite de coco e temperos baianos", price: 78.90, image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400", category: "Pratos Principais", popular: true },
  { id: "f8", restaurantId: "2", name: "Vatapá", description: "Prato típico baiano com pão, gengibre, amendoim e leite de coco", price: 55.90, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400", category: "Pratos Típicos" },
  // Pizzaria
  { id: "f9", restaurantId: "3", name: "Pizza Margherita", description: "Molho de tomate San Marzano, mozzarella di bufala e manjericão fresco", price: 52.90, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", category: "Pizzas", popular: true },
  { id: "f10", restaurantId: "3", name: "Pizza Quatro Queijos", description: "Mozzarella, gorgonzola, parmesão e provolone", price: 59.90, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400", category: "Pizzas" },
  // Açaí
  { id: "f11", restaurantId: "4", name: "Açaí Tradicional 500ml", description: "Açaí puro batido com granola, banana e mel", price: 24.90, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400", category: "Açaí", popular: true },
  { id: "f12", restaurantId: "4", name: "Açaí Premium 700ml", description: "Açaí com morango, kiwi, granola premium e leite condensado", price: 34.90, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400", category: "Açaí" },
  // Churrascaria
  { id: "f13", restaurantId: "5", name: "Picanha na Brasa", description: "Picanha premium grelhada no ponto com farofa e vinagrete", price: 95.90, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400", category: "Carnes", popular: true },
  { id: "f14", restaurantId: "5", name: "Costela BBQ", description: "Costela suína defumada com molho barbecue artesanal", price: 79.90, image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400", category: "Carnes" },
  // Café
  { id: "f15", restaurantId: "6", name: "Crepe de Nutella", description: "Crepe fino recheado com Nutella, morango e chantilly", price: 28.90, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400", category: "Crepes", popular: true },
  { id: "f16", restaurantId: "6", name: "Cappuccino Especial", description: "Café espresso duplo com leite vaporizado e canela", price: 16.90, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400", category: "Bebidas" },
];

export const experiences: Experience[] = [
  {
    id: "e1",
    name: "Passeio de Buggy pela Costa",
    description: "Explore as praias paradisíacas da costa em um emocionante passeio de buggy com paradas para banho e fotos.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600",
    rating: 4.9,
    reviewCount: 523,
    price: 180,
    duration: "3 horas",
    category: "Aventura",
    distance: "0.5 km",
    location: "Praia do Forte - Ponto de Encontro",
    includes: ["Guia local", "Protetor solar", "Água", "Seguro"],
  },
  {
    id: "e2",
    name: "Mergulho nas Piscinas Naturais",
    description: "Descubra a vida marinha das piscinas naturais da Praia do Forte com equipamento completo de snorkel.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
    rating: 4.8,
    reviewCount: 412,
    price: 120,
    duration: "2 horas",
    category: "Aquático",
    distance: "1.0 km",
    location: "Piscinas Naturais - Praia do Forte",
    includes: ["Equipamento completo", "Guia bilíngue", "Fotos subaquáticas"],
  },
  {
    id: "e3",
    name: "Pesca Esportiva em Alto Mar",
    description: "Aventura de pesca esportiva em alto mar com equipamentos profissionais e instrutor experiente.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    rating: 4.7,
    reviewCount: 187,
    price: 350,
    duration: "5 horas",
    category: "Pesca",
    distance: "2.0 km",
    location: "Marina da Praia do Forte",
    includes: ["Barco", "Equipamento de pesca", "Isca", "Almoço", "Bebidas"],
  },
  {
    id: "e4",
    name: "Quadriciclo na Mata Atlântica",
    description: "Percorra trilhas na Mata Atlântica em um emocionante passeio de quadriciclo com paradas em mirantes.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600",
    rating: 4.6,
    reviewCount: 298,
    price: 220,
    duration: "2.5 horas",
    category: "Aventura",
    distance: "3.0 km",
    location: "Base de Quadriciclo - Estrada do Coco",
    includes: ["Capacete", "Instrutor", "Água", "Seguro"],
  },
  {
    id: "e5",
    name: "Passeio de Catamarã ao Pôr do Sol",
    description: "Navegue ao pôr do sol em um catamarã luxuoso com música ao vivo, drinks e petiscos gourmet.",
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=600",
    rating: 4.9,
    reviewCount: 634,
    price: 280,
    duration: "3 horas",
    category: "Passeio",
    distance: "1.5 km",
    location: "Porto da Praia do Forte",
    includes: ["Drinks", "Petiscos", "Música ao vivo", "Toalhas"],
  },
  {
    id: "e6",
    name: "Visita ao Projeto Tamar",
    description: "Conheça o famoso Projeto Tamar e aprenda sobre a preservação das tartarugas marinhas.",
    image: "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=600",
    rating: 4.8,
    reviewCount: 890,
    price: 45,
    duration: "1.5 horas",
    category: "Cultural",
    distance: "0.8 km",
    location: "Projeto Tamar - Praia do Forte",
    includes: ["Ingresso", "Guia especializado", "Material educativo"],
  },
];

export const nearbyLocations: NearbyLocation[] = [
  { id: "l1", name: "Castelo Garcia D'Ávila", description: "Ruínas históricas do primeiro castelo construído no Brasil", image: "https://images.unsplash.com/photo-1568322503736-ed24de45e4d1?w=400", distance: "2.5 km", category: "Histórico", rating: 4.7 },
  { id: "l2", name: "Praia do Lord", description: "Praia tranquila ideal para relaxar e contemplar a natureza", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", distance: "1.2 km", category: "Praia", rating: 4.9 },
  { id: "l3", name: "Reserva Sapiranga", description: "Trilhas ecológicas na Mata Atlântica com fauna e flora preservadas", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400", distance: "4.0 km", category: "Natureza", rating: 4.6 },
  { id: "l4", name: "Igreja São Francisco", description: "Igreja histórica do século XVI no coração da vila", image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=400", distance: "0.3 km", category: "Histórico", rating: 4.5 },
  { id: "l5", name: "Farol da Praia do Forte", description: "Farol histórico com vista panorâmica da costa", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", distance: "0.6 km", category: "Turístico", rating: 4.8 },
  { id: "l6", name: "Praia do Papa Gente", description: "Praia com recifes e piscinas naturais cristalinas", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400", distance: "1.8 km", category: "Praia", rating: 4.7 },
];

export const cuisineCategories = [
  "Todos", "Frutos do Mar", "Baiana", "Italiana", "Saudável", "Churrascaria", "Cafeteria"
];

export const experienceCategories = [
  "Todos", "Aventura", "Aquático", "Pesca", "Passeio", "Cultural"
];
