import Image from "next/image";
import Button from "./ui/Button";

type Language = 'jp' | 'en';

interface HomeSectionProps {
    language: Language
}

interface SectionContent {
    jp: string;
    en: string;
}

interface ListContent {
    jp: string[],
    en: string[]
}


const HomeSection: React.FC<HomeSectionProps> = ({ language }) => {

    const job: SectionContent = {
        jp: "web開発",
        en: "web developer"
    };

    const description: ListContent = {
        jp: [
            "26歳",
            "フランスのマルセイユ在住",
            "日本語、英語とフランス語可能"
        ],
        en: [
            "26 y.o",
            "Based in Marseille, France",
            "Available in English, French & Japanese"
        ]
    };

    const catchPhrase: SectionContent = {
        jp: `🌏 人間の言語からプログラミング言語へ 💻
        国境を超えてユーザーを獲得するために、
        あなたのインパクトのある
        ウェブアプリを制作します！`,
        en: `🌏 From human language 
        to programming language 💻
        I will create your next impactful web app to engage users across borders!`
    };

    const btn: SectionContent = {
        jp: 'お問い合わせ',
        en: 'Contact me'
    }

    return (
        <section className="
        md:h-screen sm:min-h-[550px] w-screen snap-start animate-[fade-in_1s_ease_both] 
        flex items-center flex-col justify-center sm:justify-start pt-20 pb-6 md:pb-0
        md:justify-center
        ">

            <div className="sm:self-start px-4 flex flex-col items-center sm:items-start md:flex-row md:items-center md:w-full md:justify-between">
                <h1 className="font-title text-6xl text-transparent bg-clip-text bg-gradient-to-t from-[#8f8cf7] to-[#d6a3fb]">
                    JIRO JASMIN
                </h1>
                <span className="font-title text-5xl text-center text-[#8f8cf7]">
                    {job[language as keyof SectionContent]}
                </span>
            </div>

            <Image
                src="/header/banner.png"
                alt="Picture of me"
                width={550}
                height={550}
                className="px-2 sm:absolute sm:z-[-1] sm:-bottom-0 sm:px-12 md:px-0"
            />

            <div className="px-10 w-full mb-4 sm:flex sm:justify-center sm:absolute sm:top-[480px] md:static md:w-auto md:self-start md:px-4 md:order-last">
                <a href="mailto:florianj.giraud@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button style={'primary'} content={btn[language as keyof SectionContent]} />
                </a>
            </div>

            <div className="text-center md:flex md:w-full md:px-4 md:justify-between">
                <ul className="text-lg sm:absolute sm:right-4 sm:top-24 sm:text-right md:static md:text-left ">{description[language as keyof ListContent].map((item, index) =>
                    <li key={item + index}>{item}</li>
                )}
                </ul>

                <div className={`md:text-right whitespace-pre-line my-3 mx-4 
                sm:absolute ${language === "en" ? " sm:top-[380px]" : "sm:top-[360px]" } sm:left-1/2 sm:-translate-x-1/2 sm:w-full 
                md:static md:translate-x-0 md:m-0 md:max-w-[350px]`}>
                    {catchPhrase[language as keyof SectionContent]}
                </div>
            </div>



        </section>
    )
}

export default HomeSection;
