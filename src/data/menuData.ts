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
  },
  {
    id: "drink-2",
    name: "Berry Bliss",
    description: "Mixed berries, acai, almond milk, honey, and hemp seeds",
    price: 760,
    category: "drinks",
    tags: ["gluten-free", "organic"],
    icon: "Cherry",
  },
  {
    id: "drink-3",
    name: "Golden Turmeric Latte",
    description: "Turmeric, ginger, cinnamon, oat milk, and maple syrup",
    price: 560,
    category: "drinks",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "Coffee",
  },
  {
    id: "drink-4",
    name: "Matcha Magic",
    description: "Ceremonial grade matcha, coconut milk, vanilla, and agave",
    price: 600,
    category: "drinks",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "GlassWater",
  },
  {
    id: "drink-5",
    name: "Tropical Paradise",
    description: "Pineapple, mango, coconut, lime, and mint",
    price: 680,
    category: "drinks",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "Palmtree",
  },
  {
    id: "drink-6",
    name: "Herbal Healing Tea",
    description: "Chamomile, lavender, lemon balm, and raw honey",
    price: 480,
    category: "drinks",
    tags: ["gluten-free", "organic"],
    icon: "Flower2",
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
  },
  {
    id: "meal-2",
    name: "Avocado Toast Supreme",
    description: "Sourdough, smashed avocado, cherry tomatoes, microgreens, and seeds",
    price: 960,
    category: "meals",
    tags: ["vegan", "organic"],
    icon: "Sandwich",
  },
  {
    id: "meal-3",
    name: "Harvest Salad",
    description: "Mixed greens, roasted sweet potato, beets, goat cheese, and walnuts",
    price: 1080,
    category: "meals",
    tags: ["gluten-free", "organic"],
    icon: "Salad",
  },
  {
    id: "meal-4",
    name: "Wellness Wrap",
    description: "Whole wheat wrap, hummus, grilled vegetables, and tahini",
    price: 1000,
    category: "meals",
    tags: ["vegan", "organic"],
    icon: "Soup",
  },
  {
    id: "meal-5",
    name: "Protein Power Bowl",
    description: "Brown rice, grilled chicken, steamed broccoli, and miso glaze",
    price: 1280,
    category: "meals",
    tags: ["gluten-free", "organic"],
    icon: "Drumstick",
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
  },
  {
    id: "dessert-2",
    name: "Chia Pudding Parfait",
    description: "Chia seeds, coconut milk, berries, and granola",
    price: 600,
    category: "desserts",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "IceCreamCone",
  },
  {
    id: "dessert-3",
    name: "Banana Nice Cream",
    description: "Frozen banana, almond butter, cacao nibs, and maple drizzle",
    price: 520,
    category: "desserts",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "IceCream",
  },
  {
    id: "dessert-4",
    name: "Lemon Lavender Tart",
    description: "Almond crust, lemon cashew filling, and lavender",
    price: 720,
    category: "desserts",
    tags: ["vegan", "gluten-free", "organic"],
    icon: "CakeSlice",
  },
];
