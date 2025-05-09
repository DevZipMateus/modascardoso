import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingBag, CheckCircle, Instagram, Send, Images } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const CardosoInfluencer = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
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

  const handlePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Compra iniciada!",
        description: "Entre em contato via WhatsApp para finalizar sua compra.",
        duration: 5000,
      });
      // Open WhatsApp
      window.open('https://wa.me/5511911817210?text=Olá!%20Gostaria%20de%20comprar%20o%20pacote%20de%20figurinhas%20Cardoso%20Influencer.', '_blank');
    }, 1500);
  };

  const figurePackImages = [
    "/lovable-uploads/1057757006419262.jpeg",
    "/lovable-uploads/1238336154575681.jpeg",
    "/lovable-uploads/1573851123296440.jpeg",
    "/lovable-uploads/1594652034536857.jpeg",
    "/lovable-uploads/1783902555863608.jpeg",
    "/lovable-uploads/1860981314714955.jpeg", 
    "/lovable-uploads/553656341119775.jpeg",
    "/lovable-uploads/693703783064581.jpeg"
  ];

  return (
    <div className="overflow-x-hidden bg-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 z-0"></div>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-primary">Cardoso</span> Influencer
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-slide-up">
              Tenha acesso exclusivo a mais de <span className="font-bold text-primary">15.000 figurinhas</span> para 
              usar nos seus status e impressionar seus seguidores!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 animate-slide-up">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black font-bold shadow-xl"
                onClick={handlePurchase}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">Carregando...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Comprar Agora - R$ 9,99
                  </span>
                )}
              </Button>
            </div>
          </div>
        </section>
        
        {/* Image Gallery Section */}
        <section className="section-padding py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
                Exemplos de Figurinhas
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto animate-on-scroll mb-8">
                Confira alguns exemplos das mais de 15.000 figurinhas disponíveis no nosso pacote exclusivo
              </p>
            </div>

            {/* Desktop Gallery Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-on-scroll">
              {figurePackImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-primary/20 aspect-square">
                  <img 
                    src={image} 
                    alt={`Exemplo de figurinha ${index + 1}`} 
                    className="w-full h-full object-contain bg-black/80" 
                  />
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden animate-on-scroll">
              <Carousel className="w-full">
                <CarouselContent>
                  {figurePackImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg border border-primary/20 aspect-square">
                          <img 
                            src={image} 
                            alt={`Exemplo de figurinha ${index + 1}`} 
                            className="w-full h-full object-contain bg-black/80" 
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section-padding bg-black">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
                Como Funciona?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FeatureCard 
                step="1"
                title="Compre o Pacote"
                description="Clique no botão de compra e pague apenas R$ 9,99 pelo acesso completo."
                icon={<ShoppingBag className="h-10 w-10 text-primary" />}
              />
              
              <FeatureCard 
                step="2"
                title="Envie o Comprovante"
                description="Entre em contato via WhatsApp e envie o comprovante de pagamento."
                icon={<Send className="h-10 w-10 text-primary" />}
              />
              
              <FeatureCard 
                step="3"
                title="Acesse o Grupo"
                description="Receba o link de acesso ao grupo do Telegram com mais de 15 mil figurinhas."
                icon={<CheckCircle className="h-10 w-10 text-primary" />}
              />
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="section-padding bg-black/90">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
                Promoção Especial
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto animate-on-scroll">
                Por tempo limitado, obtenha acesso ao maior pacote de figurinhas por um preço imbatível!
              </p>
            </div>
            
            <Card className="max-w-md mx-auto border border-primary/20 bg-black/50 backdrop-blur-sm animate-on-scroll">
              <CardContent className="p-6 md:p-8">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Instagram className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">Pacote Completo</h3>
                  <p className="text-white/70 mb-4">Acesso a mais de 15.000 figurinhas</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-white/50 line-through text-lg">R$ 29,99</span>
                      <span className="text-primary text-4xl font-bold">R$ 9,99</span>
                    </div>
                    <p className="text-sm text-white/50 mt-1">Pagamento único</p>
                  </div>
                  
                  <ul className="text-left space-y-3 mb-8">
                    <FeatureItem text="Acesso ao grupo do Telegram" />
                    <FeatureItem text="Mais de 15.000 figurinhas" />
                    <FeatureItem text="Vários tópicos diferentes" />
                    <FeatureItem text="Use nos status do WhatsApp" />
                    <FeatureItem text="Suporte via WhatsApp" />
                  </ul>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold"
                    size="lg"
                    onClick={handlePurchase}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processando..." : "Comprar Agora"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section-padding bg-black">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
                Perguntas Frequentes
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <FaqItem 
                question="Como faço para acessar as figurinhas após a compra?"
                answer="Após realizar o pagamento, envie o comprovante via WhatsApp. Nossa equipe verificará e enviará o link de acesso ao grupo do Telegram onde estão todas as figurinhas."
              />
              
              <FaqItem 
                question="Posso usar as figurinhas em qualquer dispositivo?"
                answer="Sim, as figurinhas ficam salvas no seu celular e você pode usá-las em qualquer aplicativo que suporte stickers, como WhatsApp, Telegram e Instagram."
              />
              
              <FaqItem 
                question="Quanto tempo tenho de acesso ao grupo?"
                answer="O acesso ao grupo é permanente. Uma vez que você tenha sido adicionado, poderá baixar e usar as figurinhas quando quiser."
              />
              
              <FaqItem 
                question="Vocês adicionam novas figurinhas regularmente?"
                answer="Sim! Nosso catálogo é constantemente atualizado com novas figurinhas de diversos tópicos e tendências."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-black to-black/90">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Pronto para transformar seus <span className="text-primary">status</span>?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 animate-on-scroll">
              Garanta seu acesso agora mesmo ao maior pacote de figurinhas exclusivas por apenas R$ 9,99.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-bold shadow-xl animate-on-scroll"
              onClick={handlePurchase}
              disabled={isLoading}
            >
              {isLoading ? "Processando..." : "Quero Meu Pacote de Figurinhas"}
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const FeatureCard = ({ step, title, description, icon }) => (
  <div className="bg-black/50 border border-primary/20 rounded-lg p-6 text-center animate-on-scroll service-card">
    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <div className="absolute -top-3 -left-3 bg-primary text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
      {step}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const FeatureItem = ({ text }) => (
  <li className="flex items-center gap-3">
    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
    <span className="text-white/80">{text}</span>
  </li>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-primary/20 rounded-lg overflow-hidden animate-on-scroll">
      <button 
        className="w-full text-left p-5 flex justify-between items-center bg-black/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="p-5 bg-black/30 border-t border-primary/20">
          <p className="text-white/70">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default CardosoInfluencer;
