import { Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';

export function FooterSection() {
  return (
    <footer id="contact" className="relative py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 md:mb-16">
          {/* Contact info */}
          <div>
            <h4 className="text-white mb-4">Get in touch</h4>
            <div className="space-y-3">
              <a href="tel:+380123456789" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +380 12 345 67 89
              </a>
              <a href="mailto:info@amystudio.com" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@amystudio.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            © 2024 by AmyStudio. All rights reserved.
          </p>
          <div className="flex gap-6 text-neutral-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">EN</a>
            <a href="#" className="hover:text-white transition-colors">RU</a>
            <a href="#" className="hover:text-white transition-colors">UA</a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[200px] h-[200px] bg-orange-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
    </footer>
  );
}
