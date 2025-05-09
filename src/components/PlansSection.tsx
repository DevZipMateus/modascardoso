
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, ShoppingBag } from 'lucide-react';

const PlansSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [yearlySub, setYearlySub] = useState(false);
  
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
  
  const collections = [
    {
      name: "Coleção Casual",
      description: "Para o dia a dia",
      price: yearlySub ? 79 : 89,
      features: [
        { included: true, text: "Blusas estilosas" },
        { included: true, text: "Calças confortáveis" },
        { included: true, text: "Vestidos básicos" },
        { included: true, text: "Acessórios combinando" },
        { included: false, text: "Sapatos premium" },
        { included: false, text: "Bolsas exclusivas" },
        { included: false, text: "Peças de edição limitada" }
      ],
      popular: false,
      cta: "Ver Coleção"
    },
    {
      name: "Coleção Verão",
      description: "Tendências da estação",
      price: yearlySub ? 119 : 139,
      features: [
        { included: true, text: "Blusas estilosas" },
        { included: true, text: "Shorts e saias" },
        { included: true, text: "Vestidos estampados" },
        { included: true, text: "Acessórios de verão" },
        { included: true, text: "Sandálias da moda" },
        { included: true, text: "Bolsas de praia" },
        { included: false, text: "Óculos de sol exclusivos" }
      ],
      popular: true,
      cta: "Ver Coleção"
    },
    {
      name: "Coleção Premium",
      description: "Peças exclusivas",
      price: yearlySub ? 189 : 219,
      features: [
        { included: true, text: "Blusas premium" },
        { included: true, text: "Calças de alfaiataria" },
        { included: true, text: "Vestidos para eventos" },
        { included: true, text: "Acessórios luxuosos" },
        { included: true, text: "Sapatos de marca" },
        { included: true, text: "Bolsas exclusivas" },
        { included: true, text: "Peças de edição limitada" }
      ],
      popular: false,
      cta: "Ver Coleção"
    }
  ];
  
  return (
    <section id="plans" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossas Coleções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Descubra Nossas Linhas Exclusivas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-on-scroll">
            Peças selecionadas com cuidado para atender ao seu estilo pessoal,
            independente da ocasião ou temporada.
          </p>

          <div className="flex items-center justify-center space-x-4 animate-on-scroll">
            <span className={`text-sm font-medium ${!yearlySub ? 'text-foreground' : 'text-muted-foreground'}`}>Preço Normal</span>
            <button 
              className="relative w-14 h-7 rounded-full bg-primary/20 p-1 transition-colors" 
              onClick={() => setYearlySub(!yearlySub)}
            >
              <span 
                className={`absolute top-1 w-5 h-5 rounded-full bg-primary transition-transform duration-300 transform ${yearlySub ? 'translate-x-7' : 'translate-x-0'}`}
              ></span>
            </button>
            <div className="flex items-center">
              <span className={`text-sm font-medium ${yearlySub ? 'text-foreground' : 'text-muted-foreground'}`}>Promoção</span>
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">15% OFF</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {collections.map((collection, index) => (
            <PlanCard 
              key={index} 
              name={collection.name} 
              description={collection.description} 
              price={collection.price} 
              features={collection.features} 
              popular={collection.popular} 
              cta={collection.cta} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PlanCardProps {
  name: string;
  description: string;
  price: number;
  features: {
    included: boolean;
    text: string;
  }[];
  popular: boolean;
  cta: string;
  index: number;
}

const PlanCard = ({
  name,
  description,
  price,
  features,
  popular,
  cta,
  index
}: PlanCardProps) => (
  <Card className={`animate-on-scroll service-card relative overflow-hidden border ${popular ? 'shadow-lg scale-105 border-primary/20 z-10' : 'shadow-md z-0'} [animation-delay:${index * 150}ms]`}>
    {popular && (
      <div className="absolute top-0 right-0">
        <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0 shadow-sm">
          POPULAR
        </div>
      </div>
    )}
    
    <CardHeader className="pt-8 pb-4">
      <div className="text-center">
        <CardTitle className={`text-2xl font-bold ${popular ? 'text-primary' : ''}`}>{name}</CardTitle>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
    </CardHeader>
    
    <CardContent className="text-center">
      <div className="mb-6">
        <span className="text-4xl font-bold">R${price}</span>
        <span className="text-muted-foreground">,90</span>
      </div>
      
      <ul className="space-y-3 text-left mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? '' : 'text-muted-foreground'}>{feature.text}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    
    <CardFooter className="pt-0 pb-8">
      <Button className={`quote-btn w-full rounded-md shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-primary/10 hover:bg-primary/20 text-primary'}`}>
        <ShoppingBag size={18} className={popular ? 'text-white' : 'text-primary'} />
        {cta}
      </Button>
    </CardFooter>
  </Card>
);

export default PlansSection;
