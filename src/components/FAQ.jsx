export default function FAQ() {
  const faqs = [
    { question: "How does AI actually improve business efficiency?", answer: "By automating repetitive tasks, providing predictive analytics, and enhancing human decision-making with rapid data processing, AI reduces overhead and speeds up core operations." },
    { question: "What is the typical timeline for a branding project?", answer: "Most comprehensive branding projects take between 4 to 8 weeks depending on the complexity and iterations required." },
    { question: "Do you offer post-launch support and maintenance?", answer: "Yes, we provide ongoing maintenance retainers to ensure your product remains secure, fast, and optimized." },
    { question: "Can we integrate your custom solutions with our existing CMS?", answer: "Absolutely. Our headless builds seamlessly integrate with major CMS platforms including WordPress, Contentful, and Sanity." }
  ];

  return (
    <section id="faq" className="py-32 bg-black w-full text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-16 uppercase tracking-wider text-center">
          FAQ & Get Answer
        </h2>
        
        <div className="w-full flex flex-col space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-none border-b border-white/10 rounded-none">
              <input type="radio" name="faq-accordion" /> 
              <div className="collapse-title text-xl md:text-3xl font-serif hover:text-gray-300 transition-colors py-6 px-0">
                {faq.question}
              </div>
              <div className="collapse-content px-0 text-gray-400 font-sans text-lg">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
