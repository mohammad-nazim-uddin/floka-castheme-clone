import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white text-black ${scrolled ? 'shadow-md py-4' : 'py-6'}`}>
      <div className="container mx-auto px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M4 4h16v4H4V4zm0 8h8v9H4v-9z"/>
            </svg>
            <div className="text-3xl font-sans font-bold tracking-tight">
            Floka
            </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12 text-[15px] font-medium tracking-wide">
          <a href="#home" className="hover:text-gray-500 transition-colors">Home</a>
          <a href="#expertise" className="hover:text-gray-500 transition-colors">Pages</a>
          <a href="#portfolio" className="hover:text-gray-500 transition-colors">Portfolio</a>
          <a href="#blog" className="hover:text-gray-500 transition-colors">Blog</a>
        </nav>

        {/* Right side + Mobile Toggle */}
        <div className="flex items-center space-x-8 text-[15px] font-medium">
          <a href="mailto:info@floka.com" className="hidden md:block hover:text-gray-500 transition-colors">info@floka.com</a>
          <button className="hover:text-gray-500 transition-colors focus:outline-none flex flex-col space-y-1.5 items-end">
            <span className="block w-6 h-[2px] bg-current"></span>
            <span className="block w-4 h-[2px] bg-current"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
