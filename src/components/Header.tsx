import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-53.5 flex justify-between items-center bg-[#FFFCF3] sticky md:static top-0 z-50 mx-0 md:py-2">
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <img
            src="/src/assets/logo/company-logo.svg"
            alt="logo"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
        </a>
        
        {/* Mobile menu button - visible on small screens */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Desktop button - hidden on mobile */}
        <div className="hidden md:block">
          <Button text="Get in touch with us" href="/get-in-touch" />
        </div>
      </div>
      
      {/* Mobile menu - shown when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FFFCF3] py-4 px-4 shadow-lg">
          <Button text="Get in touch with us" href="/get-in-touch"  />
        </div>
      )}
    </div>
  );
};

export default Header;