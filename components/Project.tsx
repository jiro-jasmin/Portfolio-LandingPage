import Image from "next/image";

type Language = 'jp' | 'en';

interface ProjectProps {
    item: Card,
    handleClick: (item: Card) => void,
    language: Language
}

type Card = {
    title: string,
    features: string,
    imagepath: string,
    videopath?: string,
    description: { 
        jp: string,
        en: string
    },
    tags: string[],
    github: string,
    livedemo?: string
}


const Project: React.FC<ProjectProps> = ({ item, handleClick, language }) => {
    return (
        <li

            className="m-3 rounded-2xl w-full sm:w-80 min-[1160px]:w-[360px] h-[340px] bg-white shadow-xl shadow-[#b0aee2] cursor-pointer
                    hover:brightness-105 hover:shadow-[#b0aee2] hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={() => handleClick(item)}>
            <div className="w-full h-3/5 bg-white rounded-t-xl overflow-hidden relative">
                <Image src={`/projects/${item.imagepath}`} alt="app preview" fill sizes="360px" className="object-cover" />
            </div>
            <div className="m-6">
                <h3 className="font-title text-xl">{item.title}</h3>
                <div className="text-slate-400">{item.description[language]}</div>
                <div className="my-4">{item.tags.map((tag, index: number) =>
                    <span className="py-0.5 px-6 mr-2 text-white text-sm bg-[#A66DD5] rounded-full" key={tag + index}>
                        {tag}
                    </span>
                )}
                </div>
            </div>
        </li>
    );
}

export default Project;