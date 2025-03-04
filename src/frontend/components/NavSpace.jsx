import React, { useState } from 'react';
// import './App.css';

 function NavSpace() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="">
               
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {isMobileMenuOpen && (
                    <button className="close-menu" onClick={toggleMobileMenu}>→</button>
                )}

                <div className="logo-image-nav"></div>
                <a href="#initial-home"onClick={closeMobileMenu}>Home</a>
                <a href="#aboutme"onClick={closeMobileMenu}>About</a>
                <a href="#services" onClick={closeMobileMenu}>Services</a>
                <a href="#contact"onClick={closeMobileMenu}>Contact</a>
            </div>
            
               
            
        </div>
    );
}
export default NavSpace;
