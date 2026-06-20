import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Users, CheckCircle, ChevronDown, Star, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO = 'https://images.pexels.com/photos/1174996/pexels-photo-1174996.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80';
const MEMBER_IMG = 'https://images.pexels.com/photos/3001793/pexels-photo-3001793.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';

const plans = [
  {
    name: 'Full 7-Day',
    price: '£850',
    period: 'per year',
    highlight: true,
    badge: 'Most Popular',
    desc: 'Full access seven days a week',
    perks: [
      'Unlimited 7-day golf',
      'Competition entry included',
      'Handicap index maintained',
      'Full clubhouse privileges',
      'Guest vouchers (x4 per year)',
      'Locker room access',
      'Discounted pro shop prices',
      'Club newsletter',
    ],
  },
  {
    name: '5-Day Membership',
    price: '£650',
    period: 'per year',
    highlight: false,
    desc: 'Monday to Friday access',
    perks: [
      'Unlimited weekday golf (Mon–Fri)',
      'Competition entry included',
      'Handicap index maintained',
      'Full clubhouse privileges',
      'Guest vouchers (x2 per year)',
      'Locker room access',
      'Discounted pro shop prices',
      'Club newsletter',
    ],
  },
  {
    name: 'Country Member',
    price: '£350',
    period: 'per year',
    highlight: false,
    desc: 'For those who live 30+ miles away',
    perks: [
      '12 rounds per year',
      'Competition entry included',
      'Handicap index maintained',
      'Clubhouse privileges when visiting',
      'Discounted pro shop prices',
      'Club newsletter',
    ],
  },
  {
    name: 'Junior Membership',
    price: '£150',
    period: 'per year',
    highlight: false,
    desc: 'For golfers under 18 years of age',
    perks: [
      'Unlimited junior golf',
      'Junior competitions',
      'Handicap index maintained',
      'Clubhouse access',
      'Junior coaching events',
      'Club newsletter',
    ],
  },
];

const benefits = [
  { icon: Trophy, title: 'Competitions', desc: 'Enter weekly club competitions and team events year-round.' },
  { icon: Star, title: 'Handicap', desc: 'Official World Handicap System index maintained by the club.' },
  { icon: Clock, title: 'Priority Booking', desc: 'Members enjoy priority tee time booking up to 2 weeks in advance.' },
  { icon: Users, title: 'Community', desc: 'Join a friendly community of golfers with over 130 years of history.' },
];

const faqs = [
  { q: 'How do I apply for membership?', a: 'Complete the enquiry form below or contact our club secretary. Two existing member sponsors are required for full membership applications. A joining fee of £50 applies.' },
  { q: 'Can I pay by installments?', a: 'Yes. We offer payment by direct debit over 10 monthly installments for all annual membership categories. Please ask at the club for details.' },
  { q: 'Is there a joining fee?', a: 'A one-off joining fee of £50 applies to new Full 7-Day and 5-Day memberships. There is no joining fee for Country or Junior memberships.' },
  { q: 'What handicap can I start on?', a: 'New members without an existing handicap will be assessed by our PGA professionals before being allocated an initial handicap index.' },
  { q: 'Can my family play as guests?', a: 'Members may bring guests at reduced rates. Full 7-Day members receive 4 free guest rounds per year; 5-Day members receive 2.' },
];

export default function Membership() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-cream">
      <PageHero
        title="Membership"
        subtitle="Join the Swansea Bay Golf Club family"
        image={HERO}
        icon={<Users size={20} />}
        tall
      />

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-3">Join Us</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-3">
          Membership Categories
        </h2>
        <div className="section-divider mb-6" />
        <p className="text-gray-600 leading-relaxed text-lg">
          Choose the membership that suits your lifestyle. All members enjoy full use of our clubhouse
          facilities, access to competitions, and a warm welcome to one of South Wales' most historic golf clubs.
        </p>
      </section>

      {/* Plans */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-sm shadow-md overflow-hidden card-hover ${
                plan.highlight ? 'ring-2 ring-gold-500' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute top-3 right-3 bg-gold-gradient text-navy-800 text-[9px] font-cinzel font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                  {plan.badge}
                </div>
              )}
              <div className={`px-6 py-6 ${plan.highlight ? 'bg-[#5a1020]' : 'bg-navy-800'}`}>
                <h3 className="font-cinzel font-bold text-white tracking-wider text-sm">{plan.name}</h3>
                <p className="text-white/60 text-xs mt-1">{plan.desc}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display font-bold text-4xl text-gold-400">{plan.price}</span>
                  <span className="text-gold-400/60 text-sm mb-1">{plan.period}</span>
                </div>
              </div>
              <div className="flex-1 bg-white px-6 py-5">
                <ul className="space-y-2">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white px-6 pb-6">
                <Link to="/contact" className="block w-full text-center btn-crimson text-[11px] py-2.5">
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Member benefits */}
      <section className="py-16 bg-white border-y border-gray-100 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">Why Join?</p>
            <h2 className="font-display font-bold text-3xl text-navy-800 mb-2">Member Benefits</h2>
            <div className="section-divider" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 border border-gray-100 rounded-sm hover:border-gold-300 transition-colors card-hover">
                <div className="w-12 h-12 rounded-full bg-crimson-50 border border-crimson-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-crimson-800" />
                </div>
                <h4 className="font-cinzel font-semibold text-navy-800 tracking-wider text-sm mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + blurb */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img src={MEMBER_IMG} alt="Members on course" className="w-full h-72 object-cover shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">130 Years</p>
            <h3 className="font-display font-bold text-3xl text-navy-800 mb-3">A Club for Life</h3>
            <div className="section-divider-left mb-4" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Membership at Swansea Bay Golf Club is more than just playing golf — it's joining a community.
              Our members enjoy not only unlimited golf but a full social calendar of events, competitions
              and clubhouse occasions throughout the year.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              New members are always warmly welcomed. If you'd like to visit the club before committing,
              please call us to arrange a complimentary visitor round to experience everything we have to offer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-t border-gray-100 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">Questions</p>
            <h2 className="font-display font-bold text-3xl text-navy-800 mb-2">Frequently Asked</h2>
            <div className="section-divider" />
          </div>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-sm overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gold-50/50 transition-colors"
                >
                  <span className="font-cinzel font-semibold text-navy-800 text-sm tracking-wide pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-gold-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#5a1020] text-center px-4">
        <h3 className="font-cinzel font-bold text-2xl text-white tracking-wider mb-3">
          Ready to Become a Member?
        </h3>
        <p className="text-white/70 mb-6 max-w-lg mx-auto">
          Contact our club secretary today to begin your membership application.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-gold">Apply Now</Link>
          <a href="tel:+441792401989" className="btn-navy">Call 01792 401 989</a>
        </div>
      </section>
    </div>
  );
}
