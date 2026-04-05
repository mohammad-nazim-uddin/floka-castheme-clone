import { useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Video play was interrupted:", error));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full pt-[90px] pb-4 bg-white group flex justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container to handle the rounded corners and margins */}
      <div className="relative w-[calc(100%-2rem)] h-[calc(100vh-106px)] min-h-[750px] rounded-[32px] overflow-hidden bg-[#e0e5ec]">
        
        {/* Video Background (Paused state acts as the still image) */}
        <video
          ref={videoRef}
          src="/assets/hero-bg.mp4"
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
        ></video>

        {/* Background massive typography */}
        <div className="absolute top-1/2 left-6 md:left-12 transform -translate-y-1/2 z-30 pointer-events-none flex flex-col pt-4 md:pt-[10%]">
          <h1 className="text-[16vw] leading-[0.8] font-sans font-bold text-white tracking-tighter select-none whitespace-nowrap">
            Floka
          </h1>
          <h1 
            className="text-[13vw] leading-[0.85] font-sans font-bold tracking-tighter select-none whitespace-nowrap ml-[14vw]"
            style={{ WebkitTextStroke: '3px rgba(255,255,255,0.4)', color: 'transparent' }}
          >
            Studio
          </h1>
        </div>

        {/* Foreground Content */}
        <div className="absolute inset-0 z-40 w-full flex flex-col justify-center items-end pr-8 md:pr-[8vw] pointer-events-none pt-24">
          
          <div className="flex flex-col items-start max-w-lg pointer-events-auto mt-[10vh]">
            
            {/* The Floating Profile Card */}
            <div className="bg-white rounded-[32px] p-4 flex items-center space-x-8 w-[460px] shadow-2xl mb-8">
              {/* Left: Image (Large and rounded but square-ish) */}
              <div className="w-36 h-36 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
                  <img src="/assets/team-1.jpg" alt="Team member" className="w-full h-full object-cover pointer-events-none" />
              </div>
              {/* Right: Text and button */}
              <div className="flex flex-col flex-1 py-2 pr-4 justify-between h-full">
                <div>
                  <p className="text-[11px] font-sans text-gray-400 mb-1 uppercase tracking-widest font-bold">Head of Idea</p>
                  <p className="text-black font-sans text-2xl font-bold tracking-tight mb-4 leading-none">Almond D. Nelsi</p>
                </div>
                
                <button className="flex items-center group cursor-pointer w-fit mt-auto">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-lg leading-none mb-[2px]">+</span>
                  </div>
                  <span className="ml-3 text-black text-[11px] font-bold tracking-widest uppercase">Let's Talk</span>
                </button>
              </div>
            </div>

            {/* Paragraph Text Below */}
            <div className="text-left w-full pl-2">
              <p className="text-white text-[22px] font-sans font-medium mb-1 tracking-tight">No cookie-cutter websites. No fluff.</p>
              <p className="text-white/60 text-[18px] leading-[1.4] font-sans tracking-wide max-w-[420px]">Just real tools and smart strategies to grow your business and elevate your brand.</p>
            </div>

          </div>

          {/* 'buy on envato' badge exact replica */}
          <div className="absolute bottom-12 left-8 md:left-16 pointer-events-auto">
              <div className="bg-[#1f1f1f] text-white px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center space-x-1.5 shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <span>Buy on</span>
                  <img 
                    src="/assets/envato.png" 
                    alt="Envato" 
                    className="h-4" 
                  />
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
