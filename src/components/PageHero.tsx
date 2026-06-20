interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  icon?: React.ReactNode;
  tall?: boolean;
}

export default function PageHero({ title, subtitle, image, icon, tall }: PageHeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center text-center ${tall ? 'min-h-[520px]' : 'min-h-[400px]'}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 px-6 pt-24 pb-12">
        {icon && (
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-gold-500/60 flex items-center justify-center text-gold-400">
              {icon}
            </div>
          </div>
        )}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
          <div className="w-1.5 h-1.5 bg-gold-500 rotate-45" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
        </div>
        <h1 className="font-cinzel font-bold text-4xl sm:text-5xl md:text-6xl tracking-widest text-white uppercase">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-4 mt-4 mb-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
          <div className="w-1.5 h-1.5 bg-gold-500 rotate-45" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
        </div>
        {subtitle && (
          <p className="font-display text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mt-2 italic">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
