"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            <Image 
              src="/images/logo.png" 
              alt="Prime Caçamba" 
              width={600} 
              height={240} 
              className="h-32 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-muted-foreground">Aluguel de caçambas rápido, seguro e sustentável para sua obra ou limpeza.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm md:col-span-2 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold border-b pb-1 mb-1">Navegação</h4>
            <Link href="#sobre" className="text-muted-foreground hover:text-foreground">Sobre</Link>
            <Link href="#servicos" className="text-muted-foreground hover:text-foreground">Serviços</Link>
            <Link href="#diferenciais" className="text-muted-foreground hover:text-foreground">Diferenciais</Link>
            <Link href="#contato" className="text-muted-foreground hover:text-foreground">Contato</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold border-b pb-1 mb-1">Serviços</h4>
            <p className="text-muted-foreground">Entulho</p>
            <p className="text-muted-foreground">Obras e Reformas</p>
            <p className="text-muted-foreground">Limpeza de Terrenos</p>
            <p className="text-muted-foreground">Empresas e Condomínios</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold border-b pb-1 mb-1">Contato</h4>
            <p className="text-muted-foreground">WhatsApp: (11) 99999-9999</p>
            <p className="text-muted-foreground">Telefone: (11) 4444-4444</p>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex h-14 items-center justify-center px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {year || '2025'} Prime Caçamba. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
