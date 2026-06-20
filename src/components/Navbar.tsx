import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Green Fees', path: '/green-fees' },
  { label: 'Membership', path: '/membership' },
  { label: 'Clubhouse', path: '/clubhouse' },
  { label: 'Pro Shop', path: '/pro-shop' },
  { label: 'Groups & Societies', path: '/groups-societies' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-[#5a1020] shadow-lg shadow-black/30'
        }`}
      >
        {/* Top bar */}
        <div className={`border-b transition-colors duration-300 ${transparent ? 'border-white/10' : 'border-[#7a1828]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
            {/* Logo + Club name */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Swansea Bay Golf Club Crest"
                className="h-10 w-10 object-contain drop-shadow-md"
              />
              <div className="leading-none">
                <div className="font-cinzel font-bold text-base tracking-widest text-gold-400 group-hover:text-gold-300 transition-colors">
                  SWANSEA BAY GOLF CLUB
                </div>
                <div className="font-cinzel text-[9px] tracking-[0.25em] text-gold-500/80 mt-0.5">
                  EST. 1895
                </div>
              </div>
            </Link>

            {/* Phone */}
            <a
              href="tel:+441792401989"
              className="hidden lg:flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm font-cinzel tracking-wider"
            >
              <Phone size={14} />
              01792 401 989
            </a>
          </div>
        </div>

        {/* Nav bar */}
        <div className={`transition-colors duration-300 ${transparent ? 'bg-black/20 backdrop-blur-sm' : 'bg-[#6a1020]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-11">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 text-[11px] font-cinzel tracking-[0.15em] uppercase ${
                      isActive
                        ? 'text-gold-400 after:scale-x-100'
                        : 'text-white/80 hover:text-gold-400'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Book tee time CTA */}
            <a
              href="#book"
              className="hidden md:inline-block btn-gold text-[10px] px-5 py-2"
            >
              Book Tee Time
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-1 ml-auto"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute top-0 right-0 h-full w-72 bg-[#5a1020] shadow-2xl transform transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-24">
            <div className="section-divider-left mb-6" />
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `block font-cinzel text-sm tracking-widest uppercase py-3 border-b border-white/10 transition-colors ${
                    isActive ? 'text-gold-400' : 'text-white/80 hover:text-gold-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-8">
              <a href="tel:+441792401989" className="flex items-center gap-2 text-gold-400 font-cinzel text-sm tracking-wider">
                <Phone size={14} />
                01792 401 989
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
