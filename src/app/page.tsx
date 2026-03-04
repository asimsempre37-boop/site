import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { HardHat, Trash2, LandPlot, Building2, Clock, CircleDollarSign, Map, Recycle, Phone, MessageSquare } from 'lucide-react';

const phoneNumber = "5531996410208";
const message = "Olá! Gostaria de solicitar um orçamento para aluguel de caçamba.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: <Trash2 className="h-10 w-10 text-primary" />,
    title: "Caçambas para Entulho",
    description: "Aluguel de caçambas de diversos tamanhos para descarte de entulho de forma prática e segura.",
  },
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: "Obras e Reformas",
    description: "A solução ideal para manter sua obra limpa e organizada, facilitando o gerenciamento dos resíduos.",
  },
  {
    icon: <LandPlot className="h-10 w-10 text-primary" />,
    title: "Limpeza de Terrenos",
    description: "Disponibilizamos caçambas para a remoção de galhos, terra e outros resíduos de limpezas de terrenos.",
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Empresas e Condomínios",
    description: "Planos e condições especiais para coletas recorrentes em empresas, indústrias e condomínios.",
  },
];

const differentials = [
  {
    icon: <Clock className="h-8 w-8 text-accent" />,
    title: "Entrega Rápida",
    description: "Agilidade na entrega e retirada da caçamba, respeitando os prazos combinados.",
  },
  {
    icon: <CircleDollarSign className="h-8 w-8 text-accent" />,
    title: "Preço Justo",
    description: "Orçamentos transparentes e competitivos, com o melhor custo-benefício da região.",
  },
  {
    icon: <Map className="h-8 w-8 text-accent" />,
    title: "Atendimento Amplo",
    description: "Cobrimos uma vasta área, levando nossas soluções de caçambas até você.",
  },
  {
    icon: <Recycle className="h-8 w-8 text-accent" />,
    title: "Descarte Ecológico",
    description: "Compromisso com o meio ambiente, realizando o descarte correto dos resíduos em locais autorizados.",
  },
];


export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Aluguel de Caçambas <span className="text-primary">Rápido e Seguro</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200 md:text-xl">
            A solução completa para sua obra, reforma ou limpeza. Atendimento imediato e os melhores preços com a Prime Caçamba.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento no WhatsApp
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Sobre a Prime Caçamba</h2>
            <p className="mt-4 text-muted-foreground">
              A Prime Caçamba nasceu com a missão de simplificar o gerenciamento de resíduos para clientes de todos os portes. Somos uma empresa comprometida com a pontualidade, oferecendo um serviço ágil e confiável que se adapta às necessidades da sua obra ou projeto.
            </p>
            <p className="mt-4 text-muted-foreground">
              Nosso compromisso vai além da entrega. Priorizamos a sustentabilidade, garantindo que todo o entulho e resíduo coletado seja descartado de forma ecologicamente correta, em aterros e centros de triagem licenciados. Confiança, agilidade e respeito ao meio ambiente são os pilares do nosso trabalho.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
               <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Nossos Serviços</h2>
            <p className="mt-2 max-w-xl mx-auto text-muted-foreground">
              Oferecemos a solução certa para cada tipo de necessidade.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="text-center transition-transform hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Nossos Diferenciais</h2>
            <p className="mt-2 max-w-xl mx-auto text-muted-foreground">
              Por que escolher a Prime Caçamba?
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((diff) => (
              <div key={diff.title} className="flex items-start gap-4">
                {diff.icon}
                <div>
                  <h3 className="font-bold">{diff.title}</h3>
                  <p className="text-sm text-muted-foreground">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Entre em Contato</h2>
              <p className="mt-4 text-muted-foreground">
                Tem alguma dúvida ou quer solicitar um orçamento? Fale conosco! Nossa equipe está pronta para atender você.
              </p>
              <div className="mt-8 space-y-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <span>(31) 99641-0208 (WhatsApp)</span>
                </a>
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                   </div>
                  <span>(31) 99641-0208</span>
                </a>
              </div>
            </div>
            <Card className="p-6 shadow-lg">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
