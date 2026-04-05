export default function Statement() {
  return (
    <section className="bg-[#f2f2f2] w-full py-12 md:py-20 border-b border-gray-300/30">
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24 lg:gap-32">
        
        {/* Left Column */}
        <div className="w-full md:w-[220px] shrink-0 flex flex-col items-start">
            
          {/* Spinning Logo Element */}
          <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
            {/* Spinning Circular Text */}
            <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400 overflow-visible">
                <path id="circlePath2" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                <text className="text-[12px] font-sans tracking-widest uppercase fill-current">
                  <textPath href="#circlePath2" startOffset="0%">
                    want it to sound playful • luxurious • or more •
                  </textPath>
                </text>
              </svg>
            </div>
            {/* Center 'F' Logo (Mimicking the blocky F) */}
            <div className="relative z-10 w-10 h-10 flex flex-col justify-between">
                <div className="w-full h-[14px] bg-black"></div>
                <div className="w-[60%] h-[14px] bg-black"></div>
                <div className="w-[30%] h-[14px] bg-black"></div>
            </div>
          </div>

          <p className="text-gray-500 text-lg font-sans leading-relaxed pr-8">
            We design every project with long-term success in mind.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <h2 className="text-black text-[2rem] md:text-[3rem] lg:text-[3.75rem] font-sans font-medium tracking-tight leading-[1.1] w-full pr-4">
            Our approach is straightforward—<br className="hidden md:block" />
            prioritizing functionality, speed,<br className="hidden md:block" />
            and clarity for solutions.
          </h2>
        </div>

      </div>
    </section>
  );
}
