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

export type ChristmasScent = {
  name: string;
  family: string;
  notes: string;
  image: string;
  imageAlt: string;
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

export const christmasScents: ChristmasScent[] = [
  {
    name: "Biscoito de Gengibre",
    family: "Gourmand adocicada",
    notes: "Notas doces e especiadas que lembram o aconchego do Natal.",
    image: "/images/christmas/gingerbread.jpg",
    imageAlt: "Biscoitos de gengibre com especiarias e frutas vermelhas",
  },
  {
    name: "Noite Feliz",
    family: "Amadeirada aromática",
    notes: "Um equilíbrio entre o amadeirado e notas frescas que criam uma atmosfera acolhedora.",
    image: "/images/christmas/noite-feliz.jpg",
    imageAlt: "Luzes quentes entre pinhos em uma composição natalina",
  },
  {
    name: "Queima Nozes",
    family: "Amadeirada especiada",
    notes: "Notas amadeiradas e adocicadas que remetem ao clima natalino com elegância.",
    image: "/images/christmas/queima-nozes.jpg",
    imageAlt: "Lanterna acesa com frutas vermelhas e velas ao fundo",
  },
  {
    name: "Panetone",
    family: "Gourmand adocicada",
    notes: "Aroma marcante e acolhedor para os melhores momentos da sua casa.",
    image: "/images/christmas/panetone.jpg",
    imageAlt: "Fatia de panetone em uma mesa decorada para o Natal",
  },
];

export const christmasProducts: Product[] = [
  {
    name: "Vela Pinha",
    size: "Edição de Natal",
    price: "R$ 35,00",
    image: "/images/christmas/vela-pinha.jpg",
    imageAlt: "Vela em formato de pinha com decoração natalina",
  },
  {
    name: "Vela Árvore",
    size: "Edição de Natal",
    price: "R$ 35,00",
    image: "/images/christmas/vela-arvore.jpg",
    imageAlt: "Vela em formato de árvore de Natal",
  },
  {
    name: "Vela em lata",
    size: "Edição de Natal",
    price: "R$ 30,00",
    image: "/images/christmas/vela-lata.jpg",
    imageAlt: "Vela em lata vermelha decorada para o Natal",
  },
  {
    name: "Kit Pinha + Árvore de Natal",
    size: "Edição de Natal",
    price: "R$ 65,00",
    image: "/images/christmas/kit-natal.jpg",
    imageAlt: "Kit com vela pinha e vela árvore de Natal",
  },
];
