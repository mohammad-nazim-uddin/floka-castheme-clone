"use client"

const socialLinks = [
  { name: "DRIBBBLE", href: "#" },
  { name: "BEHANCE", href: "#" },
  { name: "LINKEDIN", href: "#" },
  { name: "X", href: "#" },
  { name: "XING", href: "#" },
]

const impressions = [
  { label: "Solutions", value: 100 },
  { label: "UI/UX", value: 90, highlight: true },
  { label: "Explore", value: 72 },
]

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
]

export function CeoProfile() {
  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24 bg-[#f5f5f0]">
      <div className="grid lg:grid-cols-[280px_1fr_320px] gap-8 lg:gap-12 items-start">
        {/* Left Column - Stats */}
        <div className="space-y-8 bg-white rounded-2xl text-black p-5">
          <div className="space-y-1">
            <div className="flex items-start">
              <span className="text-7xl md:text-8xl font-light text-black">25</span>
              <span className="text-4xl md:text-5xl text-[#e9e9e3] mt-2">+</span>
            </div>
            <p className="text-sm text-muted-foreground text-[#e9e9e3] text-xl">Years of experience</p>
            <hr />
          </div>

          <p className="text-lg md:text-xl text-background leading-relaxed text-[#e9e9e3]">
            Explore how we transform ideas into extraordinary digital experiences.
          </p>

          {/* Happy Users */}
          <div className="pt-8 space-y-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#f5f5f0] overflow-hidden"
                >
                  <img
                    src="../assets/ceo.webp"
                    alt={`Happy user ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-lg font-medium text-background">1200+ happy users review</p>
          
          </div>
        </div>

        {/* Center - CEO Image Card */}
        <div className="relative">
          <div className="bg-[#1a1a18] rounded-3xl overflow-hidden relative">
            {/* Award Badges */}
            <div className="absolute top-6 right-6 z-10 space-y-3">
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  <svg className="w-16 h-6 text-foreground/80" viewBox="0 0 80 24" fill="currentColor">
                    <path d="M5 12c0-1 .5-2 1.5-3s2-1.5 3-1.5M15 7.5c1 0 2 .5 3 1.5s1.5 2 1.5 3M75 12c0-1-.5-2-1.5-3s-2-1.5-3-1.5M65 7.5c-1 0-2 .5-3 1.5s-1.5 2-1.5 3" stroke="currentColor" fill="none" strokeWidth="1"/>
                  </svg>
                </div>
                <p className="text-xs font-bold text-foreground tracking-wider">ULTRA</p>
                <p className="text-[8px] text-foreground/60 tracking-wide">PRESTIGIOUS</p>
                <p className="text-[7px] text-foreground/50">BEST OF THE WORLD</p>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[6px] text-primary">*</span>
                  ))}
                </div>
                <p className="text-[8px] font-bold text-foreground mt-0.5">WINNER</p>
              </div>

              <div className="text-center mt-4">
                <div className="flex justify-center mb-1">
                  <svg className="w-14 h-5 text-foreground/80" viewBox="0 0 70 20" fill="currentColor">
                    <path d="M5 10c0-1 .4-1.8 1.2-2.5S8 6.5 9 6.5M14 6.5c.8 0 1.5.4 2.2 1S17.5 9 17.5 10M65 10c0-1-.4-1.8-1.2-2.5S62 6.5 61 6.5M56 6.5c-.8 0-1.5.4-2.2 1S52.5 9 52.5 10" stroke="currentColor" fill="none" strokeWidth="1"/>
                  </svg>
                </div>
                <p className="text-[10px] font-bold text-foreground tracking-wider">HYPER</p>
                <p className="text-sm font-bold text-foreground">BEST</p>
                <p className="text-[7px] text-foreground/50">AWARD WINNING</p>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-2 h-2 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* CEO Image */}
            <div className="relative h-[500px] md:h-[600px]">
              <img
                src="../assets/ceo.webp"
                alt="Merizo H. Yelso - CEO"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-[#1a1a18]/20 to-transparent" />
              
              {/* Quote */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-4 italic">
                  &ldquo; At Floka, we merge strategy, creativity, and technology to shape brands that people love. &rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">Merizo H. Yelso</span>
                  <span className="text-sm text-muted-foreground">/CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Social & Impressions */}
        <div className="space-y-8">
          {/* Follow Us */}
          <div className="bg-white p-4 rounded-2xl p-6 space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground text-[#e9e9e3]">Follow us</p>
              <p className="text-lg font-medium text-foreground text-black pb-20">For check updates</p>
            </div>
            
           <div className="text-black gap-2 ">
             <div className="flex felx-wrap gap2 text-black gap-2 mb-2">
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 border border-zinc-200 rounded-full text-xs font-medium text-foreground hover:border-black transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {socialLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 border border-zinc-200 rounded-full text-xs font-medium text-foreground hover:border-black transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

           </div>
          {/* Impressions */}
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <p className="text-sm text-muted-foreground text-[#e9e9e3]">Impressions</p>
            
            <div className="space-y-3">
              {impressions.map((item) => (
                <div key={item.label} className="space-y-1.5 border rounded">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${item.highlight ? 'text-foreground font-medium' : 'text-foreground'}`}>
                      {item.label}
                    </span>
                    <span className="text-sm text-foreground">{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        item.highlight ? 'bg-[#ebebe0]' : 'bg-muted-foreground/30'
                      }`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
