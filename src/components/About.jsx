export default function About() {
  return (
    <section id="about" className="py-32 bg-[#f5f5f5] text-black w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        {/* Left Side - Big Image */}
        <div className="w-full md:w-1/2 relative h-[70vh] bg-gray-300 overflow-hidden rounded-lg shadow-xl">
           <img 
              src="/assets/about-team.jpg" 
              alt="Our creative team" 
              className="w-full h-full object-cover grayscale transition-transform duration-1000 hover:scale-[1.03]" 
           />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 uppercase tracking-wider">
            We Create Digital Experiences
          </h2>
          <p className="text-gray-700 text-lg font-sans leading-relaxed mb-8">
            Behind every groundbreaking project is a team fueled by passion and countless coffee-fueled brainstorming sessions. We believe in building digital products that aren't just beautiful, but completely reshape the way users interact with your brand.
          </p>
          <div className="flex space-x-12">
            <div>
              <p className="text-5xl font-serif">10+</p>
              <p className="font-sans text-sm tracking-wide text-gray-500 uppercase mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-serif">2k+</p>
              <p className="font-sans text-sm tracking-wide text-gray-500 uppercase mt-2">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
