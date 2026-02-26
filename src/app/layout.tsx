import type { Metadata } from 'next';
import { PT_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsappButton } from '@/components/layout/whatsapp-button';

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prime Caçamba - Aluguel Simplificado',
  description: 'Aluguel de caçambas para entulho, obras, reformas e limpeza. Atendimento rápido e preço justo em toda a região. Solicite seu orçamento via WhatsApp.',
  keywords: ['aluguel de caçamba', 'caçamba de entulho', 'aluguel de caçamba perto de mim', 'prime caçamba', 'reforma', 'obra', 'limpeza urbana']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${ptSans.variable} ${spaceGrotesk.variable}`}>
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
