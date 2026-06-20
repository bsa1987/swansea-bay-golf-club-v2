import PageHero from '../components/PageHero';
import { Flag, Sun, Cloud, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO = 'https://images.pexels.com/photos/1426718/pexels-photo-1426718.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80';
const COURSE2 = 'https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';

const weekday = [
  { time: 'Before 9am', price: '£20', note: 'Twilight / Early Bird' },
  { time: '9am – 12pm', price: '£28', note: 'Prime Morning' },
  { time: '12pm – 3pm', price: '£25', note: 'Afternoon' },
  { time: 'After 3pm', price: '£18', note: 'Twilight' },
];

const weekend = [
  { time: 'Before 9am', price: '£25', note: 'Early Bird' },
  { time: '9am – 12pm', price: '£35', note: 'Prime Morning' },
  { time: '12pm – 3pm', price: '£30', note: 'Afternoon' },
  { time: 'After 3pm', price: '£22', note: 'Twilight' },
];

const juniors = [
  { label: 'Weekday (Under 18)', price: '£12' },
  { label: 'Weekend (Under 18)', price: '£16' },
  { label: 'Junior Membership (Annual)', price: '£150' },
];

const included = [
  'Full 18 holes on our championship course',
  'Use of practice putting green',
  'Clubhouse facilities access',
  'Scorecard provided',
  'Welcome from our friendly staff',
];

export default function GreenFees() {
  return (
    <div className="bg-cream">
      <PageHero
        title="Green Fees"
        subtitle="Outstanding value on a championship coastal links"
        image={HERO}
        icon={<Flag size={20} />}
        tall
      />

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-3">Play Swansea Bay</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-3">
          Green Fee Rates
        </h2>
        <div className="section-divider mb-6" />
        <p className="text-gray-600 leading-relaxed text-lg">
          All visitors are welcome to play our 18-hole championship course. Green fees vary by time of
          day and day of the week — book ahead to secure your preferred tee time.
        </p>
      </section>

      {/* Fee tables */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Weekday */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <div className="bg-navy-800 px-6 py-4 flex items-center gap-3">
              <Cloud size={18} className="text-gold-400" />
              <h3 className="font-cinzel font-bold text-white tracking-wider">Weekday Rates</h3>
              <span className="ml-auto font-cinzel text-gold-400/70 text-xs">Mon – Fri</span>
            </div>
            <div className="divide-y divide-gray-100">
              {weekday.map((row) => (
                <div key={row.time} className="flex items-center justify-between px-6 py-4 hover:bg-gold-50/50 transition-colors">
                  <div>
                    <div className="font-cinzel text-sm font-semibold text-navy-800">{row.time}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{row.note}</div>
                  </div>
                  <div className="font-display font-bold text-2xl text-crimson-800">{row.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekend */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <div className="bg-[#5a1020] px-6 py-4 flex items-center gap-3">
              <Sun size={18} className="text-gold-400" />
              <h3 className="font-cinzel font-bold text-white tracking-wider">Weekend Rates</h3>
              <span className="ml-auto font-cinzel text-gold-400/70 text-xs">Sat & Sun</span>
            </div>
            <div className="divide-y divide-gray-100">
              {weekend.map((row) => (
                <div key={row.time} className="flex items-center justify-between px-6 py-4 hover:bg-gold-50/50 transition-colors">
                  <div>
                    <div className="font-cinzel text-sm font-semibold text-navy-800">{row.time}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{row.note}</div>
                  </div>
                  <div className="font-display font-bold text-2xl text-crimson-800">{row.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Junior rates */}
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-display font-bold text-2xl text-navy-800">Junior Green Fees</h3>
            <div className="h-px flex-1 bg-gold-200" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {juniors.map((j) => (
              <div key={j.label} className="border border-gold-200 rounded-sm p-5 flex items-center justify-between hover:border-gold-400 transition-colors">
                <span className="text-gray-700 text-sm">{j.label}</span>
                <span className="font-display font-bold text-xl text-crimson-800">{j.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included + image */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">Included</p>
            <h3 className="font-display font-bold text-3xl text-navy-800 mb-3">What's Included</h3>
            <div className="section-divider-left mb-5" />
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-gold-50 border border-gold-200 rounded-sm">
              <p className="text-sm text-gray-600 font-cinzel tracking-wide">
                <span className="text-gold-700 font-semibold">Buggy Hire:</span> £20 per round (subject to availability)
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src={COURSE2}
              alt="Golf Course"
              className="w-full h-72 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-14 bg-navy-800 text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold-500" />
          <Calendar size={14} className="text-gold-500" />
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h3 className="font-cinzel font-bold text-2xl text-white tracking-wider mb-3">Book Your Tee Time</h3>
        <p className="text-white/70 mb-6 max-w-lg mx-auto">
          Call us or email to reserve your preferred tee time. Group and society bookings are also available.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+441792401989" className="btn-gold">Call 01792 401 989</a>
          <Link to="/groups-societies" className="btn-crimson">Group Packages</Link>
        </div>
      </section>
    </div>
  );
}
