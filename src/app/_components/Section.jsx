export default function Section({ company }) {
  const handleClick = (e) => {
    e.preventDefault();  // Always prevent default action for full control

    if (company.isContactUs) {
      // Smooth scroll to Contact Us section
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else if (company.website) {
      // Open website in a new tab
      window.open(company.website, "_blank");
    }
    // No action for "Coming Soon" as it just stays inactive
  };

  return (
    <section 
      id={company.name.toLowerCase().replace(/\s+/g, '-')} 
      className={`min-h-screen flex flex-col items-center justify-center relative ${company.backgroundClass}`}  // Apply the unique class here
    >
      {/* Company Content */}
      <div className="relative z-10 flex flex-col items-center mx-auto px-4 max-w-xl sm:max-w-2xl lg:max-w-4xl">
        <img 
          src={company.logo} 
          alt={`${company.name} logo`} 
          width={company.logoSize || 450}  // Use `logoSize` if provided, otherwise default to 250
          height={company.logoSize || 450}  // Same here for height
          className="mb-8"
        />
        <div className="bg-black bg-opacity-75 p-6 rounded-lg text-center">
          {/*<h2 className="text-4xl font-bold mb-4 text-white">{company.name}</h2>*/}
          <p className="mb-8 text-white">{company.description}</p>

          {/* Dynamic Link Button */}
          <a 
            href={company.isContactUs ? "#contact" : company.website ? company.website : '#'}  // Smooth scroll if isContactUs
            rel="noopener noreferrer"
            className={`px-8 py-3 inline-block border border-white rounded-md transition-colors duration-300 ${
              company.website || company.isContactUs ? 'bg-transparent text-white hover:bg-customBeige' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
            onClick={handleClick}  // Control navigation behavior based on company properties
          >
            {company.isContactUs ? "Contact Us" : company.website ? "Visit Website" : "Coming Soon"}
          </a>
        </div>
      </div>
    </section>
  );
}
