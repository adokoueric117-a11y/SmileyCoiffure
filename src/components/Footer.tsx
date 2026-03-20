import { FaFacebook, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
        
        {/* Logo ou Nom du salon */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-amber-600 tracking-tighter">
            L'INNOVANT BARBER SMILEY
          </h2>
          <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">Est. 2026</p>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="flex gap-8 items-center">
          {/* WhatsApp */}
          <a 
            href="https://wa.me" 
            target="_blank" 
            className="text-3xl hover:text-green-500 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* TikTok */}
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            className="text-3xl hover:text-pink-500 transition-colors duration-300"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          {/* Facebook */}
          <a 
            href="https://facebook.com" 
            target="_blank" 
            className="text-3xl hover:text-blue-600 transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          {/* Instagram (Bonus car c'est souvent utilisé pour les salons) */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            className="text-3xl hover:text-orange-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright simple */}
        <div className="border-t border-gray-800 w-full pt-6 text-center text-gray-500 text-xs">
          <p>© {currentYear} L'INNOVANT BARBER. ERIC SMILEY.</p>
        </div>
      </div>
    </footer>
  );
}

