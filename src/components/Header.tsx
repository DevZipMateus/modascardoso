import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize the scroll state on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-black/95 backdrop-blur-md shadow-nav' 
          : 'py-5 bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-20 flex items-center">
            <img 
              src="/lovable-uploads/48f3b6a0-e0d5-443f-b3c6-3b1ff9dec03a.png" 
              alt="Modas Cardoso" 
              className="h-10 md:h-12" 
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks />
            <a href="https://wa.me/c/5511911817210" target="_blank" rel="noopener noreferrer">
              <Button className="quote-btn ml-4 text-black bg-primary hover:bg-primary/90 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                <BookOpen size={18} />
                Catálogo
              </Button>
            </a>
          </nav>

          {/* Mobile Menu using Sheet from shadcn/ui */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-white">
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-16 pb-8 px-6 bg-black text-white">
                <nav className="flex flex-col items-center space-y-4 text-lg">
                  <NavLinks mobile />
                  <SheetClose asChild>
                    <a href="https://wa.me/c/5511911817210" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button 
                        className="quote-btn mt-4 w-full text-black bg-primary hover:bg-primary/90 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 py-3 text-base"
                      >
                        <BookOpen size={18} />
                        Catálogo
                      </Button>
                    </a>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '#about' },
    { name: 'Produtos', href: '#services' },
    { name: 'Instagram', href: 'https://instagram.com/Modas.cardos0' },
    { name: 'Cardoso Influencer', href: '/cardoso-influencer' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => {
        const isExternal = link.href.startsWith('http');
        
        if (isExternal) {
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
                ${mobile 
                  ? 'text-xl text-white hover:text-primary mb-2 w-full text-center py-3' 
                  : 'text-white/80 hover:text-primary hover:bg-white/5'
                }`}
              onClick={onClick}
            >
              {link.name}
            </a>
          );
        } else {
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
                ${mobile 
                  ? 'text-xl text-white hover:text-primary mb-2 w-full text-center py-3' 
                  : 'text-white/80 hover:text-primary hover:bg-white/5'
                }`}
              onClick={onClick}
            >
              {link.name}
            </Link>
          );
        }
      })}
    </>
  );
};

export default Header;
