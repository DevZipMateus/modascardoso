
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Target, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Moda de Qualidade e Estilo para Você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Há 3 anos no mercado, a Modas Cardoso traz as melhores tendências 
            da moda feminina com qualidade e preços acessíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Seu Estilo é Nossa Paixão
              </h3>
              <p className="text-muted-foreground mb-6">
                Desde 2020, ajudamos mulheres de todas as idades a encontrar seu estilo pessoal
                com peças exclusivas e de qualidade. Nossa abordagem combina tendências atuais
                com um atendimento personalizado, garantindo que cada cliente encontre
                exatamente o que procura.
              </p>
              <ul className="space-y-3">
                {[
                  'Produtos selecionados com curadoria especial',
                  'Variedade de estilos para todos os gostos',
                  'Entregas rápidas para todo o Brasil',
                  'Atendimento personalizado via WhatsApp'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Target className="h-10 w-10 text-primary" />}
              title="Missão"
              description="Oferecer produtos de qualidade que realcem a beleza feminina, proporcionando confiança e bem-estar para nossas clientes se sentirem especiais."
            />
            <AboutCard 
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Visão"
              description="Ser reconhecida como referência em moda feminina online, criando relacionamentos duradouros baseados em confiança e satisfação."
            />
            <AboutCard 
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Valores"
              description="Qualidade, autenticidade, compromisso com o cliente, inovação constante nos produtos e serviços oferecidos."
            />
            <AboutCard 
              icon={<Check className="h-10 w-10 text-primary" />}
              title="Diferenciais"
              description="Atendimento personalizado, produtos exclusivos, entregas rápidas e figurinhas exclusivas para status."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;
