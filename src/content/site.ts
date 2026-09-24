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
  notes: string;
  symbol: "wave" | "flower" | "branch";
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Sobre", href: "#sobre" },
] as const;

export const whatsapp = {
  displayNumber: "+55 11 96455-7649",
  href: "https://wa.me/5511964557649",
} as const;

export const featuredProducts: Product[] = [
  {
    name: "Vela aromática",
    size: "180 g",
    price: "$ 56",
    image: "/images/candle.png",
    imageAlt: "Vela aromática em recipiente de vidro sobre tecido natural",
    featured: true,
    note: "Também disponível em 60 g por $ 20",
  },
  {
    name: "Difusor de aromas",
    size: "250 ml",
    price: "$ 75",
    image: "/images/diffuser.png",
    imageAlt: "Difusor de aromas em vidro com varetas e flores secas",
    featured: true,
    note: "Também disponível em 50 ml por $ 35",
  },
  {
    name: "Home spray",
    size: "120 ml",
    price: "$ 45",
    image: "/images/home-spray.png",
    imageAlt: "Home spray em frasco de vidro em cenário de tons naturais",
    featured: true,
    note: "Também disponível em 30 ml por $ 15",
  },
];

export const kits: Product[] = [
  {
    name: "Trio de home sprays",
    size: "3 × 30 ml",
    price: "$ 40",
    note: "Uma seleção compacta para descobrir novos aromas.",
  },
  {
    name: "Kit pequeno",
    size: "Difusor 50 ml + home spray 30 ml",
    price: "$ 45",
    note: "Um gesto delicado para presentear ou perfumar pequenos espaços.",
  },
  {
    name: "Kit médio",
    size: "Difusor 50 ml + home spray 120 ml",
    price: "$ 70",
    note: "Dois jeitos de manter o seu aroma favorito sempre por perto.",
  },
  {
    name: "Kit grande",
    size: "Difusor 250 ml + home spray 120 ml",
    price: "$ 120",
    note: "Presença prolongada para ambientes e ocasiões especiais.",
  },
];

export const scentCollections: ScentCollection[] = [
  {
    name: "Maré",
    notes: "Limão-siciliano, algas marinhas, água de coco e uva-verde",
    symbol: "wave",
  },
  {
    name: "Aconchego",
    notes: "Alfazema, chá-branco e baunilha",
    symbol: "flower",
  },
  {
    name: "Campo",
    notes: "Alecrim, flor de laranjeira, cascas e folhas",
    symbol: "branch",
  },
];
