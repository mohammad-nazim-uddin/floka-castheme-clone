export default function Portfolio() {
  const projects = [
    { title: "BRANDING, UX", image: "/assets/portfolio-1.jpg", year: "2025" },
    { title: "PRODUCT DESIGN", image: "/assets/portfolio-2.jpg", year: "2024" },
    { title: "WEB DEVELOPMENT", image: "/assets/portfolio-3.jpg", year: "2024" },
    { title: "MOBILE UI", image: "/assets/portfolio-4.jpg", year: "2025" }
  ];

  return (
    <section id="portfolio" className="py-40 bg-black w-full border-t border-white/5">
      <div className="container mx-auto px-12">
        <div className="flex justify-between items-end mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-wide">
              Featured Work
            </h2>
            <div className="hidden md:flex space-x-6 items-center">
                <p className="text-gray-400 font-sans text-lg max-w-sm">We design digital products that help grow businesses and connect with humans.</p>
                <button className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Box */}
              <div className="w-full h-[600px] bg-gray-800 rounded-t-[32px] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Floating Tag over Image */}
                <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-xs uppercase tracking-widest font-sans">
                    {item.title}
                </div>
              </div>

              {/* Bottom White Description Bar */}
              <div className="bg-[#f4f4f4] rounded-b-[32px] py-6 px-10 flex justify-between items-center group-hover:bg-white transition-colors duration-300">
                  <h3 className="text-black text-2xl font-serif font-bold">Project Overview</h3>
                  <span className="text-gray-500 font-sans text-sm font-semibold">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
