export default function CTA() {
  return (
    <section className="relative py-40 bg-[#0a0a0a] w-full flex justify-center items-center overflow-hidden border-t border-white/10">
      {/* Background massive text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-0 opacity-10">
        <h2 className="text-[12vw] font-serif leading-none uppercase text-white font-bold tracking-tighter mix-blend-overlay">Let's</h2>
        <h2 className="text-[12vw] font-serif leading-none uppercase text-white font-bold tracking-tighter mix-blend-overlay">Talk Now</h2>
      </div>

      {/* Foreground circular button */}
      <div className="relative z-10 w-48 h-48 group cursor-pointer">
        <div className="absolute inset-0 border border-white/20 rounded-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
            <svg className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
        {/* Spinning Text */}
        <div className="absolute inset-0 block animate-[spin_10s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/70 overflow-visible">
            <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
            <text className="text-[11px] font-sans tracking-widest uppercase">
              <textPath href="#circlePath" startOffset="0%">Get in touch • Get in touch • Get in touch •</textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
