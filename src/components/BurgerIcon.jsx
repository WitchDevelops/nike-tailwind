import { useState } from 'react';

const BurgerIcon = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleBurger = () => {
        setIsActive(!isActive);
    };

    return (
        <div onClick={toggleMobileMenu}>
            <svg
                className={`w-8 h-8 text-gray-500 cursor-pointer transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path className={`${isActive ? 'rotate-45' : ''}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 12h16" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 18h16" />
            </svg>
        </div>
    );
};

export default BurgerIcon;
