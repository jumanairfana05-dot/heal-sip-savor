import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Sparkles, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface Ingredient {
  id: string;
  name: string;
  category: "base" | "fruits" | "greens" | "protein" | "extras";
  calories: number;
  price: number;
}

const ingredients: Ingredient[] = [
  // Base
  { id: "base-1", name: "Almond Milk", category: "base", calories: 30, price: 1.5 },
  { id: "base-2", name: "Coconut Water", category: "base", calories: 45, price: 2.0 },
  { id: "base-3", name: "Oat Milk", category: "base", calories: 120, price: 1.5 },
  { id: "base-4", name: "Orange Juice", category: "base", calories: 110, price: 1.5 },
  
  // Fruits
  { id: "fruit-1", name: "Banana", category: "fruits", calories: 105, price: 0.5 },
  { id: "fruit-2", name: "Strawberries", category: "fruits", calories: 50, price: 1.0 },
  { id: "fruit-3", name: "Mango", category: "fruits", calories: 100, price: 1.5 },
  { id: "fruit-4", name: "Blueberries", category: "fruits", calories: 85, price: 1.5 },
  { id: "fruit-5", name: "Pineapple", category: "fruits", calories: 80, price: 1.0 },
  
  // Greens
  { id: "green-1", name: "Spinach", category: "greens", calories: 7, price: 0.5 },
  { id: "green-2", name: "Kale", category: "greens", calories: 33, price: 0.5 },
  { id: "green-3", name: "Cucumber", category: "greens", calories: 16, price: 0.5 },
  
  // Protein
  { id: "protein-1", name: "Greek Yogurt", category: "protein", calories: 100, price: 2.0 },
  { id: "protein-2", name: "Protein Powder", category: "protein", calories: 120, price: 2.5 },
  { id: "protein-3", name: "Almond Butter", category: "protein", calories: 190, price: 1.5 },
  
  // Extras
  { id: "extra-1", name: "Chia Seeds", category: "extras", calories: 60, price: 1.0 },
  { id: "extra-2", name: "Hemp Seeds", category: "extras", calories: 55, price: 1.0 },
  { id: "extra-3", name: "Honey", category: "extras", calories: 64, price: 0.5 },
  { id: "extra-4", name: "Cacao Powder", category: "extras", calories: 20, price: 1.0 },
];

const RecipeBuilder = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const { addItem } = useCart();

  const toggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedItems = ingredients.filter((ing) =>
    selectedIngredients.includes(ing.id)
  );

  const totalCalories = selectedItems.reduce((sum, ing) => sum + ing.calories, 0);
  const totalPrice = selectedItems.reduce((sum, ing) => sum + ing.price, 0);

  const categoryNames = {
    base: "Base Liquid",
    fruits: "Fruits",
    greens: "Greens & Vegetables",
    protein: "Protein",
    extras: "Superfoods & Extras",
  };

  const handleAddToCart = () => {
    if (selectedItems.length === 0) {
      toast.error("Please select at least one ingredient");
      return;
    }

    const recipeName = `Custom Smoothie (${selectedItems.length} ingredients)`;
    addItem({
      id: `custom-${Date.now()}`,
      name: recipeName,
      price: totalPrice,
      category: "drinks",
    });
    setSelectedIngredients([]);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-primary animate-float" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Recipe Builder
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Create your perfect smoothie by mixing your favorite organic ingredients
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredient Selection */}
            <div className="lg:col-span-2 space-y-8">
              {Object.entries(categoryNames).map(([category, name]) => (
                <div key={category}>
                  <h2 className="text-2xl font-display font-semibold mb-4">
                    {name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ingredients
                      .filter((ing) => ing.category === category)
                      .map((ingredient) => {
                        const isSelected = selectedIngredients.includes(
                          ingredient.id
                        );
                        return (
                          <Card
                            key={ingredient.id}
                            className={`p-4 cursor-pointer transition-smooth hover:shadow-soft ${
                              isSelected ? "border-primary bg-sage-light/30" : ""
                            }`}
                            onClick={() => toggleIngredient(ingredient.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <Checkbox
                                checked={isSelected}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <Label className="cursor-pointer font-semibold">
                                  {ingredient.name}
                                </Label>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge variant="secondary" className="text-xs">
                                    {ingredient.calories} cal
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    +${ingredient.price.toFixed(2)}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </Card>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>

            {/* Preview & Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-32 shadow-medium">
                <h2 className="text-2xl font-display font-semibold mb-4">
                  Your Recipe
                </h2>

                {selectedItems.length === 0 ? (
                  <div className="text-center py-8">
                    <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">
                      Start selecting ingredients to build your custom smoothie
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2 mb-6 max-h-64 overflow-y-auto">
                      {selectedItems.map((ingredient) => (
                        <div
                          key={ingredient.id}
                          className="flex items-center justify-between py-2 border-b border-border"
                        >
                          <span className="text-sm">{ingredient.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => toggleIngredient(ingredient.id)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* Nutritional Info */}
                    <div className="bg-muted rounded-lg p-4 mb-6">
                      <h3 className="font-semibold mb-3">Nutritional Info</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Total Calories
                          </span>
                          <span className="font-semibold">{totalCalories}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Ingredients
                          </span>
                          <span className="font-semibold">
                            {selectedItems.length}
                          </span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold pt-2 border-t border-border">
                          <span>Total Price</span>
                          <span className="text-primary">
                            ${totalPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full group"
                      size="lg"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-smooth" />
                      Add to Cart
                    </Button>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipeBuilder;
