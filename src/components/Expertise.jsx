export default function Expertise() {
  const services = [
    { title: "User Interface & Experience Design", details: "Creating intuitive, engaging, and beautiful web experiences tailored to your brand's unique identity." },
    { title: "Web Development", details: "Robust front-end and back-end development using the latest modern stacks." },
    { title: "Branding & Strategy", details: "Defining your digital presence and establishing comprehensive brand guidelines." },
    { title: "Search Engine Optimization (SEO)", details: "Ensuring your project reaches its target audience successfully and ranks high." }
  ];

  return (
    <section id="expertise" className="py-32 bg-black w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-16 uppercase tracking-wider">
          Company Expertise
        </h2>
        
        <div className="w-full flex flex-col space-y-4">
          {services.map((service, index) => (
            <div key={index} className="collapse collapse-plus bg-none border-b border-white/10 rounded-none">
              <input type="radio" name="expertise-accordion" defaultChecked={index === 0} /> 
              <div className="collapse-title text-2xl md:text-4xl font-serif text-white hover:text-gray-300 transition-colors py-8 px-0">
                {service.title}
              </div>
              <div className="collapse-content px-0 text-gray-400 font-sans max-w-2xl text-lg">
                <p>{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
