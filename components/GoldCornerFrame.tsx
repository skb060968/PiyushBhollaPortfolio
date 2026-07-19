interface GoldCornerFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function GoldCornerFrame({ children, className = "" }: GoldCornerFrameProps) {
  return (
    <div className={`relative p-3 sm:p-4 bg-gradient-to-br from-stone-100 via-white to-stone-100 rounded-2xl sm:rounded-3xl ${className}`}>
      {/* Decorative corner accents */}
      <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 rounded-tl-xl sm:rounded-tl-2xl" style={{ borderColor: '#D4AF37' }}></div>
      <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 rounded-tr-xl sm:rounded-tr-2xl" style={{ borderColor: '#D4AF37' }}></div>
      <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 rounded-bl-xl sm:rounded-bl-2xl" style={{ borderColor: '#D4AF37' }}></div>
      <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 rounded-br-xl sm:rounded-br-2xl" style={{ borderColor: '#D4AF37' }}></div>

      {children}
    </div>
  );
}
