import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Filter, Leaf, Cherry, Coffee, GlassWater, Palmtree, Flower2, UtensilsCrossed, Sandwich, Salad, Soup, Drumstick, Cookie, IceCreamCone, IceCream, CakeSlice } from "lucide-react";
import { menuItems, MenuItem } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";

const iconMap: Record<string, React.ComponentType<any>> = {
  Leaf,
  Cherry,
  Coffee,
  GlassWater,
  Palmtree,
  Flower2,
  UtensilsCrossed,
  Sandwich,
  Salad,
  Soup,
  Drumstick,
  Cookie,
  IceCreamCone,
  IceCream,
  CakeSlice,
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { addItem } = useCart();

  const categories = [
    { id: "all", name: "All Items" },
    { id: "drinks", name: "Drinks" },
    { id: "meals", name: "Meals" },
    { id: "desserts", name: "Desserts" },
  ];

  const availableTags = ["vegan", "gluten-free", "organic"];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => item.tags.includes(tag));
    return matchesCategory && matchesTags;
  });

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
    });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Discover our selection of organic, wholesome dishes crafted with love
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-smooth"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Tags */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter:</span>
            {availableTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer transition-smooth hover:scale-105"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No items match your filters. Try adjusting your selection.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-medium transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Image Header */}
                    <div className="h-48 overflow-hidden bg-gradient-to-br from-sage-light to-secondary">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-smooth"
                        />
                      ) : (
                        IconComponent && (
                          <div className="w-full h-full flex items-center justify-center">
                            <IconComponent className="w-20 h-20 text-primary/40" />
                          </div>
                        )
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-display font-semibold">
                          {item.name}
                        </h3>
                        <span className="text-lg font-semibold text-primary">
                          ₹{item.price}
                        </span>
                      </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                      <Button
                        className="w-full group"
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-smooth" />
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Menu;
