'use client'

import { useEffect, useRef } from "react"
import { Instagram, Mail, Linkedin } from "lucide-react"
import { siteData } from "@/lib/data"

export default function Footer() {
  const { designer, footer } = siteData
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Fade effects temporarily disabled
    return () => {}
  }, [])

  return (
    <footer 
      ref={footerRef}
      className="relative text-white"
      style={{
        backgroundColor: '#1f1f1f',
      }}
    >
      <div id="footer-content" className="container-custom py-12 relative z-10 transition-opacity duration-300" style={{ opacity: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4" style={{ color: '#D4AF37' }}>
              {designer.name}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: '#D4AF37' }}>
              {designer.tagline}
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4" style={{ color: '#D4AF37' }}>Connect</h4>
            <div className="font-sans space-y-3 text-sm" style={{ color: '#D4AF37' }}>
              <p>{designer.contact.email}</p>
              <p>{designer.contact.phone}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={footer.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                  aria-label="Instagram"
                  style={{ color: '#D4AF37' }}
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={footer.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                  aria-label="LinkedIn"
                  style={{ color: '#D4AF37' }}
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`mailto:${designer.contact.email}`}
                  className="hover:text-primary transition"
                  aria-label="Email"
                  style={{ color: '#D4AF37' }}
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="font-sans border-t pt-6 text-center text-sm" style={{ borderColor: '#D4AF37', color: '#D4AF37' }}>
          © {new Date().getFullYear()} {designer.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
