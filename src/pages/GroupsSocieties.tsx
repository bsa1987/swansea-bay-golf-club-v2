import PageHero from '../components/PageHero';
import { Users, Trophy, Calendar, CheckCircle, Star, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO = '/groupsociety.jpg';
const SOCIETY_IMG = 'https://images.pexels.com/photos/1174996/pexels-photo-1174996.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';
const CORPORATE_IMG = 'https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';

const packages = [
  // WINTER WEEKDAYS

  {
    name: 'Winter Weekday Golf Only',
    price: '£25 / £24 / £23',
    per: 'Up to 12 / 20 / 20+',
    min: '1 Oct 2025 - 31 Mar 2026',
    highlight: false,
    includes: [
      '18 Holes Golf',
      'Minimum 6 players',
      '£25 up to 12 players',
      '£24 up to 20 players',
      '£23 over 20 players',
    ],
  },

  {
    name: 'Winter Weekday Coffee & Golf',
    price: '£30 / £29 / £28',
    per: 'Up to 12 / 20 / 20+',
    min: 'Winter Package',
    highlight: true,
    includes: [
      'Coffee & Bacon Roll',
      '18 Holes Golf',
      'Minimum 6 players',
      'Organiser free over 20 players',
    ],
  },

  {
    name: 'Winter Weekday 1 Course Meal',
    price: '£37 / £36 / £35',
    per: 'Up to 12 / 20 / 20+',
    min: 'Winter Package',
    highlight: false,
    includes: [
      'Coffee & Bacon Roll',
      '18 Holes Golf',
      '1 Course Meal',
      'Deduct £3 without breakfast',
    ],
  },

  {
    name: 'Winter Weekday 2 Course Meal',
    price: '£41 / £40 / £39',
    per: 'Up to 12 / 20 / 20+',
    min: 'Winter Package',
    highlight: false,
    includes: [
      'Coffee & Bacon Roll',
      '18 Holes Golf',
      '2 Course Meal',
      'Deduct £3 without breakfast',
    ],
  },

  {
    name: 'Winter Extra 10 Holes',
    price: '£12',
    per: 'per person',
    min: 'Winter Package',
    highlight: false,
    includes: [
      'Additional 10 Holes',
      'Available with society booking',
    ],
  },

  // WINTER WEEKENDS

  {
    name: 'Winter Weekend Golf Only',
    price: '£40 / £39 / £38',
    per: 'Up to 12 / 20 / 20+',
    min: 'Weekends & Bank Holidays',
    highlight: false,
    includes: [
      '18 Holes Golf',
      'Minimum 6 players',
      'Weekend rate',
    ],
  },

  {
    name: 'Winter Weekend Coffee & Golf',
    price: '£45 / £44 / £43',
    per: 'Up to 12 / 20 / 20+',
    min: 'Weekends & Bank Holidays',
    highlight: true,
    badge: 'Popular',
    includes: [
      'Coffee & Bacon Roll',
      '18 Holes Golf',
      'Weekend package',
    ],
  },

  {
    name: 'Winter Weekend 1 Course Meal',
    price: '£52 / £51 / £50',
    per: 'Up to 12 / 20 / 20+',
    min: 'Weekends & Bank Holidays',
    highlight: false,
    includes: [
      'Breakfast',
      '18 Holes Golf',
      '1 Course Meal',
    ],
  },

  {
    name: 'Winter Weekend 2 Course Meal',
    price: '£56 / £55 / £54',
    per: 'Up to 12 / 20 / 20+',
    min: 'Weekends & Bank Holidays',
    highlight: false,
    includes: [
      'Breakfast',
      '18 Holes Golf',
      '2 Course Meal',
    ],
  },

  // SUMMER

  {
    name: 'Summer Golf Only',
    price: '£30 / £29 / £28',
    per: 'Up to 12 / 20 / 20+',
    min: '1 Apr 2026 - 30 Sept 2026',
    highlight: false,
    includes: [
      '18 Holes Golf',
      'Minimum 6 players',
    ],
  },

  {
    name: 'Summer Coffee & Golf',
    price: '£35 / £34 / £33',
    per: 'Up to 12 / 20 / 20+',
    min: 'Summer Package',
    highlight: true,
    badge: 'Best Value',
    includes: [
      'Coffee & Bacon Roll',
      '18 Holes Golf',
      'Organiser free over 20 players',
    ],
  },

  {
    name: 'Summer 1 Course Meal',
    price: '£42 / £41 / £40',
    per: 'Up to 12 / 20 / 20+',
    min: 'Summer Package',
    highlight: false,
    includes: [
      'Breakfast',
      '18 Holes Golf',
      '1 Course Meal',
    ],
  },

  {
    name: 'Summer 2 Course Meal',
    price: '£46 / £45 / £44',
    per: 'Up to 12 / 20 / 20+',
    min: 'Summer Package',
    highlight: false,
    includes: [
      'Breakfast',
      '18 Holes Golf',
      '2 Course Meal',
    ],
  },

  {
    name: 'Summer Extra 10 Holes',
    price: '£15',
    per: 'per person',
    min: 'Summer Package',
    highlight: false,
    includes: ['Additional 10 Holes'],
  },

  {
    name: 'Summer Extra 18 Holes',
    price: '£20',
    per: 'per person',
    min: 'Summer Package',
    highlight: false,
    includes: ['Additional 18 Holes'],
  },

  {
    name: 'Summer Twilight Golf',
    price: '£20',
    per: 'after 4pm',
    min: 'Summer Package',
    highlight: false,
    includes: ['Twilight Golf', 'After 4pm'],
  },

  // BUGGY HIRE

  {
    name: 'Buggy Hire - Visitors',
    price: '£30',
    per: 'per buggy',
    min: 'Equipment Hire',
    highlight: false,
    includes: ['Visitor Rate'],
  },

  {
    name: 'Buggy Hire - Members',
    price: '£15',
    per: 'per buggy',
    min: 'Equipment Hire',
    highlight: false,
    includes: ['Member Rate'],
  },

  {
    name: 'Single Member Buggy',
    price: '£12',
    per: 'per buggy',
    min: 'Equipment Hire',
    highlight: false,
    includes: ['Single Member Rate'],
  },

  {
    name: 'Trolley Hire',
    price: '£3',
    per: 'each',
    min: 'Equipment Hire',
    highlight: false,
    includes: ['Pull Trolley Hire'],
  },
];

const features = [
  { icon: Calendar, title: 'Flexible Dates', desc: 'Society days available 7 days a week, subject to availability. Weekday dates offer the best rates.' },
  { icon: Trophy, title: 'Competitions', desc: 'We organise competitions with prizes for all packages including nearest the pin and longest drive.' },
  { icon: Users, title: 'Group Sizes', desc: 'We cater for groups from 8 to 100+ players. Speak to our events team about bespoke requirements.' },
  { icon: Star, title: 'Bespoke Packages', desc: 'Want something tailored? Our events team will create a custom package to match your budget and vision.' },
  { icon: Gift, title: 'Prizes & Trophies', desc: "We can supply trophies and prizes or help you source your own. We're here to make your day perfect." },
  { icon: CheckCircle, title: 'Catering Options', desc: 'From simple refreshments to full banquets, our kitchen team will craft a menu for your occasion.' },
];

export default function GroupsSocieties() {
  return (
    <div className="bg-cream">
      <PageHero
        title="Groups & Societies"
        subtitle="Memorable golf days designed around you"
        image={HERO}
        icon={<Users size={20} />}
        tall
      />

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-3">Society & Corporate Golf</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-3">
          Golf Days Made Easy
        </h2>
        <div className="section-divider mb-6" />
        <p className="text-gray-600 leading-relaxed text-lg">
          Whether you're planning a charity golf day, an annual society outing, a corporate hospitality
          event or just a group of friends, our dedicated events team will handle every detail to ensure
          an unforgettable day on and off the course.
        </p>
      </section>

      {/* Packages */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-sm shadow-md overflow-hidden card-hover ${
                pkg.highlight ? 'ring-2 ring-gold-500' : ''
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-3 right-3 bg-gold-gradient text-navy-800 text-[9px] font-cinzel font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                  {pkg.badge}
                </div>
              )}
              <div className={`px-6 py-6 ${pkg.highlight ? 'bg-[#5a1020]' : 'bg-navy-800'}`}>
                <h3 className="font-cinzel font-bold text-white tracking-wider text-sm">{pkg.name}</h3>
                <p className="text-white/60 text-xs mt-1">{pkg.min}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display font-bold text-4xl text-gold-400">{pkg.price}</span>
                  <span className="text-gold-400/60 text-sm mb-1">{pkg.per}</span>
                </div>
              </div>
              <div className="flex-1 bg-white px-6 py-5">
                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white px-6 pb-6">
                <Link to="/contact" className="block w-full text-center btn-crimson text-[11px] py-2.5">
                  Enquire About This Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-16 bg-white border-y border-gray-100 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">Why Choose Us</p>
            <h2 className="font-display font-bold text-3xl text-navy-800 mb-2">Everything Included</h2>
            <div className="section-divider" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 border border-gray-100 rounded-sm hover:border-gold-300 card-hover">
                <div className="w-9 h-9 rounded-full bg-crimson-50 border border-crimson-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-crimson-800" />
                </div>
                <div>
                  <h4 className="font-cinzel font-semibold text-navy-800 text-xs tracking-wider mb-1">{title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images + blurb */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2 grid grid-cols-2 gap-3">
            <img src={SOCIETY_IMG} alt="Society golf" className="w-full h-44 object-cover shadow-md rounded-sm" />
            <img src={CORPORATE_IMG} alt="Corporate golf day" className="w-full h-44 object-cover shadow-md rounded-sm mt-8" />
          </div>
          <div className="lg:w-1/2">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">Bespoke Events</p>
            <h3 className="font-display font-bold text-3xl text-navy-800 mb-3">We Handle the Details</h3>
            <div className="section-divider-left mb-4" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Our events team has years of experience delivering outstanding society and corporate golf days.
              From the moment you enquire to the final prize presentation, we'll ensure every element of
              your day runs seamlessly.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We can accommodate groups from 8 to over 100 players and offer completely bespoke packages
              to suit your budget, preferences and occasion. Charity and fundraising days are warmly welcomed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-crimson"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#5a1020] text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold-500" />
          <Users size={14} className="text-gold-500" />
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h3 className="font-cinzel font-bold text-2xl text-white tracking-wider mb-3">Plan Your Golf Day</h3>
        <p className="text-white/70 mb-6 max-w-lg mx-auto">
          Contact our events team to discuss your requirements and receive a tailored quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-gold">Request a Quote</Link>
          <a href="tel:+441792401989" className="btn-navy">Call 01792 401 989</a>
        </div>
      </section>
    </div>
  );
}
