/**
 * Alternative Frame Designs for Collection Lineup
 * 
 * This file contains different frame design options to replace GoldCornerFrame.
 * Choose one and replace the GoldCornerFrame component, or use them selectively.
 */

interface FrameProps {
  children: React.ReactNode;
  className?: string;
}

// DESIGN 1: Ornate Gold Border Frame
// Features: Continuous golden border with decorative corners, black background
export function OrnateGoldFrame({ children, className = "" }: FrameProps) {
  return (
    <div className={`relative p-4 sm:p-6 bg-black rounded-lg ${className}`}>
      {/* Outer golden border */}
      <div className="absolute inset-0 rounded-lg" style={{
        background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5A0 25%, #D4AF37 50%, #B8941E 75%, #D4AF37 100%)',
        padding: '3px',
      }}>
        <div className="w-full h-full bg-black rounded-lg" />
      </div>
      
      {/* Decorative corner pieces - more elaborate */}
      <div className="absolute top-2 left-2 w-12 h-12 sm:w-16 sm:h-16" style={{ borderColor: '#D4AF37' }}>
        <div className="absolute top-0 left-0 w-full border-t-4 border-l-4 rounded-tl-2xl" style={{ borderColor: '#D4AF37', height: '60%', width: '60%' }} />
        <div className="absolute top-1 left-1 w-8 border-t-2 border-l-2 rounded-tl-xl opacity-60" style={{ borderColor: '#F4E5A0', height: '40%', width: '40%' }} />
      </div>
      <div className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16" style={{ borderColor: '#D4AF37' }}>
        <div className="absolute top-0 right-0 w-full border-t-4 border-r-4 rounded-tr-2xl" style={{ borderColor: '#D4AF37', height: '60%', width: '60%' }} />
        <div className="absolute top-1 right-1 w-8 border-t-2 border-r-2 rounded-tr-xl opacity-60" style={{ borderColor: '#F4E5A0', height: '40%', width: '40%' }} />
      </div>
      <div className="absolute bottom-2 left-2 w-12 h-12 sm:w-16 sm:h-16" style={{ borderColor: '#D4AF37' }}>
        <div className="absolute bottom-0 left-0 w-full border-b-4 border-l-4 rounded-bl-2xl" style={{ borderColor: '#D4AF37', height: '60%', width: '60%' }} />
        <div className="absolute bottom-1 left-1 w-8 border-b-2 border-l-2 rounded-bl-xl opacity-60" style={{ borderColor: '#F4E5A0', height: '40%', width: '40%' }} />
      </div>
      <div className="absolute bottom-2 right-2 w-12 h-12 sm:w-16 sm:h-16" style={{ borderColor: '#D4AF37' }}>
        <div className="absolute bottom-0 right-0 w-full border-b-4 border-r-4 rounded-br-2xl" style={{ borderColor: '#D4AF37', height: '60%', width: '60%' }} />
        <div className="absolute bottom-1 right-1 w-8 border-b-2 border-r-2 rounded-br-xl opacity-60" style={{ borderColor: '#F4E5A0', height: '40%', width: '40%' }} />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// DESIGN 2: Minimal Golden Shadow Frame
// Features: No background padding, just golden glow effect
export function MinimalGoldGlow({ children, className = "" }: FrameProps) {
  return (
    <div className={`relative ${className}`} style={{
      filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3)) drop-shadow(0 4px 30px rgba(212, 175, 55, 0.2))',
    }}>
      {/* Subtle golden border line */}
      <div className="absolute inset-0 rounded-lg border-2 pointer-events-none" style={{
        borderColor: '#D4AF37',
        opacity: 0.4,
      }} />
      {children}
    </div>
  );
}

