import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsappButton } from '@/components/layout/whatsapp-button';

export const metadata: Metadata = {
  title: 'Caçambas Brasil - Aluguel Simplificado',
  description: 'Aluguel de caçambas para entulho, obras, reformas e limpeza. Atendimento rápido e preço justo em toda a região. Solicite seu orçamento via WhatsApp.',
  keywords: ['aluguel de caçamba', 'caçamba de entulho', 'aluguel de caçamba perto de mim', 'caçambas brasil', 'reforma', 'obra', 'limpeza urbana']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
        <Toaster />
      </body>
    </html>
  );
}
