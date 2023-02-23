import Image from "next/image";
import { useState } from "react";
import Button from "./ui/Button";

type Language = 'jp' | 'en';

interface AboutProps {
    language: Language
}

interface SectionContent {
    jp: string;
    en: string;
}

interface Item {
    path: string;
    name: string;
}

const About: React.FC<AboutProps> = ({ language }) => {

    const [viewAll, setViewAll] = useState<boolean>(false);

    const handleViewAllClick = () => {
        setViewAll(v => !v);
    }

    const title: SectionContent = {
        jp: "プロフィール",
        en: "About me",
    };

    const aboutContent: SectionContent = {
        jp: `ジロ・フロリアンと申します。
        フランス人のフロントエンドエンジニアです。
        
        現在フランス在住で、今後挑戦心を持って
        日本の国際的な企業でWebエンジニアとして就職したく存じます。
        大学での日本語の勉強と日本での職務経験があるため、
        日本語、英語、そして母語のフランス語で対応が可能です。
        
        現在フリーランスでサイト制作の経験を積め、
        今後Web開発者のチームと働ける準備ができております。
        
        何卒宜しくお願い致します。`,
        en: `Hi 👋 I am Florian J. Giraud.
        I am a French junior web developer currently looking for a front-end developer position in an international company!
        At the moment I am living in France but I am open to start working abroad 🌍 
        My background in Japanese studies and work experience in Japan has allowed me to be familiar with diverse teams using Japanese🇯🇵, English🇬🇧 and French🇫🇷 on a professional level. 
        I can quickly adapt to change and I love learning new things everyday!`,
    };

    const tech: Item[] = [
        {
            path: "html.png",
            name: "HTML"
        },
        {
            path: "sass.png",
            name: "Sass (SCSS)"
        },
        {
            path: "js.png",
            name: "JavaScript"
        },
        {
            path: "ts.png",
            name: "TypeScript"
        },
        {
            path: "react.png",
            name: "React.js"
        },
        {
            path: "next.png",
            name: "Next.js"
        },
        {
            path: "php.png",
            name: "php"
        },
    ]

    const btnMore: SectionContent = {
        jp: '続きを読む',
        en: 'Read more'
    }

    const btnLess: SectionContent = {
        jp: '閉じる',
        en: 'Close'
    }

    return (
        <section id="about" className={`
        ${!viewAll ? "md:h-screen " : ""} 
        w-screen snap-start bg-[url('/about/about-bg_sp.png')] sm:bg-[url('/about/about-bg.png')] 
        sm:bg-cover bg-contain bg-fixed bg-no-repeat bg-right sm:bg-top`}>
            <div className="flex justify-center">
                <h2 className={`
            relative mt-4 md:mt-11 text-xl text-center font-title p-4 relative
            before:absolute before:bg-skills ${language === "en" ? "before:w-3/5 before:left-6" : "before:w-2/3 before:left-7"} before:h-1 before:bottom-3`}>
                    {title[language as keyof SectionContent]}
                </h2>
            </div>
            <div className={`${!viewAll ? "md:h-[86vh] " : ""} flex md:justify-around items-center flex-col md:flex-row`}>
                <div className="md:max-w-sm lg:max-w-lg flex flex-col items-center md:items-start py-5 px-3">
                    <div className="whitespace-pre-line">{aboutContent[language as keyof SectionContent]}</div>
                    {viewAll &&
                        <>
                            <h4 className="mt-4 text-xl font-title">Skills & Technologies</h4>
                            <ul className="flex justify-around items-center flex-wrap p-2 gap-2">
                                {tech.map((item, index: number) =>
                                    <li key={item.name + index}>
                                        <Image src={`/tech/${item.path}`} alt={item.name} width={55} height={55} />
                                    </li>
                                )}
                            </ul>

                            <ul className="my-2">
                                <li className="mb-1">🚀 CSS: Sass (SCSS), PostCSS, BEM naming, Bootstrap, Tailwind</li>
                                <li className="mb-1">🚀 JAM stack: React.js, Next.js, Strapi, TypeScript</li>
                                <li className="mb-1">🚀 LAMP/MAMP stack: JavaScript, Php, Symfony, Kirby, Wordpress, SQL, Merise methodology</li>
                                <li className="mb-1">🚀 Tools: Webpack, Parcel, jQuery</li>
                                <li className="mb-1">🚀 Design: Photoshop, Indesign, Balsamiq, Figma</li>
                                <li className="mb-1">🚀 Project management: Agile methodology, Scrum, Trello</li>
                            </ul>

                            <h4 className="mt-2 text-xl font-title">Social media</h4>
                            <div className="flex justify-center items-center md:justify-start flex-wrap p-2 gap-2 w-full">
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


                        </>
                    }
                    <div className="mt-4 px-10 md:px-0 w-full sm:w-auto">
                        <Button style={'secondary'} click={handleViewAllClick} content={!viewAll ? btnMore[language as keyof SectionContent] : btnLess[language as keyof SectionContent]} />
                    </div>
                </div>
                <Image src="/about/about-pic.png" alt="Picture of me" width={400} height={400} className={`${!viewAll ? "hidden md:block" : ""} md:self-end`} />
            </div>
        </section>
    )
}

export default About;