// DESIGN 3: Art Deco Style Frame
// Features: Geometric patterns in corners, metallic gradient
export function ArtDecoFrame({ children, className = "" }: FrameProps) {
  return (
    <div className={`relative p-5 sm:p-7 rounded-lg ${className}`} style={{
      background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
    }}>
      {/* Top-left art deco corner */}
      <svg className="absolute top-3 left-3 w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 100 100" fill="none">
        <path d="M 10 50 L 50 10 L 50 50 Z" fill="#D4AF37" opacity="0.9" />
        <path d="M 10 70 L 30 50 L 50 50 L 50 70 Z" fill="#D4AF37" opacity="0.7" />
        <path d="M 10 90 L 10 70 L 50 70 L 50 90 Z" fill="#D4AF37" opacity="0.5" />
        <line x1="10" y1="10" x2="50" y2="50" stroke="#F4E5A0" strokeWidth="2" />
      </svg>

      {/* Top-right art deco corner */}
      <svg className="absolute top-3 right-3 w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 100 100" fill="none">
        <path d="M 90 50 L 50 10 L 50 50 Z" fill="#D4AF37" opacity="0.9" />
        <path d="M 90 70 L 70 50 L 50 50 L 50 70 Z" fill="#D4AF37" opacity="0.7" />
        <path d="M 90 90 L 90 70 L 50 70 L 50 90 Z" fill="#D4AF37" opacity="0.5" />
        <line x1="90" y1="10" x2="50" y2="50" stroke="#F4E5A0" strokeWidth="2" />
      </svg>

      {/* Bottom-left art deco corner */}
      <svg className="absolute bottom-3 left-3 w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 100 100" fill="none">
        <path d="M 10 50 L 50 90 L 50 50 Z" fill="#D4AF37" opacity="0.9" />
        <path d="M 10 30 L 30 50 L 50 50 L 50 30 Z" fill="#D4AF37" opacity="0.7" />
        <path d="M 10 10 L 10 30 L 50 30 L 50 10 Z" fill="#D4AF37" opacity="0.5" />
        <line x1="10" y1="90" x2="50" y2="50" stroke="#F4E5A0" strokeWidth="2" />
      </svg>

      {/* Bottom-right art deco corner */}
      <svg className="absolute bottom-3 right-3 w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 100 100" fill="none">
        <path d="M 90 50 L 50 90 L 50 50 Z" fill="#D4AF37" opacity="0.9" />
        <path d="M 90 30 L 70 50 L 50 50 L 50 30 Z" fill="#D4AF37" opacity="0.7" />
        <path d="M 90 10 L 90 30 L 50 30 L 50 10 Z" fill="#D4AF37" opacity="0.5" />
        <line x1="90" y1="90" x2="50" y2="50" stroke="#F4E5A0" strokeWidth="2" />
      </svg>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// DESIGN 4: Museum Gallery Frame
// Features: Wide border with subtle texture, classic museum style
export function MuseumFrame({ children, className = "" }: FrameProps) {
  return (
    <div className={`relative p-6 sm:p-8 rounded-sm ${className}`} style={{
      background: `
        linear-gradient(145deg, #2a2520 0%, #3d352b 50%, #2a2520 100%),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(212, 175, 55, 0.03) 2px, rgba(212, 175, 55, 0.03) 4px)
      `,
      boxShadow: `
        inset 0 0 0 1px rgba(212, 175, 55, 0.3),
        inset 0 0 0 8px #1a1612,
        inset 0 0 0 9px rgba(212, 175, 55, 0.5),
        0 10px 40px rgba(0, 0, 0, 0.5)
      `,
    }}>
      {/* Inner golden accent line */}
      <div className="absolute inset-4 border rounded-sm pointer-events-none" style={{
        borderColor: '#D4AF37',
        opacity: 0.2,
      }} />

      <div className="relative">
        {children}
      </div>
    </div>
  );
}

// DESIGN 5: Double Border Classic Frame
// Features: Two-tone border, elegant and simple
export function DoubleBorderFrame({ children, className = "" }: FrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer border - golden */}
      <div className="absolute inset-0 rounded-lg p-[2px]" style={{
        background: 'linear-gradient(135deg, #D4AF37, #F4E5A0, #D4AF37)',
      }}>
        {/* Middle section - black */}
        <div className="w-full h-full rounded-lg p-[6px] bg-black">
          {/* Inner border - golden */}
          <div className="w-full h-full rounded-lg border" style={{
            borderColor: '#D4AF37',
          }} />
        </div>
      </div>
      
      <div className="relative p-3">
        {children}
      </div>
    </div>
  );
}

// DESIGN 6: Floating Frame with Corner Jewels
// Features: Minimal frame with decorative corner dots
export function FloatingCornerFrame({ children, className = "" }: FrameProps) {
  return (
    <div className={`relative p-4 ${className}`}>
      {/* Corner decorative elements - like jewels/studs */}
      {[
        'top-0 left-0',
        'top-0 right-0',
        'bottom-0 left-0',
        'bottom-0 right-0'
      ].map((position, index) => (
        <div key={index} className={`absolute ${position} w-3 h-3 sm:w-4 sm:h-4`}>
          <div className="w-full h-full rounded-full" style={{
            background: 'radial-gradient(circle, #F4E5A0 0%, #D4AF37 50%, #B8941E 100%)',
            boxShadow: '0 2px 8px rgba(212, 175, 55, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
          }} />
        </div>
      ))}

      {/* Thin connecting lines between corners */}
      <div className="absolute top-0 left-2 right-2 h-[1px]" style={{
        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
        opacity: 0.3,
      }} />
      <div className="absolute bottom-0 left-2 right-2 h-[1px]" style={{
        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
        opacity: 0.3,
      }} />
      <div className="absolute left-0 top-2 bottom-2 w-[1px]" style={{
        background: 'linear-gradient(180deg, transparent, #D4AF37, transparent)',
        opacity: 0.3,
      }} />
      <div className="absolute right-0 top-2 bottom-2 w-[1px]" style={{
        background: 'linear-gradient(180deg, transparent, #D4AF37, transparent)',
        opacity: 0.3,
      }} />

      {children}
    </div>
  );
}
