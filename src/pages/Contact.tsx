import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-display font-semibold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone (Optional)</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    required
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-display font-semibold mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p className="text-muted-foreground">
                        TBAK Hostel for Woman<br />
                        Chennai
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-muted-foreground">+91 7305269707</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">jumana@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Hours</p>
                      <p className="text-muted-foreground">
                        Mon-Fri: 7am - 8pm<br />
                        Sat-Sun: 8am - 9pm
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-display font-semibold mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </Card>

              {/* Map */}
              <Card className="p-6">
                <h3 className="text-xl font-display font-semibold mb-4">
                  Find Us
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086349855775!2d-122.41941468468107!3d37.77492797975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Heal Café Location"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
