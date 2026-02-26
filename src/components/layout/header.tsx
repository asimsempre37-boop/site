"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Truck } from 'lucide-react';
import { useState } from 'react';

const NavLink = ({ href, children, onLinkClick }: { href: string; children: React.ReactNode; onLinkClick?: () => void }) => (
  <Link 
    href={href} 
    onClick={onLinkClick} 
    className="text-foreground/80 transition-colors hover:text-foreground"
  >
    {children}
  </Link>
);

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setSheetOpen(false);
  };
  
  const phoneNumber = "5511999999999"; // Placeholder number
  const message = "Olá! Gostaria de solicitar um orçamento para aluguel de caçamba.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const navLinks = (
    <>
      <NavLink href="#sobre" onLinkClick={handleLinkClick}>Sobre</NavLink>
      <NavLink href="#servicos" onLinkClick={handleLinkClick}>Serviços</NavLink>
      <NavLink href="#diferenciais" onLinkClick={handleLinkClick}>Diferenciais</NavLink>
      <NavLink href="#contato" onLinkClick={handleLinkClick}>Contato</NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
          <Truck className="h-6 w-6 text-primary" />
          <span>Prime Caçamba</span>
        </Link>
        
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:flex">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar Orçamento</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold" onClick={handleLinkClick}>
                  <Truck className="h-6 w-6 text-primary" />
                  <span>Prime Caçamba</span>
                </Link>
                <nav className="flex flex-col items-start gap-4 text-lg font-medium">
                  {navLinks}
                </nav>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar Orçamento</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
