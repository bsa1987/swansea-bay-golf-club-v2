import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Home, Wine, Utensils, Tv, Coffee, Sofa, Users, ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO = '/clubhouse.jpg';
const ROOM_IMG = '/groupsociety.jpg';
const DINING_IMG = '/bar.jpg';

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
    title: '1. Out of Bounds',
    content: 'Out of bounds is defined by white stakes and boundary fences. A ball beyond boundary fences, white marker posts or designated course boundaries is out of bounds. Rule 18.2b applies with stroke-and-distance relief.',
  },
  {
    title: '2. Penalty Areas',
    content: 'The inlet on the left of the 9th fairway and those across the 3rd and 16th fairways and in front of the 18th tee are yellow penalty areas. All other ditches are red penalty areas. Rule 17 applies. Provisional balls may be played when the location of the original ball in a penalty area is uncertain.',
  },
  {
    title: '3. Fixed Sprinkler Heads',
    content: 'Relief may be taken under Rule 16.1. Additional relief is available when sprinkler heads are within two club lengths of both the putting green and the ball and interfere with the line of play.',
  },
  {
    title: '4. Winter Rules (Preferred Lies)',
    content: 'From 1 October to 31 March, a ball on fairway-height grass or shorter may be lifted, cleaned and placed within 6 inches of its original position, no nearer the hole.',
  },
  {
    title: '5. Immovable Obstructions',
    content: 'Paths, tee signs, yardage markers, benches, ball washers, marker posts, bells and bins are immovable obstructions. Free relief is available under Rule 16.1.',
  },
  {
    title: '6. Material Piled for Removal',
    content: 'Material clearly piled for removal is Ground Under Repair. Relief is available under Rule 16.1b. Material not piled for removal is a loose impediment under Rule 15.1a.',
  },
  {
    title: '7. Aeration Holes',
    content: 'Relief is available when a ball lies in or touches an aeration hole in the general area or on the putting green. Penalty for breach: Match Play – loss of hole; Stroke Play – two strokes.',
  },
  {
    title: '8. Seams of Cut Turf',
    content: 'Relief may be taken when a ball lies in or touches a seam of cut turf or the seam interferes with the intended swing. Rule 16.1 applies.',
  },
  {
    title: '9. Cracks in Ground',
    content: 'Cracks in fairway-height areas or shorter are Ground Under Repair. Free relief is available under Rule 16.1b.',
  },
  {
    title: '10. Roads and Paths',
    content: 'All roads and paths, even if not artificially surfaced, are treated as immovable obstructions and free relief is available under Rule 16.1.',
  },
  {
    title: '11. Bunker Renovation',
    content: 'Any bunker undergoing renovation is treated as Ground Under Repair. Relief is available under Rule 16.1b.',
  },
  {
    title: 'General Rules',
    content: 'Official starting places are the 1st and 6th tees only (or as directed). Players must play in scorecard order. Match priorities apply for club teams, competitions and friendly matches. Practice restrictions also apply.',
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

