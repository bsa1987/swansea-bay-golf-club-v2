import { Link } from 'react-router-dom';
import { Flag, Users, ShoppingBag, Utensils, Trophy, ChevronRight, Star, Calendar } from 'lucide-react';

const HERO_IMG = '/hero-golf.png';
const COURSE_IMG = 'https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';
const CLUBHOUSE_IMG = '/images/clubhouse.jpg';
const MEMBERSHIP_IMG = 'https://images.pexels.com/photos/1174996/pexels-photo-1174996.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';
const PROSHOP_IMG = 'https://images.pexels.com/photos/2828723/pexels-photo-2828723.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';
const SOCIETY_IMG = '/images/groupsociety.jpg';

const features = [
  { icon: Flag, label: '18 Holes', desc: 'Championship Links' },
  { icon: Star, label: 'Est. 1895', desc: '130 Years of Excellence' },
  { icon: Users, label: 'Members Club', desc: 'Welcoming All Golfers' },
  { icon: Calendar, label: 'Societies', desc: 'Group Packages Available' },
];

const sections = [
  {
    title: 'Green Fees',
    subtitle: 'Play our beautiful 18-hole course',
    desc: 'Enjoy outstanding value green fees on a championship course with stunning views over Swansea Bay.',
    path: '/green-fees',
    img: COURSE_IMG,
    cta: 'View Green Fees',
  },
  {
    title: 'Membership',
    subtitle: 'Become part of the club',
    desc: 'Unlock unlimited golf, exclusive member benefits and a warm welcome to a club with over 130 years of tradition.',
    path: '/membership',
    img: MEMBERSHIP_IMG,
    cta: 'Explore Membership',
  },
  {
    title: 'Clubhouse',
    subtitle: 'Relax, dine and celebrate',
    desc: 'Our fully licensed clubhouse offers freshly prepared food, a well-stocked bar, Sky Sports and private room hire.',
    path: '/clubhouse',
    img: CLUBHOUSE_IMG,
    cta: 'Visit Clubhouse',
  },
  {
    title: 'Pro Shop',
    subtitle: 'Equipment, apparel & lessons',
    desc: 'Browse our fully stocked pro shop for the latest golf equipment, clothing and accessories — plus expert tuition from our PGA professionals.',
    path: '/pro-shop',
    img: PROSHOP_IMG,
    cta: 'Visit Pro Shop',
  },
  {
    title: 'Groups & Societies',
    subtitle: 'Memorable golf days for groups',
    desc: "Whether it's a corporate golf day, charity event or a society outing, our team will craft an unforgettable experience.",
    path: '/groups-societies',
    img: SOCIETY_IMG,
    cta: 'Plan Your Day',
  },
];

export default function Home() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/30" />

        <div className="relative z-10 px-4">
          {/* Ornamental rule */}
<div className="flex items-center justify-center gap-4 mb-6">
  <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold-400" />
  <div className="w-2 h-2 bg-gold-400 rotate-45" />
  <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold-400" />
</div>

<div className="flex items-center justify-center gap-6 lg:gap-12 mb-2">
  <img
    src="/logo.png"
    alt="Swansea Bay Golf Club Crest"
    className="h-20 w-20 lg:h-32 lg:w-32 object-contain drop-shadow-2xl"
  />

  <h1
    className="font-cinzel font-black uppercase leading-none drop-shadow-2xl"
    style={{
      fontSize: 'clamp(2.5rem, 8vw, 6rem)',
      letterSpacing: '0.08em',
      background:
        'linear-gradient(180deg, #fff 0%, #e8d08a 30%, #f5e8b8 55%, #c9a84c 80%, #a07830 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
    }}
  >
    Swansea Bay
    <br />
    Golf Club
  </h1>

  <img
    src="/logo.png"
    alt="Swansea Bay Golf Club Crest"
    className="h-20 w-20 lg:h-32 lg:w-32 object-contain drop-shadow-2xl"
  />
</div>

          <div className="flex items-center justify-center gap-4 mt-6 mb-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400" />
            <Trophy size={14} className="text-gold-400" />
            <div className="h-px w-16 bg-gold-400" />
            <Trophy size={14} className="text-gold-400" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          <p className="font-display italic text-xl sm:text-2xl text-white/90 tracking-wider mb-10 drop-shadow-lg">
            A Tradition of Golfing Excellence
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book" className="btn-gold">Book a Tee Time</a>
            <Link to="/membership" className="btn-navy">Become a Member</Link>
            <Link to="/green-fees" className="btn-crimson">View Green Fees</Link>
          </div>

          <p className="mt-8 font-cinzel text-xs tracking-[0.3em] text-gold-400/80 uppercase">
            Est. 1895 &mdash; Jersey Marine, Swansea
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-gold-400" />
          <div className="w-1.5 h-1.5 bg-gold-400 rotate-45" />
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#5a1020] border-y border-gold-700/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-700/20">
          {features.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-[#5a1020] flex flex-col items-center py-5 px-4 text-center">
              <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center mb-2">
                <Icon size={18} className="text-gold-400" />
              </div>
              <div className="font-cinzel font-bold text-gold-400 text-sm tracking-wider">{label}</div>
              <div className="text-white/60 text-xs mt-0.5">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome section */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-3">Welcome</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-3">
          Swansea Bay Golf Club
        </h2>
        <div className="section-divider mb-6" />
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Nestled on the stunning Swansea Bay coastline, our club has been delivering world-class golf
          experiences since 1895. Our championship 18-hole links course offers a challenge for golfers
          of all abilities, while our welcoming clubhouse provides the perfect place to relax after your round.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Whether you're a seasoned member, a visiting green fee player, a society group or a first-time
          visitor, you'll find a warm welcome at Swansea Bay Golf Club.
        </p>
      </section>

      {/* Feature cards */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-0">
          {sections.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[380px]`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 bg-white flex flex-col justify-center px-8 sm:px-12 py-12">
                <p className="font-cinzel text-gold-600 text-[10px] tracking-[0.3em] uppercase mb-2">{s.subtitle}</p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-3">{s.title}</h2>
                <div className="section-divider-left mb-4" />
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <div>
                  <Link
                    to={s.path}
                    className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase text-crimson-800 hover:text-gold-600 transition-colors border-b border-crimson-800/40 hover:border-gold-500 pb-0.5"
                  >
                    {s.cta}
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="relative py-20 text-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3001793/pexels-photo-3001793.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#5a1020]/85" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <div className="w-1.5 h-1.5 bg-gold-500 rotate-45" />
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-white tracking-wider mb-4">
            Ready to Play?
          </h2>
          <p className="text-white/75 text-lg mb-8 font-display italic">
            Book your tee time today and experience the finest golf on the Swansea Bay coastline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book" className="btn-gold">Book a Tee Time</a>
            <Link to="/contact" className="btn-navy">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
