import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/9742555114?text=Hi%20Digital%20Solution,%20I%20want%20to%20get%20started', '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="hero" smooth={true} duration={500} className="flex items-center">
              <img 
                // src="/src/assets/logo.jpg" 
                alt="Company Logo"
                className="h-10" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="about" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">About Us</Link>
            <Link to="services" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">Services</Link>
            <Link to="testimonials" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">Testimonials</Link>
            <Link to="calculator" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">Calculator</Link>
            <Link to="contact" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">Contact Us</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={openWhatsApp}
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Get Started
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} pt-20 md:hidden`}>
        <div className="container mx-auto px-6 flex flex-col space-y-6">
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="testimonials" 
            smooth={true} 
            duration={500} 
            className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link 
            to="calculator" 
            smooth={true} 
            duration={500} 
            className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Calculator
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          
          <button 
            onClick={() => {
              openWhatsApp();
              setIsMenuOpen(false);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 mt-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;