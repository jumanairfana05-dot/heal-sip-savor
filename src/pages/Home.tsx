import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <Leaf className="w-16 h-16 text-primary animate-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 text-balance">
            Sip. Savor. Heal.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Your sanctuary for organic food, refreshing smoothies, and herbal drinks.
            Experience health and happiness through natural living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="group">
                Explore Menu
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Link to="/recipe-builder">
              <Button size="lg" variant="outline">
                Build Your Own
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Why Choose Heal Café?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just a café. We're a community dedicated to wellness,
              sustainability, and the joy of natural living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-smooth animate-scale-in">
              <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">100% Organic</h3>
              <p className="text-muted-foreground">
                Every ingredient is carefully sourced from local organic farms,
                ensuring the highest quality and freshness in every bite and sip.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Made with Love</h3>
              <p className="text-muted-foreground">
                Our passionate team crafts each item with care and dedication,
                infusing positive energy into everything we create.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Community First</h3>
              <p className="text-muted-foreground">
                Join our wellness community where health-conscious individuals
                connect, share, and grow together on their healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 animate-fade-in">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Visit us today and discover the perfect blend of taste and health.
            Your body will thank you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="animate-scale-in">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
