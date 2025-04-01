
import * as React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nest-800 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-2xl mb-4">Nestful Delights</h3>
            <p className="text-white/80 mb-6">
              Premium edible bird's nest products, sourced sustainably and processed with care.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a></li>
              <li><a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <div className="flex items-start space-x-3 mb-4">
              <Mail className="h-5 w-5 mt-0.5 text-white/80" />
              <p className="text-white/80">trangtraisauhoang@gmail.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">Subscribe for updates on new products and offers.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-full">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-md bg-nest-700/50 text-white border border-nest-600 focus:outline-none focus:ring-2 focus:ring-gold-300 w-full"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-gold-500 text-nest-800 rounded-md hover:bg-gold-400 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-nest-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Nestful Delights. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
