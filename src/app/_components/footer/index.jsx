export default function Footer() {
  return (
    // Footer container with centered text
    <footer className="bg-gray-800 text-white py-4 sm:py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Display the current year dynamically */}
        <p>&copy; {new Date().getFullYear()} Village Creative. All rights reserved.</p>
      </div>
    </footer>
  );
}
