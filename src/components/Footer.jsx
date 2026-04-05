export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] pt-24 pb-12 w-full text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <h2 className="text-3xl font-serif tracking-widest font-bold mb-6">Floka.</h2>
             <p className="text-gray-400 font-sans max-w-md">
               A digital agency building immersive web experiences that connect brands with audiences on a deeper, visual level.
             </p>
          </div>
          
          <div>
            <h4 className="text-lg font-sans font-bold uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400 font-sans">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-sans font-bold uppercase tracking-wider mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400 font-sans">
              <li>New York, NY 10012, USA</li>
              <li><a href="mailto:info@floka.com" className="hover:text-white transition-colors">info@floka.com</a></li>
              <li className="mt-6 flex space-x-4">
                 <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">X</a>
                 <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">in</a>
                 <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">Be</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-sans pb-10">
           <p>©2025 ALMOND™ STUDIO. All rights reserved.</p>
           <div className="space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
