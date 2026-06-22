import PageHero from '../components/PageHero';
import { Flag, Sun, Cloud, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO = 'https://images.pexels.com/photos/1426718/pexels-photo-1426718.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80';
const COURSE2 = 'https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';

const summer = [
  { label: 'Mon–Fri', price: '£30', note: '18 Holes' },
  { label: 'With Member', price: '£25', note: 'Mon–Fri' },
  { label: 'Juniors', price: '£15', note: 'Under 18' },
  { label: 'County Card', price: '£25', note: 'Weekdays Only' },
  { label: 'Twilight After 4pm', price: '£20', note: 'Summer Rate' },
  { label: 'Sat & Sun', price: '£60', note: 'Weekend' },
  { label: 'Bank Holidays', price: '£60', note: 'Peak Rate' },
  { label: 'Weekend With Member', price: '£50', note: 'Sat/Sun/Bank Hol' },
  { label: 'Weekend Junior', price: '£30', note: 'Under 18' },
  { label: 'Weekend Twilight', price: '£40', note: 'After 4pm' },
];

const winter = [
  { label: 'Mon–Fri', price: '£25', note: '18 Holes' },
  { label: 'With Member', price: '£20', note: 'Mon–Fri' },
  { label: 'Juniors', price: '£12.50', note: 'Under 18' },
  { label: 'County Card', price: '£20', note: 'Weekdays Only' },
  { label: 'Sat & Sun', price: '£40', note: 'Weekend' },
  { label: 'Bank Holidays', price: '£40', note: 'Peak Rate' },
  { label: 'Weekend With Member', price: '£35', note: 'Sat/Sun/Bank Hol' },
  { label: 'Weekend Junior', price: '£20', note: 'Under 18' },
  { label: 'After 1pm', price: '£35', note: 'Winter Rate' },
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

      <section className="pb-16 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

    <div className="bg-white rounded-sm shadow-md overflow-hidden">
      <div className="bg-navy-800 px-6 py-5">
        <h3 className="font-cinzel font-bold text-white tracking-wider">
          Summer Green Fees
        </h3>
        <p className="text-gold-400 text-xs mt-1">
          1 April 2026 – 30 September 2026
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {summer.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between px-6 py-4 hover:bg-gold-50/50"
          >
            <div>
              <div className="font-cinzel text-sm font-semibold text-navy-800">
                {row.label}
              </div>
              <div className="text-xs text-gray-500">
                {row.note}
              </div>
            </div>

            <div className="font-display font-bold text-2xl text-crimson-800">
              {row.price}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-sm shadow-md overflow-hidden">
      <div className="bg-[#5a1020] px-6 py-5">
        <h3 className="font-cinzel font-bold text-white tracking-wider">
          Winter Green Fees
        </h3>
        <p className="text-gold-400 text-xs mt-1">
          1 October 2025 – 31 March 2026
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {winter.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between px-6 py-4 hover:bg-gold-50/50"
          >
            <div>
              <div className="font-cinzel text-sm font-semibold text-navy-800">
                {row.label}
              </div>
              <div className="text-xs text-gray-500">
                {row.note}
              </div>
            </div>

            <div className="font-display font-bold text-2xl text-crimson-800">
              {row.price}
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>

  <div className="max-w-6xl mx-auto mt-6">
    <div className="bg-gold-50 border border-gold-200 rounded-sm p-4 text-center">
      <p className="text-sm text-gray-700">
        <strong>County Cards:</strong> Not valid on weekends or bank holidays.
      </p>
    </div>
  </div>
</section>
