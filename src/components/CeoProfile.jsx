"use client"

import { useState, useEffect, useRef } from 'react'

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
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=75",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&auto=format&q=75",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=75",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=75",
]

export function CeoProfile() {
  const [scrollOffset, setScrollOffset] = useState(0)
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const windowHeight = window.innerHeight

      // Calculate how much the section is in view (0 to 1)
      if (sectionTop < windowHeight && sectionTop + rect.height > 0) {
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + rect.height)
        const offset = scrollProgress * 80 // Image moves up to 80px
        setScrollOffset(offset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="px-6 lg:px-12 py-16 lg:py-24 bg-[#f5f5f0]">
      <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-12 items-stretch">
        {/* Left Column - Stats */}
        <div className="space-y-8 bg-white rounded-2xl text-black p-5 flex flex-col h-full">
          <div className="space-y-1">
            <div className="flex items-start">
              <span className="text-7xl md:text-8xl font-light text-black">25</span>
              <span className="text-4xl md:text-5xl text-[#666666] mt-2">+</span>
            </div>
            <p className="text-sm text-muted-foreground text-[#666666] text-xl">Years of experience</p>
            <hr />
          </div>

          <p className="text-lg md:text-xl text-background leading-relaxed text-[#666666]">
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
                    src={avatar}
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
        <div className="bg-[rgb(10,10,10)] rounded-3xl lg:pt-32 h-full flex flex-col items-center text-center lg:block lg:relative lg:overflow-visible">
          {/* Image and Badges Container */}
          <div className="flex items-center  lg:block">
            {/* CEO Image */}
            <div 
              ref={imageRef}
              className="w-full max-w-[360px] h-[360px] sm:max-w-[380px] sm:h-[380px] 
              rounded-3xl  lg:absolute lg:left-2/3 lg:ml-5 lg:mt-5 lg:w-100 lg:h-116 lg:transform lg:-translate-x-1/2 lg:-top-5 "
              style={{
                transform: `translate(-50%, -${scrollOffset * 1.5}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <img
                src="/assets/ceo.webp"
                alt="Merizo H. Yelso - CEO"
                className="w-full object-cover object-top ml-30 lg:ml-0" 
              />
            </div>
              
            {/* Award Badges */}
            <div className="grid flex-wrap justify-center gap-4 lg:absolute lg:top-6 lg:right-6 lg:z-50 lg:grid lg:gap-4">
              <img 
                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon1.svg"
                alt="Award Badge 1"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
              <img 
                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon2.svg"
                alt="Award Badge 2"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>
          </div>
              
          {/* Gradient Overlay */}
          <div className="w-full h-48 bg-gradient-to-t from-[#1a1a18] via-[#1a1a18]/40 to-transparent rounded-b-3xl lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:z-30" />
              
          {/* Quote */}
          <div className="w-full max-w-[520px] mt-[-160px] p-8 lg:p-10 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:z-40">
            <p className="text-xl lg:text-2xl font-light text-foreground leading-relaxed mb-4 italic">
              &ldquo; At Floka, we merge strategy, creativity, and technology to shape brands that people love. &rdquo;
            </p>
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-center lg:items-center">
              <span className="text-sm font-medium text-foreground">Merizo H. Yelso</span>
              <span className="text-sm text-muted-foreground">/CEO</span>
            </div>
          </div>
        </div>

        {/* Right Column - Social & Impressions */}
        <div className="space-y-8 flex flex-col h-full">
          {/* Follow Us */}
          <div className="bg-white p-4 rounded-2xl p-6 space-y-4 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground text-[#666666]">Follow us</p>
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
          <div className="bg-white rounded-2xl p-6 space-y-4 flex-1">
            <p className="text-sm text-muted-foreground text-[#666]">Impressions</p>
            
            <div className="-space-y-2 mt-20">
              {impressions.map((item) => {
                let bgColor = 'bg-[#f5f5f5]'
                let textColor = 'text-black'
                
                if (item.label === 'UI/UX') {
                  bgColor = 'bg-[#0a0a0a]'
                  textColor = 'text-white'
                } else if (item.label === 'Explore') {
                  bgColor = 'bg-white border '
                  textColor = 'text-black'
                }
                
                return (
                  <div 
                    key={item.label}
                    className={`${bgColor} ${textColor} rounded-full  p-2 transition-all`}
                    style={{ width: `${item.value}%` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium">{item.value}%</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
