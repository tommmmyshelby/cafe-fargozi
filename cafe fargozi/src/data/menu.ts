export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: "Shawarma" | "Burgers" | "Sides" | "Beverages";
  description: string;
  image: string; // NEW FIELD
  rating?: number;
  isBestseller?: boolean;
  isSpicy?: boolean;
  highlights?: string[];
  nutrition: { calories: number; protein: string; carbs: string; fats: string; };
}

export const menuData: MenuItem[] = [
  // --- SHAWARMA PROGRAM ---
  {
    id: "s1",
    name: "Fargozi Special Chicken Shawarma",
    price: 234.64,
    category: "Shawarma",
    description: "The signature flagship roll crafted with our proprietary spice blend.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1200",
    isBestseller: true,
    nutrition: { calories: 450, protein: "32g", carbs: "45g", fats: "18g" }
  },
  {
    id: "s2",
    name: "Mexican Cheese Chicken Shawarma",
    price: 221.12,
    category: "Shawarma",
    description: "Fusion of Mexican heat and Middle Eastern technique.",
    image: "https://images.unsplash.com/photo-1626700051175-656fc7ec33ea?q=80&w=1200",
    rating: 4.9,
    isSpicy: true,
    nutrition: { calories: 510, protein: "30g", carbs: "42g", fats: "24g" }
  },
  {
    id: "s3",
    name: "Whole Meat Chicken Shawarma",
    price: 221.12,
    category: "Shawarma",
    description: "High protein-to-carb ratio; served with authentic Rumali roti.",
    image: "https://images.unsplash.com/photo-1633383718081-22ac93e3dbf1?q=80&w=1200",
    nutrition: { calories: 380, protein: "45g", carbs: "12g", fats: "15g" }
  },
  {
    id: "s4",
    name: "Crispy Chicken Shawarma",
    price: 216.56,
    category: "Shawarma",
    description: "Textural emphasis; marinated chicken with hot masala and sauces.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200",
    nutrition: { calories: 520, protein: "28g", carbs: "48g", fats: "22g" }
  },
  {
    id: "s5",
    name: "Peri Peri Spicy Chicken Shawarma",
    price: 193.04,
    category: "Shawarma",
    description: "Targeted at the spicy palate; featuring a fiery Peri Peri infusion.",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1200",
    isSpicy: true,
    nutrition: { calories: 440, protein: "31g", carbs: "44g", fats: "17g" }
  },
  {
    id: "s6",
    name: "Lebanese Chicken Shawarma",
    price: 193.04,
    category: "Shawarma",
    description: "Classic preparation; focus on fragrant herbs and citrus zest.",
    image: "https://images.unsplash.com/photo-1593504049359-74330189a355?q=80&w=1200",
    nutrition: { calories: 410, protein: "32g", carbs: "40g", fats: "14g" }
  },
  {
    id: "s7",
    name: "Turkish Chicken Shawarma",
    price: 178.48,
    category: "Shawarma",
    description: "Most popular by volume; authentic Turkish spices and technique.",
    image: "https://images.unsplash.com/photo-1632778149174-27929424d805?q=80&w=1200",
    rating: 4.7,
    isBestseller: true,
    nutrition: { calories: 430, protein: "30g", carbs: "45g", fats: "16g" }
  },
  {
    id: "s8",
    name: "Veg Shawarma Roll",
    price: 140.40,
    category: "Shawarma",
    description: "Inclusive option; marinated fresh vegetables with signature white sauce.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200",
    nutrition: { calories: 310, protein: "8g", carbs: "52g", fats: "10g" }
  },
  {
    id: "s9",
    name: "Chicken Shawarma Plate",
    price: 280.80,
    category: "Shawarma",
    description: "Deconstructed meal: shredded chicken, rotis, salad, fries, and dual-dip system.",
    image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=1200",
    nutrition: { calories: 720, protein: "48g", carbs: "65g", fats: "32g" }
  },

  // --- GOURMET BURGERS ---
  {
    id: "b1",
    name: "Crispy Cheese Burger",
    price: 249.20,
    category: "Burgers",
    description: "Gourmet segment; features chili mayo and ranch on toasted brioche buns.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
    rating: 4.9,
    nutrition: { calories: 650, protein: "26g", carbs: "52g", fats: "35g" }
  },
  {
    id: "b2",
    name: "Istanbul Cheese Burger",
    price: 244.64,
    category: "Burgers",
    description: "Beef-centric signature; emphasizes juicy patties and diverse premium toppings.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200",
    nutrition: { calories: 710, protein: "34g", carbs: "48g", fats: "42g" }
  },
  {
    id: "b3",
    name: "Veg Burger",
    price: 168.48,
    category: "Burgers",
    description: "Savory vegetarian alternative with hearty flavors and house-made slaw.",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1200",
    nutrition: { calories: 480, protein: "12g", carbs: "58g", fats: "18g" }
  },

  // --- APPETIZERS & SIDES ---
  {
    id: "a1",
    name: "Crab Claw (4 Pcs)",
    price: 183.00,
    category: "Sides",
    description: "Niche seafood appetizer; adds sophisticated variety to the menu.",
    image: "https://images.unsplash.com/photo-1559739511-e0e64f7b2c58?q=80&w=1200",
    nutrition: { calories: 240, protein: "18g", carbs: "12g", fats: "14g" }
  },
  {
    id: "a2",
    name: "Chicken Nuggets (6 Pcs)",
    price: 168.48,
    category: "Sides",
    description: "Standard protein appetizer tailored for the younger demographic.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200",
    nutrition: { calories: 320, protein: "20g", carbs: "22g", fats: "18g" }
  },
  {
    id: "a3",
    name: "Popcorn Chicken (12 Pcs)",
    price: 154.96,
    category: "Sides",
    description: "Bite-sized boneless chicken tossed in signature global spices.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808b8141a?q=80&w=1200",
    nutrition: { calories: 380, protein: "24g", carbs: "26g", fats: "20g" }
  },
  {
    id: "a4",
    name: "Peri Peri Fries",
    price: 154.96,
    category: "Sides",
    description: "Spicy variant of the classic potato side with African bird's eye chili.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=1200",
    isSpicy: true,
    nutrition: { calories: 350, protein: "4g", carbs: "48g", fats: "16g" }
  },
  {
    id: "a5",
    name: "Normal French Fries",
    price: 140.40,
    category: "Sides",
    description: "Essential side; highly rated for consistency and crispness.",
    image: "https://images.unsplash.com/photo-1630384066272-17124ff37e78?q=80&w=1200",
    rating: 4.8,
    nutrition: { calories: 310, protein: "3g", carbs: "44g", fats: "14g" }
  },

  // --- BEVERAGES ---
  {
    id: "v1",
    name: "Specialty Milk Shake",
    price: 183.04,
    category: "Beverages",
    description: "Premium segment: choose from Oreo, Snickers, or Cold Coffee.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1200",
    nutrition: { calories: 420, protein: "8g", carbs: "62g", fats: "18g" }
  },
  {
    id: "v2",
    name: "Ice Cream Shake",
    price: 154.96,
    category: "Beverages",
    description: "Classic flavors: Sharja, Vanilla, or Butterscotch.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200",
    nutrition: { calories: 380, protein: "6g", carbs: "58g", fats: "15g" }
  },
  {
    id: "v3",
    name: "Signature Mojito",
    price: 140.40,
    category: "Beverages",
    description: "Refreshing infusion: Green Apple or Passion Fruit.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200",
    nutrition: { calories: 120, protein: "0g", carbs: "30g", fats: "0g" }
  },
  {
    id: "v4",
    name: "Premium Fresh Juice",
    price: 112.32,
    category: "Beverages",
    description: "Freshly squeezed seasonal fruits: Orange or Mosambi.",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1200",
    nutrition: { calories: 90, protein: "1g", carbs: "22g", fats: "0g" }
  }
];