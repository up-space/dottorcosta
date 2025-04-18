import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

// Utilizziamo gli stessi link della navbar per coerenza
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Servizi", href: "/#services" },
  { name: "Chi Siamo", href: "/#about" },
  { name: "Certificazioni", href: "/#certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contatti", href: "/#contact" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Termini di Servizio", href: "#" },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1B365C] to-[#2C3E50]">
        {/* Effetto griglia sovrapposto al gradiente */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-soft-light"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link 
                href="#hero" 
                className="flex items-center gap-4 hover:opacity-90 transition-all duration-300"
              >
                <Image
                  src="/logo.png"
                  alt="Logo Dottor Costa"
                  width={180}
                  height={60}
                  className="w-auto h-12"
                />
                <span className="text-2xl font-light text-white">
                  Dottor Costa
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Link Utili</h3>
              <ul className="space-y-4">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Legale</h3>
              <ul className="space-y-4">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Studio Medico Costa. Tutti i diritti riservati.
              </p>
              <div className="flex gap-6">
                {legalLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 