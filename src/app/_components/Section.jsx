import { useEffect, useState } from "react";

export default function Section({ company }) {
  // Prevent hydration mismatch by tracking if it's the client
  const [isClient, setIsClient] = useState(false);

  // Ensure `window.open` only runs on client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();  // Always prevent default action for full control

    if (company.isContactUs) {
      // Smooth scroll to Contact Us section
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else if (isClient && company.website) {
      // Open website in a new tab (only on client-side)
      window.open(company.website, "_blank");
    }
  };

  return (
    <section 
      id={company.name.toLowerCase().replace(/\s+/g, '-')} 
      className={`min-h-screen flex flex-col items-center justify-center relative ${company.backgroundClass}`}  
    >
      {/* Company Content */}
      <div className="relative z-10 flex flex-col items-center mx-auto px-4 max-w-xl sm:max-w-2xl lg:max-w-4xl">
        <img 
          src={company.logo} 
          alt={`${company.name} logo`} 
          width={company.logoSize || 450}  
          height={company.logoSize || 450}  
          className="mb-8"
        />
        <div className="bg-black bg-opacity-75 p-6 rounded-lg text-center">
          <p className="mb-8 text-white">{company.description}</p>

          {/* Dynamic Link Button */}
          <a 
            href={company.isContactUs ? "#contact" : company.website ? company.website : '#'}  
            rel="noopener noreferrer"
            className={`px-8 py-3 inline-block border border-white rounded-md transition-colors duration-300 ${
              company.website || company.isContactUs ? 'bg-transparent text-white hover:bg-customBeige' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
            onClick={handleClick}  
          >
            {company.isContactUs ? "Contact Us" : company.website ? "Visit Website" : "Coming Soon"}
          </a>
        </div>
      </div>
    </section>
  );
}
