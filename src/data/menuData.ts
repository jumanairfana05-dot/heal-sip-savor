import greenGoddessImage from "@/assets/menu/green-goddess-smoothie.jpg";
import berryBlissImage from "@/assets/menu/berry-bliss.jpg";
import goldenTurmericImage from "@/assets/menu/golden-turmeric-latte.jpg";
import matchaMagicImage from "@/assets/menu/matcha-magic.jpg";
import tropicalParadiseImage from "@/assets/menu/tropical-paradise.jpg";
import herbalTeaImage from "@/assets/menu/herbal-healing-tea.jpg";
import buddhaBowlImage from "@/assets/menu/buddha-bowl.jpg";
import avocadoToastImage from "@/assets/menu/avocado-toast.jpg";
import harvestSaladImage from "@/assets/menu/harvest-salad.jpg";
import wellnessWrapImage from "@/assets/menu/wellness-wrap.jpg";
import proteinBowlImage from "@/assets/menu/protein-power-bowl.jpg";
import cacaoBlissImage from "@/assets/menu/cacao-bliss-balls.jpg";
import chiaPuddingImage from "@/assets/menu/chia-pudding-parfait.jpg";
import niceCreamImage from "@/assets/menu/banana-nice-cream.jpg";
import lemonTartImage from "@/assets/menu/lemon-lavender-tart.jpg";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "drinks" | "meals" | "desserts";
  tags: string[];
  icon: string;
  image?: string;
}

export const menuItems: MenuItem[] = [
  // Drinks
  {
    id: "drink-1",
    name: "Green Goddess Smoothie",
    description: "Spinach, kale, banana, mango, coconut water, and chia seeds",
    price: 720,
    category: "drinks",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "Leaf",
    image: greenGoddessImage,
  },
  {
    id: "drink-2",
    name: "Berry Bliss",
    description: "Mixed berries, acai, almond milk, honey, and hemp seeds",
    price: 760,
    category: "drinks",
    tags: ["gluten-free", "organic"],
    icon: "Cherry",
    image: berryBlissImage,
  },
  {
    id: "drink-3",
    name: "Golden Turmeric Latte",
    description: "Turmeric, ginger, cinnamon, oat milk, and maple syrup",
    price: 560,
    category: "drinks",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "Coffee",
    image: goldenTurmericImage,
  },
  {
    id: "drink-4",
    name: "Matcha Magic",
    description: "Ceremonial grade matcha, coconut milk, vanilla, and agave",
    price: 600,
    category: "drinks",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "GlassWater",
    image: matchaMagicImage,
  },
  {
    id: "drink-5",
    name: "Tropical Paradise",
    description: "Pineapple, mango, coconut, lime, and mint",
    price: 680,
    category: "drinks",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "Palmtree",
    image: tropicalParadiseImage,
  },
  {
    id: "drink-6",
    name: "Herbal Healing Tea",
    description: "Chamomile, lavender, lemon balm, and raw honey",
    price: 480,
    category: "drinks",
    tags: ["gluten-free", "organic"],
    icon: "Flower2",
    image: herbalTeaImage,
  },

  // Meals
  {
    id: "meal-1",
    name: "Buddha Bowl",
    description: "Quinoa, roasted vegetables, chickpeas, tahini dressing, and sprouts",
    price: 1200,
    category: "meals",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "UtensilsCrossed",
    image: buddhaBowlImage,
  },
  {
    id: "meal-2",
    name: "Avocado Toast Supreme",
    description: "Sourdough, smashed avocado, cherry tomatoes, microgreens, and seeds",
    price: 960,
    category: "meals",
    tags: ["vegan", "organic"],
    icon: "Sandwich",
    image: avocadoToastImage,
  },
  {
    id: "meal-3",
    name: "Harvest Salad",
    description: "Mixed greens, roasted sweet potato, beets, goat cheese, and walnuts",
    price: 1080,
    category: "meals",
    tags: ["gluten-free", "organic"],
    icon: "Salad",
    image: harvestSaladImage,
  },
  {
    id: "meal-4",
    name: "Wellness Wrap",
    description: "Whole wheat wrap, hummus, grilled vegetables, and tahini",
    price: 1000,
    category: "meals",
    tags: ["vegan", "organic"],
    icon: "Soup",
    image: wellnessWrapImage,
  },
  {
    id: "meal-5",
    name: "Protein Power Bowl",
    description: "Brown rice, grilled chicken, steamed broccoli, and miso glaze",
    price: 1280,
    category: "meals",
    tags: ["gluten-free", "organic"],
    icon: "Drumstick",
    image: proteinBowlImage,
  },

  // Desserts
  {
    id: "dessert-1",
    name: "Raw Cacao Bliss Balls",
    description: "Dates, cacao, coconut, and almond butter rolled in cocoa",
    price: 560,
    category: "desserts",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "Cookie",
    image: cacaoBlissImage,
  },
  {
    id: "dessert-2",
    name: "Chia Pudding Parfait",
    description: "Chia seeds, coconut milk, berries, and granola",
    price: 600,
    category: "desserts",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "IceCreamCone",
    image: chiaPuddingImage,
  },
  {
    id: "dessert-3",
    name: "Banana Nice Cream",
    description: "Frozen banana, almond butter, cacao nibs, and maple drizzle",
    price: 520,
    category: "desserts",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "IceCream",
    image: niceCreamImage,
  },
  {
    id: "dessert-4",
    name: "Lemon Lavender Tart",
    description: "Almond crust, lemon cashew filling, and lavender",
    price: 720,
    category: "desserts",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "CakeSlice",
    image: lemonTartImage,
  },
];
