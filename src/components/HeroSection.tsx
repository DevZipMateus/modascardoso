
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Instagram, ShoppingBag, BookOpen, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full font-medium mb-6 animate-slide-up [animation-delay:300ms]">
            Moda Feminina Exclusiva
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            <span className="text-primary">Modas</span> Cardoso
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms]">
            Há 3 anos trazendo o que há de melhor em moda feminina para você. Compre pelo Instagram, WhatsApp ou Mercado Livre.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:900ms] mb-8">
            <Button 
              size="lg" 
              className="rounded-md shadow-lg bg-primary hover:bg-primary/90 text-black font-medium transition-all duration-300"
              asChild
            >
              <a href="https://instagram.com/Modas.cardos0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Instagram size={20} />
                Visite Nossa Loja
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/20 group rounded-md shadow-md transition-all duration-300 flex gap-2"
              asChild
            >
              <Link to="/cardoso-influencer" className="flex items-center gap-2">
                <ShoppingBag size={20} className="group-hover:animate-pulse" />
                <span>Cardoso Influencer</span>
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:1000ms] mb-16">
            <Button 
              size="lg" 
              className="rounded-md shadow-lg bg-primary hover:bg-primary/90 text-black font-medium transition-all duration-300"
              asChild
            >
              <a href="https://wa.me/c/5511911817210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <BookOpen size={20} />
                Ver Catálogo Completo
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#FFE600] text-[#FFE600] hover:bg-[#FFE600]/20 group rounded-md shadow-md transition-all duration-300 flex gap-2"
              asChild
            >
              <a 
                href="https://lista.mercadolivre.com.br/_CustId_2403813205?item_id=MLB5364306150&category_id=MLB108704&seller_id=2403813205&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Package size={20} className="group-hover:animate-pulse" />
                <span>Ver Nossos Produtos</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
