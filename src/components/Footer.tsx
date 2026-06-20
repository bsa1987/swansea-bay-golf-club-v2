import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a0a10] text-white">
      {/* Gold rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Swansea Bay Golf Club" className="h-12 w-12 object-contain" />
          </div>
          <div className="font-cinzel font-bold text-gold-400 tracking-widest text-sm mb-1">
            SWANSEA BAY GOLF CLUB
          </div>
          <div className="font-cinzel text-[10px] tracking-[0.3em] text-gold-500/70 mb-4">
            EST. 1895
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            A tradition of golfing excellence on the beautiful Swansea Bay coastline.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500/60 hover:text-gold-400 hover:border-gold-400 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-cinzel text-gold-400 text-xs tracking-[0.2em] uppercase mb-5">Quick Links</h3>
          <div className="section-divider-left mb-5" />
          <ul className="space-y-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'Green Fees', path: '/green-fees' },
              { label: 'Membership', path: '/membership' },
              { label: 'Clubhouse', path: '/clubhouse' },
              { label: 'Pro Shop', path: '/pro-shop' },
              { label: 'Groups & Societies', path: '/groups-societies' },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-white/60 hover:text-gold-400 transition-colors text-sm font-cinzel tracking-wider"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Course info */}
        <div>
          <h3 className="font-cinzel text-gold-400 text-xs tracking-[0.2em] uppercase mb-5">The Course</h3>
          <div className="section-divider-left mb-5" />
          <ul className="space-y-2 text-white/60 text-sm">
            <li>18 Hole Championship Course</li>
            <li>Par 70 · 5,792 Yards</li>
            <li>SSS 68</li>
            <li className="pt-2 font-medium text-white/80">Opening Hours</li>
            <li>Dawn to Dusk Daily</li>
            <li>Bar: 11:00 – 23:00</li>
            <li>Food: 12:00 – 21:00</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-cinzel text-gold-400 text-xs tracking-[0.2em] uppercase mb-5">Contact Us</h3>
          <div className="section-divider-left mb-5" />
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
              <span>Jersey Marine, Neath, SA10 6JP</span>
            </li>
            <li className="flex gap-3">
              <Phone size={15} className="text-gold-500 flex-shrink-0" />
              <a href="tel:+441792401989" className="hover:text-gold-400 transition-colors">
                01792 401 989
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={15} className="text-gold-500 flex-shrink-0" />
              <a href="mailto:info@swanseabaygolfclub.co.uk" className="hover:text-gold-400 transition-colors break-all">
                info@swanseabaygolfclub.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs font-cinzel tracking-widest">
          <span>&copy; {new Date().getFullYear()} Swansea Bay Golf Club. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
