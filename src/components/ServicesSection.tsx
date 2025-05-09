import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Palette, TrendingUp, Tag, Crown, MessageSquare, ShoppingBag, BookOpen, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  const products = [{
    icon: <Shirt className="h-12 w-12 text-primary" />,
    title: "Roupas Femininas",
    description: "Peças exclusivas e de qualidade com as melhores tendências da moda feminina para todos os gostos e ocasiões."
  }, {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: "Diversos Estilos",
    description: "Do casual ao elegante, encontre o estilo que combina com você e se destaque com nossas peças exclusivas."
  }, {
    icon: <TrendingUp className="h-12 w-12 text-primary" />,
    title: "Últimas Tendências",
    description: "Atualizamos nosso catálogo constantemente com as últimas tendências do mercado da moda feminina."
  }, {
    icon: <Tag className="h-12 w-12 text-primary" />,
    title: "Preços Acessíveis",
    description: "Moda de qualidade com preços que cabem no seu bolso, para você renovar seu guarda-roupa sem gastar muito."
  }, {
    icon: <Crown className="h-12 w-12 text-primary" />,
    title: "Figurinhas para Status",
    description: "Mais de 15.000 figurinhas exclusivas para personalizar seus status nas redes sociais por apenas R$ 9,99."
  }, {
    icon: <MessageSquare className="h-12 w-12 text-primary" />,
    title: "Atendimento Personalizado",
    description: "Atendimento exclusivo via WhatsApp para tirar dúvidas e ajudar na escolha das peças ideais para você."
  }];
  return <section id="services" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Moda Feminina Exclusiva
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Descubra nossa coleção completa de peças femininas, com variedade de estilos e 
            tendências para todos os gostos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => <ServiceCard key={index} icon={product.icon} title={product.title} description={product.description} index={index} />)}
        </div>

        {/* WhatsApp Catalog Highlight Section */}
        <div className="mt-16 bg-primary/5 rounded-xl p-8 border border-primary/20 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Catálogo Sempre Atualizado</h3>
              <p className="text-muted-foreground mb-4">
                Acesse nosso catálogo completo no WhatsApp para conferir todas as novidades e promoções em tempo real.
                Nosso catálogo é atualizado diariamente com as últimas peças e tendências!
              </p>
            </div>
            <div>
              <a 
                href="https://wa.me/c/5511911817210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-black font-bold shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 group"
                >
                  <BookOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Ver Catálogo Completo
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Mercado Livre Section */}
        <div className="mt-16 bg-[#FFE600]/10 rounded-xl p-8 border border-[#FFE600]/30 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Compre pelo Mercado Livre</h3>
              <p className="text-muted-foreground mb-4">
                Visite nossa loja oficial no Mercado Livre para uma experiência de compra segura e com diversas opções de pagamento.
                Frete rápido e produtos com garantia de qualidade!
              </p>
            </div>
            <div>
              <a 
                href="https://lista.mercadolivre.com.br/_CustId_2403813205?item_id=MLB5364306150&category_id=MLB108704&seller_id=2403813205&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-[#FFE600] hover:bg-[#FFE600]/90 text-black font-bold shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 group"
                >
                  <Package className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Ver Nossos Produtos
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <Link to="#shop">
            
          </Link>
        </div>
      </div>
    </section>;
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}
const ServiceCard = ({
  icon,
  title,
  description,
  index
}: ServiceCardProps) => <Card className={`animate-on-scroll service-card border border-border/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-5 p-4 bg-primary/5 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>;
export default ServicesSection;
