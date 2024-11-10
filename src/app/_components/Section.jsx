export default function Section({ company }) {
  return (
    <section 
      id={company.name.toLowerCase().replace(/\s+/g, '-')} 
      className={`min-h-screen flex flex-col items-center justify-center relative ${company.backgroundClass}`}  // Apply the unique class here
    >
      {/* Company Content */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        <img 
          src={company.logo} 
          alt={`${company.name} logo`} 
          width={200} 
          height={200} 
          className="mb-8"
        />
        <div className="bg-black bg-opacity-75 p-6 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">{company.name}</h2>
          <p className="mb-8 text-white">{company.description}</p>
          <a 
            href={company.isContactUs ? "#contact" : company.website}
            target={company.isContactUs ? undefined : "_blank"}
            rel="noopener noreferrer" 
            className="bg-white text-black px-8 py-3 inline-block rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            {company.isContactUs ? "Contact Us" : "Visit Website"} 
          </a>
        </div>
      </div>
    </section>
  );
}
