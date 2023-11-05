import { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import BurgerIcon from "./BurgerIcon";
const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }


    return (
        <header className="padding-x py-8 z-30 w-full fixed bg-white-400 shadow-xl">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Nike logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <BurgerIcon isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className={`mobile-menu fixed top-0 right-0 padding-x py-8 w-full h-full bg-gray-800 transform transition-transform duration-300 z-40 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className="flex justify-end">
                        <button onClick={toggleMobileMenu}>
                            <svg
                                className="w-8 h-8 text-white cursor-pointer"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="h-full grid place-items-center">
                        <ul className="flex flex-col gap-4 items-center align-center">
                            {navLinks.map((item) => (
                                <li key={item.label} onClick={toggleMobileMenu}>
                                    <a href={item.href} className='font-montserrat leading-normal text-2xl p-3 w-[250px] text-white hover:text-blue-500'>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            )}
        </header>
    )
}

export default Nav