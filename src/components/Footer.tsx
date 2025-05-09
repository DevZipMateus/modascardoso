
import { Button } from '@/components/ui/button';
import { ChevronUp, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/48f3b6a0-e0d5-443f-b3c6-3b1ff9dec03a.png" 
                alt="Modas Cardoso" 
                className="h-12" 
              />
            </div>
            <p className="text-white/80 max-w-xs">
              Loja de roupas femininas online há 3 anos no mercado, trazendo as melhores tendências para você.
            </p>
            <div className="flex space-x-4 mt-6">
              <FooterSocialLink 
                href="https://instagram.com/Modas.cardos0" 
                aria-label="Instagram"
                icon={<Instagram className="h-5 w-5" />}
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="/">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#services">Produtos</FooterNavItem>
              <FooterNavItem href="/cardoso-influencer">Cardoso Influencer</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Produtos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#services">Roupas Femininas</FooterNavItem>
              <FooterNavItem href="#services">Tendências</FooterNavItem>
              <FooterNavItem href="#services">Novidades</FooterNavItem>
              <FooterNavItem href="/cardoso-influencer">Pacotes de Figurinhas</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                (11) 91181-7210
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                longokarolliny@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Rua Irmã Leonie Duquet, Jd Alto Alegre<br />São Paulo - SP
              </li>
            </ul>
            
            <div className="mt-6">
              <Link to="/cardoso-influencer" className="inline-flex items-center text-primary hover:text-primary/80">
                <Send className="h-5 w-5 mr-2" />
                Cardoso Influencer
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Modas Cardoso. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary text-black"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => {
  const isExternal = href.startsWith('http');
  
  if (isExternal) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-primary transition-colors duration-200"
        >
          {children}
        </a>
      </li>
    );
  }
  
  return (
    <li>
      <Link
        to={href}
        className="text-white/70 hover:text-primary transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
};

interface FooterSocialLinkProps {
  href: string;
  'aria-label': string;
  icon?: React.ReactNode;
}

const FooterSocialLink = (props: FooterSocialLinkProps) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/80 text-primary hover:text-black transition-colors duration-200"
  >
    {props.icon}
  </a>
);

export default Footer;
