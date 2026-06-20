import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const HERO = 'https://images.pexels.com/photos/1426718/pexels-photo-1426718.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80';

const departments = [
  { label: 'General Enquiry', value: 'general' },
  { label: 'Tee Time Booking', value: 'tee_time' },
  { label: 'Membership', value: 'membership' },
  { label: 'Societies & Corporate', value: 'societies' },
  { label: 'Room Hire / Events', value: 'room_hire' },
  { label: 'Pro Shop / Lessons', value: 'pro_shop' },
];

const info = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['Swansea Bay Golf Club', 'Jersey Marine', 'Neath, SA10 6JP', 'South Wales'],
  },
  {
    icon: Phone,
    title: 'Telephone',
    lines: ['01792 401 989'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@swanseabaygolfclub.co.uk'],
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: ['Golf Course: Dawn to Dusk', 'Bar: 11:00 – 23:00', 'Kitchen: 12:00 – 21:00', 'Pro Shop: 8:00 – 18:00'],
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'general',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('contact_enquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        department: form.department,
        message: form.message,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', department: 'general', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-cream">
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        image={HERO}
        icon={<Mail size={20} />}
        tall
      />

      {/* Info cards */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {info.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-sm p-6 hover:border-gold-300 transition-colors card-hover">
              <div className="w-10 h-10 rounded-full bg-[#5a1020] flex items-center justify-center mb-4">
                <Icon size={16} className="text-gold-400" />
              </div>
              <h4 className="font-cinzel font-bold text-navy-800 text-xs tracking-wider mb-2">{title}</h4>
              <div className="section-divider-left mb-3" />
              {lines.map((line) => (
                <p key={line} className="text-gray-600 text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact form + map */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Form */}
          <div className="lg:w-3/5">
            <p className="font-cinzel text-gold-600 text-xs tracking-[0.3em] uppercase mb-2">Get in Touch</p>
            <h2 className="font-display font-bold text-3xl text-navy-800 mb-3">Send an Enquiry</h2>
            <div className="section-divider-left mb-6" />

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                <CheckCircle size={40} className="text-green-500 mx-auto mb-3" />
                <h3 className="font-cinzel font-bold text-navy-800 tracking-wider mb-2">Message Received</h3>
                <p className="text-gray-600 text-sm">
                  Thank you for getting in touch. A member of our team will respond to your enquiry within one working day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 btn-crimson text-xs py-2 px-6"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cinzel text-[10px] tracking-widest text-gray-500 uppercase mb-1.5">
                      Your Name <span className="text-crimson-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gold-400 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-cinzel text-[10px] tracking-widest text-gray-500 uppercase mb-1.5">
                      Email Address <span className="text-crimson-700">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gold-400 transition-colors bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cinzel text-[10px] tracking-widest text-gray-500 uppercase mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Optional"
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gold-400 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-cinzel text-[10px] tracking-widest text-gray-500 uppercase mb-1.5">
                      Subject
                    </label>
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gold-400 transition-colors bg-white"
                    >
                      {departments.map((d) => (
                        <option key={d.value} value={d.value}>{d.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-cinzel text-[10px] tracking-widest text-gray-500 uppercase mb-1.5">
                    Your Message <span className="text-crimson-700">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gold-400 transition-colors bg-white resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-crimson-700 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-crimson flex items-center gap-2 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map placeholder */}
          <div className="lg:w-2/5">
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden h-full min-h-[400px] flex flex-col">
              <div
                className="flex-1 relative"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/1174996/pexels-photo-1174996.jpeg?auto=compress&cs=tinysrgb&w=600&q=80)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-navy-800/70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <MapPin size={28} className="text-gold-400 mb-3" />
                  <h4 className="font-cinzel font-bold text-white tracking-wider mb-1">Find Us</h4>
                  <p className="text-white/70 text-sm mb-4">Jersey Marine, Neath, SA10 6JP</p>
                  <a
                    href="https://maps.google.com/?q=Swansea+Bay+Golf+Club+Jersey+Marine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-[11px] py-2 px-5"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <div className="bg-white px-5 py-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600">
                  <span className="font-cinzel text-gold-600 uppercase tracking-wider text-[9px]">From M4:</span>
                  <span>Junction 41, follow signs to Jersey Marine</span>
                  <span className="font-cinzel text-gold-600 uppercase tracking-wider text-[9px]">Parking:</span>
                  <span>Free car park on site (100+ spaces)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
