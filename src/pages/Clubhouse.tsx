import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Home, Wine, Utensils, Tv, Coffee, Sofa, Users, ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO = 'https://images.pexels.com/photos/1409796/pexels-photo-1409796.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80';
const ROOM_IMG = 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';
const DINING_IMG = 'https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';
const BAR_IMG = 'https://images.pexels.com/photos/1267244/pexels-photo-1267244.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';

const facilities = [
  { icon: Wine, label: 'Fully Stocked Bar', desc: 'A wide selection of beers, wines, spirits and soft drinks. Our bar is open to all visitors daily.' },
  { icon: Utensils, label: 'Freshly Prepared Food', desc: 'Delicious meals made with locally sourced produce. Available lunchtimes and evenings 7 days a week.' },
  { icon: Tv, label: 'Sky Sports', desc: 'Watch all the live action on our big screens. Never miss the golf, football or any major sporting events.' },
  { icon: Coffee, label: 'Great Coffee', desc: 'Freshly ground coffee, speciality teas and hearty breakfasts available from opening time each morning.' },
  { icon: Sofa, label: 'Relaxing Spaces', desc: 'Conservatory, balcony terrace and comfortable lounge areas — perfect for a post-round drink or meal.' },
  { icon: Users, label: 'Private Room Hire', desc: 'Two private function rooms available for hire. Perfect for meetings, celebrations and private events.' },
];

const roomFeatures = [
  '40–50 guests per room',
  '80–100 guests when combined',
  '£60 per room hire',
  'Tea, coffee and biscuits included',
  'Water jugs and glasses provided',
  'Catering available on request',
  'Buffet options from £10 or £13 per person',
  'Members may hire rooms free of charge for birthdays, anniversaries and private functions',
];

const localRules = [
  {
    title: 'Out of Bounds',
    content: 'Out of Bounds is defined by white stakes and/or fences throughout the course. The boundary fence along the left of the 1st hole is out of bounds. All areas beyond the course boundary are out of bounds.',
  },
  {
    title: 'Penalty Areas',
    content: 'All water features and ditches on the course are defined as penalty areas (yellow stakes). Players may play from within the penalty area, take a one-stroke penalty and drop outside, or replay from the original position.',
  },
  {
    title: 'Fixed Sprinkler Heads',
    content: 'Fixed sprinkler heads are treated as immovable obstructions throughout the course. Relief without penalty may be taken within one club-length of the nearest point of complete relief, no nearer the hole.',
  },
  {
    title: 'Winter Rules (Preferred Lies)',
    content: 'When in operation, the ball may be lifted, cleaned and placed within 15cm (6 inches) of its original position on the fairway, no nearer the hole. This rule applies from 1 October to 31 March or when announced by the committee.',
  },
  {
    title: 'Immovable Obstructions',
    content: 'All artificial surfaces, paths, roads, and fixed man-made objects are immovable obstructions. Players are entitled to free relief from immovable obstructions when the obstruction interferes with the stance or the area of intended swing.',
  },
  {
    title: 'Roads and Paths',
    content: 'All tarmac and paved paths on the course are immovable obstructions and free relief applies. Ground under repair stakes (blue stakes) indicate areas where free relief must be taken.',
  },
];

export default function Clubhouse() {
  const [openRule, setOpenRule] = useState<number | null>(null);

  return (
    <div className="bg-cream">
      <PageHero
        title="Clubhouse"
        subtitle="A warm welcome awaits members, visitors and guests"
        image={HERO}
        icon={<Home size={20} />}
        tall
      />

      {/* Facilities strip */}
      <section className="bg-white border-b border-gray-100 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex gap-4 p-5 border border-gray-100 rounded-sm hover:border-gold-300 card-hover bg-white">
                <div className="w-10 h-10 rounded-full bg-crimson-50 border border-crimson-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-crimson-800" />
                </div>
                <div>
                  <h4 className="font-cinzel font-semibold text-navy-800 text-sm tracking-wide mb-1">{label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining & Bar */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-0 overflow-hidden shadow-lg">
            <div className="lg:w-1/2">
              <img src={DINING_IMG} alt="Clubhouse Dining" className="w-full h-64 lg:h-full object-cover" />
            </div>
            <div className="lg:w-1/2 bg-white flex flex-col justify-center px-8 sm:px-12 py-12">
              <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">Food &amp; Drink</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-3">Bar &amp; Dining</h2>
              <div className="section-divider-left mb-5" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Our clubhouse kitchen serves freshly prepared food using locally sourced ingredients. Whether
                you're looking for a hearty breakfast before your round, a light lunch or a full evening meal,
                our kitchen team is on hand to impress.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The bar stocks a wide range of ales, wines, spirits and soft drinks. Our conservatory and
                balcony terrace offer stunning views over the course — the perfect place to raise a glass after 18 holes.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Bar Open', value: '11:00 – 23:00' },
                  { label: 'Food Served', value: '12:00 – 21:00' },
                  { label: 'Breakfast', value: '8:00 – 11:00' },
                  { label: 'Sky Sports', value: 'All Day' },
                ].map((h) => (
                  <div key={h.label} className="bg-cream border border-gold-100 rounded-sm p-3">
                    <div className="font-cinzel text-[10px] tracking-widest text-gold-600 uppercase">{h.label}</div>
                    <div className="font-semibold text-navy-800 text-sm mt-0.5">{h.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Hire */}
      <section className="py-16 bg-white border-y border-gray-100 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">Private Events</p>
            <h2 className="font-display font-bold text-3xl text-navy-800 mb-2">Room Hire</h2>
            <div className="section-divider" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer two private rooms available for hire, perfect for meetings, celebrations and private events.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Features list */}
            <div className="lg:w-1/2 space-y-3">
              {roomFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{f}</span>
                </div>
              ))}
              <div className="mt-6 p-4 bg-gold-50 border border-gold-200 rounded-sm">
                <p className="text-sm text-navy-800 font-cinzel tracking-wide">
                  <span className="text-gold-700 font-bold">Members:</span> Free room hire for personal celebrations
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="lg:w-1/2">
              <img src={ROOM_IMG} alt="Private function room" className="w-full h-72 object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Local Rules */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">On the Course</p>
            <h2 className="font-display font-bold text-3xl text-navy-800 mb-2">Local Rules</h2>
            <div className="section-divider" />
          </div>
          <div className="rounded-sm overflow-hidden border border-gray-200">
            {localRules.map((rule, i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => setOpenRule(openRule === i ? null : i)}
                  className="w-full text-left flex items-center justify-between px-6 py-4 bg-[#5a1020] hover:bg-[#6a1828] transition-colors"
                >
                  <span className="font-cinzel font-semibold text-gold-400 text-sm tracking-wider">{rule.title}</span>
                  <ChevronDown
                    size={16}
                    className={`text-gold-400 flex-shrink-0 transition-transform duration-300 ${openRule === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openRule === i ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-6 py-4 text-gray-600 text-sm leading-relaxed bg-white">{rule.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-14 bg-navy-800 text-center px-4">
        <h3 className="font-cinzel font-bold text-2xl text-white tracking-wider mb-3">Clubhouse Enquiries</h3>
        <p className="text-white/70 mb-6 max-w-lg mx-auto">
          Interested in room hire, private functions or clubhouse facilities? Get in touch with our team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-gold">Make an Enquiry</Link>
          <a href="tel:+441792401989" className="btn-crimson">Call 01792 401 989</a>
        </div>
      </section>
    </div>
  );
}

