import Link from 'next/link';

const WhatsAppSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path
      d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm7.5 20.3a2.3 2.3 0 0 1-1.6.8h-1a1.2 1.2 0 0 1-1.1-.6 4.5 4.5 0 0 1-2.1-1.8 7.3 7.3 0 0 1-2.9-3.9 1.9 1.9 0 0 1 .4-1.8l.1-.1c.3-.3.6-.5.9-.5s.5.1.7.4l.1.1.9 1.1c.2.2.3.5.2.7l-.4.7c-.2.2-.2.5.1.7.6.6 1.7 1.7 2.8 2.3.3.2.7.1.9-.1l.5-.6c.2-.2.5-.2.7 0l1.1.9c.2.2.4.5.4.7a1.8 1.8 0 0 1-.3 1.2Z"
      fill="white"
    />
  </svg>
);

export function WhatsappButton() {
  const phoneNumber = "5511999999999"; // Placeholder number
  const message = "Olá! Gostaria de solicitar um orçamento para aluguel de caçamba.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppSvg className="h-8 w-8" />
    </Link>
  );
}
