
import { Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-6">Nestful Delights</h3>
            <p className="text-white/70 mb-6">
              Providing the finest quality edible bird's nest products, sourced sustainably and processed with care to maintain their natural benefits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#products" className="text-white/70 hover:text-white transition-colors">Products</a></li>
              <li><a href="#benefits" className="text-white/70 hover:text-white transition-colors">Health Benefits</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Shipping Information</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Return Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gold-400" />
                <span className="text-white/70">trangtraisauhoang@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for updates, promotions, and health tips.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <button 
                type="submit" 
                className="w-full bg-gold-500 text-foreground font-medium py-2 rounded hover:bg-gold-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Nestful Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
