import { Link } from "react-router-dom";
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage-dark text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8" />
              <span className="text-2xl font-display font-bold">Heal Café</span>
            </div>
            <p className="text-sm text-sage-light">
              Your sanctuary for organic food, refreshing smoothies, and herbal drinks.
              Nourish your body, heal your soul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-sage-light hover:text-white transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-sage-light hover:text-white transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm text-sage-light hover:text-white transition-smooth">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/recipe-builder" className="text-sm text-sage-light hover:text-white transition-smooth">
                  Recipe Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-sage-light">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Wellness Street, Healthy City, HC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-sage-light">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-sage-light">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@healcafe.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-sage-light mt-6">
              <strong>Hours:</strong><br />
              Mon-Fri: 7am - 8pm<br />
              Sat-Sun: 8am - 9pm
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-sage-light">
            © {new Date().getFullYear()} Heal Café. All rights reserved. Made with love and wellness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
