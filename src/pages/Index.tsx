
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Trigger animations a bit earlier (80% of viewport height instead of 90%)
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      
      {/* Cardoso Influencer Promo Section */}
      <section className="py-16 bg-gradient-to-r from-black to-black/90 text-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
                  Novidade
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
                  Cardoso <span className="text-primary">Influencer</span>
                </h2>
                <p className="text-white/80 mb-6 animate-on-scroll">
                  Tenha acesso a mais de 15.000 figurinhas para usar nos seus status! 
                  Pacote completo por apenas <span className="text-primary font-bold">R$ 9,99</span>.
                </p>
                <div className="animate-on-scroll">
                  <Link to="/cardoso-influencer">
                    <Button className="bg-primary hover:bg-primary/90 text-black font-bold">
                      Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-on-scroll">
                <div className="bg-black/50 p-6 rounded-lg border border-primary/30">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <path d="M12 18v-6"/>
                        <path d="m9 15 3 3 3-3"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Pacote de Figurinhas</h3>
                    <p className="text-white/70 mb-2">Diversos temas para escolher</p>
                    
                    <div className="flex justify-center items-center my-4">
                      <span className="text-white/50 line-through mr-2">R$ 29,99</span>
                      <span className="text-primary text-3xl font-bold">R$ 9,99</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <FeatureListItem text="Mais de 15.000 figurinhas" />
                    <FeatureListItem text="Para WhatsApp, Telegram e Instagram" />
                    <FeatureListItem text="Acesso ao grupo exclusivo" />
                    <FeatureListItem text="Atualizações frequentes" />
                  </ul>
                  
                  <Link to="/cardoso-influencer" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold">
                      Comprar Agora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const FeatureListItem = ({ text }) => (
  <li className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span className="text-white/80">{text}</span>
  </li>
);

export default Index;
