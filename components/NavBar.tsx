import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LanguageToggler from "./LanguageToggler";
import Button from "./ui/Button";

type Language = 'jp' | 'en';

interface NavBarProps {
    defaultLanguage: Language,
    onLanguageChange: (newLanguage: Language) => void
}

interface SectionContent {
    jp: MenuItem[],
    en: MenuItem[]
}

type MenuItem = {
    name: string,
    path: string
}

interface TitleContent {
    jp: string,
    en: string
}

const NavBar: React.FC<NavBarProps> = ({ defaultLanguage, onLanguageChange }) => {

    const menu: SectionContent = {
        jp: [
            { name: "技術", path: "#skills" },
            { name: "プロフィール", path: "#about" },
            { name: "応募書類", path: "#resume" },
            { name: "プロジェクト", path: "#projects" }
        ],
        en: [
            { name: "Skills", path: "#skills" },
            { name: "About", path: "#about" },
            { name: "Resume", path: "#resume" },
            { name: "Projects", path: "#projects" }
        ]
    };

    const btnContact: TitleContent = {
        jp: "お問い合わせ",
        en: "Contact me"
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close navbar if click outside of navbar while menu is open
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Add event listener to document on mount
        document.addEventListener('click', handleDocumentClick);

        // Remove event listener on unmount
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleDocumentClick = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            // Clicked outside of navbar, close navbar
            setMenuOpen(false);
        }
    };

    // Close menu on item in navbar but item is not a nav li item
    const closeMenu = () => {
        if (menuOpen) {
            toggleMenu();
        }
    }

    return (
        <nav className="flex justify-between items-center h-14 font-title" ref={navbarRef}>
            <div className="text-4xl lg:w-60 relative z-40 px-4">
                <Link href="#" aria-label="back to top" title="Back to top" onClick={closeMenu}>
                <Image src="/header/logo-header.png" alt="Jiro Jasmin" width={40} height={40} className="hover:brightness-110 transition-all duration-300" />
                {/* <div className="font-title text-4xl text-transparent bg-clip-text bg-gradient-to-t from-[#8f8cf7] to-[#d6a3fb]">JJ</div> */}
                </Link>
            </div>

            <div
                className={`${menuOpen ? "block" : "hidden"
                    } md:block md:flex-grow md:items-center md:w-auto`}
            >
                <ul
                    className={`${menuOpen ? "bg-white pt-16 md:pt-0 " : ""} flex flex-col text-center lg:text-lg absolute top-0 right-0 w-full
                    md:flex-row md:static md:justify-end md:items-center md:bg-transparent
                    animate-[slide_0.5s_ease_both]`}
                >
                    {menu[defaultLanguage as keyof SectionContent].map((item: MenuItem, index: number) =>
                        <li key={item.name + index} className="my-4 md:border-r-2 md:border-[#8696FA]">
                            <Link
                                href={item.path}
                                scroll={false}
                                className={`
                                ${defaultLanguage === "en" ? "px-10 md:px-8 " : "px-4" }
                                hover:text-[#8F8CF7] transition-all ease-in-out`}
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )}
                    <li className="my-4 px-10 md:px-8">
                        <LanguageToggler defaultLanguage={defaultLanguage} onLanguageChange={onLanguageChange} />
                    </li>
                </ul>
            </div>
            <div className="fixed left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:mr-4 md:relative z-50">
                <a href="mailto:florianj.giraud@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button style={'primary'} content={btnContact[defaultLanguage as keyof TitleContent]} small={true} />
                </a>
            </div>
            <div className="flex md:hidden px-4">
                <button
                    onClick={toggleMenu}
                    type="button"
                    className={`${menuOpen ? "open " : ""}burger hover:text-sky-500 transition-all`}
                    title="Menu"
                >
                    <span className="burger__top-bun w-7 h-0.5 absolute bg-[#8696FA] rotate-0 transition-all duration-500 -translate-x-3 -translate-y-1.5"></span>
                    <span className="burger__bottom-bun w-7 h-0.5 absolute bg-[#8696FA] rotate-0 transition-all duration-500 -translate-x-3 translate-y-0.5"></span>
                </button>
            </div>
        </nav>

    );
};

export default NavBar;