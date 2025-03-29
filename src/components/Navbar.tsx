
import { useState, useEffect } from 'react';
import { Menu, ShoppingCart, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-semibold">Nestful Delights</h1>
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#products" className="nav-link">Products</a>
              <a href="#benefits" className="nav-link">Benefits</a>
              <a href="#about" className="nav-link">About Us</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          )}

          {/* Right Side - Search & Cart */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div className={`absolute top-20 left-0 right-0 bg-background shadow-md transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
            <nav className="flex flex-col py-3 px-4">
              <a href="#products" className="py-3 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
              <a href="#benefits" className="py-3 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Benefits</a>
              <a href="#about" className="py-3 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
              <a href="#contact" className="py-3" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
