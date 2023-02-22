import Image from "next/image";

type Language = 'jp' | 'en';

interface SkillsProps {
    language: Language
}

interface TitleContent {
    jp: string;
    en: string;
}

interface Item {
    path: string;
    name: string
}

const Skills: React.FC<SkillsProps> = ({ language }) => {

    const title: TitleContent = {
        jp: "技術",
        en: "Skills",
    };

    const skills: Item[] = [
        {
            path: "90.png",
            name: "HTML & SCSS"
        },
        {
            path: "80.png",
            name: "JavaScript"
        },
        {
            path: "60.png",
            name: "TypeScript"
        },
        {
            path: "60.png",
            name: "React.js"
        },
        {
            path: "80.png",
            name: "Next.js"
        },
        {
            path: "60.png",
            name: "php"
        },
    ]

    return (
        <section id="skills" className="md:h-screen w-screen snap-start bg-skills relative z-10">
            <div className="flex justify-center items-center">
                <h2 className="relative mt-4 md:mt-11 text-xl text-center font-title p-4 underline underline-offset-8 decoration-4 decoration-white">
                    {title[language as keyof TitleContent]}
                </h2>
            </div>
            <ul className="flex justify-around items-start md:items-center md:h-[70vh] w-full flex-wrap px-6 sm:px-24 py-8 gap-6 lg:gap-0">
                {skills.map((item, index: number) =>
                    <li key={item.name + index}>
                        <Image src={`/skills/${item.path}`} alt={item.name} width={120} height={120} />
                        <div className="text-center text-white m-2">{item.name}</div>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Skills;
