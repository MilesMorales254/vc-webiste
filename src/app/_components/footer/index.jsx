import { useState, useEffect } from 'react'; // Import useState & useEffect

export default function Footer() {
  // Store the year in state to ensure it matches between server and client
  const [year, setYear] = useState(null);

  // Set the year only on the client-side to prevent hydration mismatch
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    // Footer container with centered text
    <footer className="bg-gray-800 text-white py-4 sm:py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Display the current year dynamically after client-side hydration */}
        <p>&copy; {year ? year : "Loading..."} Village Creative. All rights reserved.</p>
      </div>
    </footer>
  );
}