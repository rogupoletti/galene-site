export type Product = {
  name: string;
  size: string;
  price: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  note?: string;
};

export type ScentCollection = {
  name: string;
  family: string;
  notes: string;
  symbol: "wave" | "flower" | "branch";
};

export type ChristmasScent = {
  name: string;
  family: string;
  notes: string;
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Natal", href: "#natal" },
  { label: "Sobre", href: "#sobre" },
] as const;

export const whatsapp = {
  displayNumber: "+55 11 96455-7649",
  href: "https://wa.me/5511964557649",
} as const;

export const featuredProducts: Product[] = [
  {
    name: "Vela aromática",
    size: "60 g",
    price: "R$ 20,00",
    image: "/images/candle.png",
    imageAlt: "Vela aromática de 60 g em recipiente de vidro sobre tecido natural",
    featured: true,
    note: "Luz e fragrância para momentos especiais.",
  },
  {
    name: "Vela aromática",
    size: "180 g",
    price: "R$ 50,00",
    image: "/images/candle.png",
    imageAlt: "Vela aromática de 180 g em recipiente de vidro sobre tecido natural",
    featured: true,
    note: "Uma presença perfumada para acompanhar por mais tempo.",
  },
  {
    name: "Difusor de aromas",
    size: "50 ml",
    price: "R$ 35,00",
    image: "/images/diffuser.png",
    imageAlt: "Difusor de aromas de 50 ml em vidro com varetas e flores secas",
    featured: true,
    note: "Aroma contínuo para o seu espaço.",
  },
  {
    name: "Home spray",
    size: "30 ml",
    price: "R$ 20,00",
    image: "/images/home-spray.png",
    imageAlt: "Home spray de 30 ml em frasco de vidro em cenário de tons naturais",
    featured: true,
    note: "Perfume instantâneo para pequenos espaços.",
  },
  {
    name: "Home spray",
    size: "120 ml",
    price: "R$ 50,00",
    image: "/images/home-spray.png",
    imageAlt: "Home spray de 120 ml em frasco de vidro em cenário de tons naturais",
    featured: true,
    note: "Praticidade para perfumar cada ambiente.",
  },
];

export const kits: Product[] = [
  {
    name: "Kit difusor + home spray",
    size: "Difusor 50 ml + home spray 30 ml",
    price: "R$ 55,00",
    note: "Uma dupla para perfumar o espaço de formas diferentes.",
  },
  {
    name: "Kit 3 home sprays",
    size: "3 × 30 ml",
    price: "R$ 50,00",
    note: "Uma seleção compacta para descobrir novos aromas.",
  },
  {
    name: "Kit 3 velas",
    size: "3 × 60 g",
    price: "R$ 55,00",
    note: "Três velas para iluminar e perfumar momentos especiais.",
  },
];

export const scentCollections: ScentCollection[] = [
  {
    name: "Água de Coco",
    family: "Cítrica",
    notes: "Notas aquáticas e suaves que trazem leveza e frescor.",
    symbol: "wave",
  },
  {
    name: "Algas Marinhas",
    family: "Aromática",
    notes: "Notas do mar que renovam e trazem tranquilidade.",
    symbol: "wave",
  },
  {
    name: "Vanilla",
    family: "Adocicada",
    notes: "Doce e envolvente, com notas cremosas e reconfortantes.",
    symbol: "flower",
  },
  {
    name: "Chá Branco",
    family: "Floral fresca",
    notes: "Leve e sofisticada, com notas florais e toque de frescor.",
    symbol: "flower",
  },
  {
    name: "Flor de Laranjeira",
    family: "Floral cítrica",
    notes: "Notas florais delicadas e cítricas que trazem alegria e leveza.",
    symbol: "flower",
  },
  {
    name: "Cascas e Folhas",
    family: "Verde amadeirada",
    notes: "Notas verdes e naturais que trazem equilíbrio e bem-estar.",
    symbol: "branch",
  },
  {
    name: "Trouss",
    family: "Amadeirada",
    notes: "Notas amadeiradas e sofisticadas, com toque moderno.",
    symbol: "branch",
  },
];

export const christmasScents: ChristmasScent[] = [
  {
    name: "Biscoito de Gengibre",
    family: "Gourmand (adocicada)",
    notes: "Notas doces e especiadas que lembram o aconchego do Natal.",
  },
  {
    name: "Queima Nozes",
    family: "Amadeirada especiada",
    notes: "Notas amadeiradas e adocicadas que remetem ao clima natalino com elegância.",
  },
];

export const christmasProducts: Product[] = [
  {
    name: "Vela Pinha",
    size: "Edição de Natal",
    price: "R$ 35,00",
    image: "/images/christmas/vela-pinha-rosa.png",
    imageAlt: "Vela rosa em formato de pinha acesa",
  },
  {
    name: "Vela Árvore",
    size: "Edição de Natal",
    price: "R$ 35,00",
    image: "/images/christmas/vela-arvore-colorida.png",
    imageAlt: "Velas em formato de árvores em tons de creme, azul e rosa",
  },
];
