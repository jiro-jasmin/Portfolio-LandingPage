import Image from "next/image";
import Link from "next/link";

type Language = 'jp' | 'en';

interface FooterProps {
    language: Language
}

interface SectionContent {
    jp: MenuItem[],
    en: MenuItem[]
}

type MenuItem = {
    name: string,
    path: string
}

const Footer: React.FC<FooterProps> = ({ language }) => {

    const menu: SectionContent = {
        jp: [
            { name: "技術", path: "#skills" },
            { name: "プロフィール", path: "#about" },
            { name: "応募書類", path: "#resume" },
            { name: "プロジェクト", path: "#projects" },
            { name: "お問い合わせ", path: "#contact" }
        ],
        en: [
            { name: "Skills", path: "#skills" },
            { name: "About", path: "#about" },
            { name: "Resume", path: "#resume" },
            { name: "Projects", path: "#projects" },
            { name: "Contact", path: "#contact" }

        ]
    };

    return (
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-sm md:text-base text-slate-400 snap-center">
            <Link href="#" aria-label="back to top" title="Back to top">
                <Image src="/header/logo.png" alt="logo" width={60} height={50} />
            </Link>
            <p className="py-4 sm:py-0 text-center order-last sm:absolute sm:left-1/2 sm:-translate-x-1/2">Florian J. Giraud 2023</p>
            <div className="flex justify-center sm:justify-between items-center flex-wrap gap-2 order-2 sm:order-none">
                <a
                    href="mailto:florianj.giraud@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                    aria-label="Email"
                    tabIndex={0} >
                    <Image src="/socials/mail.png" alt="Email" width={50} height={50} className="rounded-full hover:brightness-105 hover:shadow-md hover:shadow-[#E5BCCF] transition-all duration-300" />
                </a>
                <a
                    href="tel:+33625606928"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Telephone"
                    aria-label="Telephone"
                    tabIndex={0} >
                    <Image src="/socials/phone.png" alt="Phone" width={50} height={50} className="rounded-full hover:brightness-105 hover:shadow-md hover:shadow-[#E5BCCF] transition-all duration-300" />
                </a>
                <a
                    href="https://www.linkedin.com/in/jiro-jasmin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    aria-label="LinkedIn profile"
                    tabIndex={0} >
                    <Image src="/socials/linkedin.png" alt="LinkedIn" width={50} height={50} className="rounded-full hover:brightness-105 hover:shadow-md hover:shadow-[#E5BCCF] transition-all duration-300" />
                </a>
                <a
                    href="https://github.com/jiro-jasmin"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    title="Github"
                    tabIndex={0} >
                    <Image src="/socials/github.png" alt="Github" width={50} height={50} className="rounded-full hover:brightness-105 hover:shadow-md hover:shadow-[#E5BCCF] transition-all duration-300" />
                </a>
            </div>

            <ul className="sm:hidden flex flex-wrap text-center w-60 items-center justify-center">
                {menu[language as keyof SectionContent].map((item: MenuItem, index: number) =>
                    <li key={item.name + index} className="my-4">
                        <Link
                            href={item.path}
                            scroll={false}
                            className={`px-2 ${language === "en" ? "mx-6" : "mx-4"}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Footer;
