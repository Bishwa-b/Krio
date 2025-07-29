
export interface Product {
  id: string;
  name: string;
  price: number;
  size?: string;
  available: string;
  images: string[];
  description: string;
  longDescription: string;
  color: string;
  productLink?: string;
  ingredients: string[];
  benefits: string[];
  reviews: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    date: string;
    text: string;
  }[];
}

export const products: Product[] = [
  { 
    id: "original-energy-drink",
    name: "Krio Original Punch",
    price: 120.00,
    size: "250ml",
    available: "In Stock",
    images: [
      "/lovable-uploads/Krio-punch.png",
      "/lovable-uploads/punch2.png",
      "/lovable-uploads/punch3.png",
    ],
    description: "Step into a refreshing world of clean, plant-based energy with Krio Sparkling Original Punch. Crafted for those who crave focus, hydration, and flavor without the jitters or sugar crash, Krio brings you energy powered by cacao, not caffeine.",
    longDescription: "Krio’s Sparkling Original Punch, inspired by the essence of cacao, delivers a smooth profile with rich cocoa and subtle caramel notes. This flavor is a bold departure from the usual fruit-forward energy drinks, offering a more grounded, indulgent experience. It has a crisp, fizzy texture layered with the warmth of cacao combined with natural sweetness. It’s comfort and clarity in a can—rich, refined, and remarkably refreshing.",
    color: "krio-orange",
    productLink: "https://amzn.in/d/5CWQ2pX",
    ingredients: [
      "Caffeine (180mg)",
      "Taurine (1000mg)",
      "B-Vitamin Complex",
      "Electrolytes Blend",
      "Natural Guarana Extract",
      "L-Carnitine (500mg)",
      "Natural Flavors",
      "Carbonated Water"
    ],
    benefits: [
      "Instant energy boost",
      "Enhanced mental focus",
      "Improved physical performance",
      "No crash formula",
      "Refreshing taste"
    ],
    reviews: [
      {
        id: "r1",
        name: "Michael T.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "2023-06-15",
        text: "Perfect energy boost for my morning workouts. Great taste and no jitters!"
      },
      {
        id: "r2",
        name: "Sarah K.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        date: "2023-05-22",
        text: "Love this energy drink! I feel focused and energized without the crash. Only giving 4 stars because I wish it came in more flavors."
      },
      {
        id: "r3",
        name: "David M.",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        rating: 5,
        date: "2023-07-03",
        text: "Best energy drink I've ever tried. The focus and energy last for hours, and the taste is amazing."
      }
    ]
  },
  {
    id: "sugar-free-energy",
    name: "Krio Blueberry Lemonade",
    price: 120.00,
    size: "250ml",
    available: "In Stock",
    images: [
      "/lovable-uploads/Krio-blue.png",
      "/lovable-uploads/blue2.png",
      "/lovable-uploads/blue3.png"
    ],
    description: "Step into a refreshing world of clean, plant-based energy with Krio Sparkling Blueberry Lemonade. Crafted for those who crave focus, hydration, and flavor without the jitters or sugar crash, Krio brings you energy powered by cacao, not caffeine.",
    longDescription: "Krio’s Sparkling Blueberry Lemonade brings to you a vibrant blueberry flavor paired with a zesty citrus twist, creating a taste that’s crisp, lightly sweet, and refreshingly tart. Each sip offers a modern, clean taste -perfectly balanced to awaken your senses and feels like sunshine in a can – cool, fruity, sparkling, and uplifting.",
    color: "krio-main",
    productLink: "https://amzn.in/d/0PMI1Ae",
    ingredients: [
      "Caffeine (180mg)",
      "Taurine (1000mg)",
      "B-Vitamin Complex",
      "Electrolytes Blend",
      "Natural Guarana Extract",
      "L-Carnitine (500mg)",
      "Sucralose (Natural Sweetener)",
      "Carbonated Water"
    ],
    benefits: [
      "Zero sugar formula",
      "Clean energy boost",
      "Enhanced mental focus",
      "No crash or jitters",
      "Keto-friendly"
    ],
    reviews: [
      {
        id: "r1",
        name: "Jason R.",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        date: "2023-07-18",
        text: "Finally a sugar-free energy drink that actually tastes good! Great for my keto diet and keeps me focused during work."
      },
      {
        id: "r2",
        name: "Laura T.",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 4,
        date: "2023-06-05",
        text: "Love that I can get my energy boost without the sugar. No crash and the focus is amazing."
      },
      {
        id: "r3",
        name: "Carlos M.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        date: "2023-05-14",
        text: "As someone with diabetes, this is a game-changer. Great taste, great energy, zero sugar!"
      }
    ]
  },
  // {
  //   id: "bolt-energy-focus",
  //   name: "Bolt Energy Focus",
  //   price: 32.99,
  //   images: [
  //     "https://images.unsplash.com/photo-1631756964162-25c8c07586d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //     "https://images.unsplash.com/photo-1631935732143-471a15ab5a3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //     "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  //   ],
  //   description: "Enhanced nootropic blend for maximum mental clarity and productivity.",
  //   longDescription: "Bolt Energy Focus is specially formulated for those who need maximum mental performance. With an enhanced nootropic blend, this energy drink improves concentration, memory, and cognitive function while providing sustained energy. Perfect for students, professionals, and anyone who needs to stay sharp and focused.",
  //   ingredients: [
  //     "Caffeine (200mg)",
  //     "L-Theanine (200mg)",
  //     "Alpha-GPC (150mg)",
  //     "Lion's Mane Extract",
  //     "B-Vitamin Complex",
  //     "Taurine (1000mg)",
  //     "Natural Flavors",
  //     "Carbonated Water"
  //   ],
  //   benefits: [
  //     "Enhanced cognitive function",
  //     "Improved memory and recall",
  //     "Sustained mental clarity",
  //     "Balanced energy (no jitters)",
  //     "Increased productivity"
  //   ],
  //   reviews: [
  //     {
  //       id: "r1",
  //       name: "Melissa J.",
  //       avatar: "https://randomuser.me/api/portraits/women/28.jpg",
  //       rating: 5,
  //       date: "2023-07-22",
  //       text: "As a medical student, this has been a lifesaver. The focus I get from this drink is incredible, and it lasts much longer than coffee."
  //     },
  //     {
  //       id: "r2",
  //       name: "Thomas L.",
  //       avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  //       rating: 5,
  //       date: "2023-06-17",
  //       text: "Best product for long coding sessions. Clear focus without the jittery feeling of other energy drinks."
  //     },
  //     {
  //       id: "r3",
  //       name: "Anna C.",
  //       avatar: "https://randomuser.me/api/portraits/women/52.jpg",
  //       rating: 4,
  //       date: "2023-05-30",
  //       text: "Great for my busy workdays. Helps me stay focused in meetings and productive throughout the day."
  //     }
  //   ]
  // }
];

export const getFeaturedProducts = () => {
  return products.slice(0, 3);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
