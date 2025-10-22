import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Order placed successfully! Thank you for choosing Heal Café.");
      clearCart();
      navigate("/");
    }, 2000);
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Checkout
          </h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-display font-semibold mb-6">
                Payment Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="card">Card Number</Label>
                  <Input
                    id="card"
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" required placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      required
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Place Order"}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  This is a demo checkout. No actual payment will be processed.
                </p>
              </form>
            </Card>

            {/* Order Summary */}
            <Card className="p-6 h-fit">
              <h2 className="text-2xl font-display font-semibold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span className="font-semibold">
                    ${(total * 0.08).toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-primary">
                    ${(total * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
