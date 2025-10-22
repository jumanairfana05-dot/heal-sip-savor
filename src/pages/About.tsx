import { Sprout, Target, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Born from a passion for wellness and a love for organic living,
            Heal Café is more than just a place to eat—it's a movement.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in">
                It all started with a simple idea: what if we could create a space
                where health and happiness come together naturally? In 2020, our
                founders—nutrition enthusiasts and wellness advocates—opened the
                doors to Heal Café with a mission to make organic, wholesome food
                accessible and delicious for everyone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in-up">
                Every smoothie, meal, and drink we serve is crafted with intention.
                We believe that what you put into your body matters, which is why we
                source only the finest organic ingredients from local farms. Our menu
                is designed to nourish not just your body, but your soul.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
                Today, Heal Café has become a beloved community hub where people
                come together to share their wellness journeys, connect over
                nutritious meals, and discover the healing power of nature's bounty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-fade-in">
            Our Mission & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth animate-scale-in">
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To inspire and empower individuals to embrace a healthier lifestyle
                through delicious, organic food and drinks. We're committed to making
                wellness accessible, enjoyable, and sustainable for all.
              </p>
            </div>

            {/* Health */}
            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Health First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your well-being is at the heart of everything we do. From nutrient-dense
                smoothies to wholesome meals, every item on our menu is designed to
                fuel your body with the goodness it deserves.
              </p>
            </div>

            {/* Community */}
            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of connection. Heal Café is a space where
                like-minded individuals gather to share stories, support each other's
                wellness goals, and build lasting friendships.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center mb-6">
                <Sprout className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Natural Living</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're passionate about sustainability and protecting our planet.
                Our commitment to organic farming, eco-friendly packaging, and
                reducing waste reflects our dedication to a healthier earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
            Meet Our Passionate Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up">
            Behind every smoothie and meal is a team of dedicated wellness enthusiasts
            who are here to support your health journey every step of the way.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-scale-in">
            From our expert nutritionists to our friendly baristas, everyone at Heal Café
            shares a common goal: to help you feel your absolute best. Come say hello—we
            can't wait to be part of your wellness story!
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
