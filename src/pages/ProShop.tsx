import PageHero from '../components/PageHero';
import { ShoppingBag, Tag, Wrench, BookOpen, Percent, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO = 'https://images.pexels.com/photos/2828723/pexels-photo-2828723.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80';
const CLUBS_IMG = 'https://images.pexels.com/photos/1325779/pexels-photo-1325779.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';
const LESSON_IMG = 'https://images.pexels.com/photos/1173277/pexels-photo-1173277.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';
const APPAREL_IMG = 'https://images.pexels.com/photos/1321908/pexels-photo-1321908.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';

const categories = [
  {
    icon: ShoppingBag,
    title: 'Golf Clubs & Equipment',
    desc: "A comprehensive range of clubs from the world's leading brands including Callaway, TaylorMade, Titleist, Ping and Cleveland. Demo clubs available in store.",
    img: CLUBS_IMG,
  },
  {
    icon: Tag,
    title: 'Clothing & Accessories',
    desc: 'Our apparel range covers everything from performance polos and waterproofs to shoes, gloves, bags and headwear — brands to suit every taste and budget.',
    img: APPAREL_IMG,
  },
  {
    icon: BookOpen,
    title: 'PGA Tuition',
    desc: 'Book individual or group lessons with our on-site PGA professional. From beginners to low-handicappers, we have a lesson programme to suit you.',
    img: LESSON_IMG,
  },
];

const lessons = [
  { type: 'Individual Lesson (30 min)', price: '£30' },
  { type: 'Individual Lesson (1 hour)', price: '£55' },
  { type: 'Block of 5 x 30-min Lessons', price: '£130' },
  { type: 'Group Lesson (up to 4)', price: '£20 pp' },
  { type: 'Beginner Package (6 lessons)', price: '£150' },
  { type: 'Junior Lesson (30 min)', price: '£20' },
];

const services = [
  { icon: Wrench, title: 'Club Repair & Regripping', desc: 'Our PGA professional offers a full club repair and regripping service using premium grip brands.' },
  { icon: Percent, title: 'Member Discount', desc: 'Members enjoy a 10% discount on all pro shop purchases, year-round.' },
  { icon: Tag, title: 'Custom Fitting', desc: 'Professional club fitting service available by appointment. Find the perfect clubs for your game.' },
  { icon: BookOpen, title: 'Demo Days', desc: 'Regular demo days throughout the season with leading brand representatives. Check the notice board for dates.' },
];

export default function ProShop() {
  return (
    <div className="bg-cream">
      <PageHero
        title="Pro Shop"
        subtitle="Equipment, apparel and expert tuition"
        image={HERO}
        icon={<ShoppingBag size={20} />}
        tall
      />

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-3">Expert Advice</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-3">
          Our Pro Shop
        </h2>
        <div className="section-divider mb-6" />
        <p className="text-gray-600 leading-relaxed text-lg">
          Stocked with the very latest golf equipment, clothing and accessories, our pro shop is here to
          equip and inspire golfers of every level. Our PGA professionals are always on hand to offer
          expert advice, fitting and tuition.
        </p>
      </section>

      {/* Category cards */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-white rounded-sm shadow-md overflow-hidden card-hover group">
              <div className="h-48 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="w-9 h-9 rounded-full bg-crimson-50 border border-crimson-100 flex items-center justify-center mb-3">
                  <cat.icon size={16} className="text-crimson-800" />
                </div>
                <h3 className="font-cinzel font-bold text-navy-800 tracking-wider text-sm mb-2">{cat.title}</h3>
                <div className="section-divider-left mb-3" />
                <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white border-y border-gray-100 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">More Services</p>
            <h2 className="font-display font-bold text-3xl text-navy-800 mb-2">Pro Shop Services</h2>
            <div className="section-divider" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-5 border border-gray-100 rounded-sm hover:border-gold-300 transition-colors">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center mx-auto mb-3">
                  <Icon size={16} className="text-gold-400" />
                </div>
                <h4 className="font-cinzel font-semibold text-navy-800 text-xs tracking-wider mb-2">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons pricing */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">PGA Professionals</p>
            <h3 className="font-display font-bold text-3xl text-navy-800 mb-3">Lesson Prices</h3>
            <div className="section-divider-left mb-5" />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Improve your game with our experienced PGA professional. Lessons are available for all ages
              and abilities, from complete beginners to competitive players. Lessons can be booked at the
              pro shop or by calling the club.
            </p>
            <div className="rounded-sm overflow-hidden border border-gray-200">
              {lessons.map((l, i) => (
                <div
                  key={l.type}
                  className={`flex items-center justify-between px-5 py-3.5 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'} hover:bg-gold-50/50 transition-colors`}
                >
                  <span className="text-gray-700 text-sm">{l.type}</span>
                  <span className="font-display font-bold text-xl text-crimson-800">{l.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={LESSON_IMG} alt="Golf lesson" className="w-full h-80 object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#5a1020] text-center px-4">
        <h3 className="font-cinzel font-bold text-2xl text-white tracking-wider mb-3">Visit Our Pro Shop</h3>
        <p className="text-white/70 mb-6 max-w-lg mx-auto">
          Open daily. Call ahead to book a lesson, club fitting or custom order.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+441792401989" className="btn-gold">Call 01792 401 989</a>
          <Link to="/contact" className="btn-navy">Send an Enquiry</Link>
        </div>
      </section>
    </div>
  );
}
