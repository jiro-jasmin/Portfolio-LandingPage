import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Project from "./Project";
import Button from "./ui/Button";

type Language = 'jp' | 'en';

interface ProjectsProps {
    language: Language
}

interface TitleContent {
    jp: string;
    en: string;
}

interface SectionContent {
    jp: Card[],
    en: Card[]
}

type Card = {
    title: string,
    imagepath: string,
    videopath?: string,
    description: string,
    tags: string[]
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {

    const [selectedItem, setSelectedItem] = useState<Card | null>(null);
    const [viewAll, setViewAll] = useState<boolean>(false);

    const handleItemClick = (item: Card) => {
        setSelectedItem(item);
    };

    const handleCloseClick = () => {
        setSelectedItem(null);
    };

    useEffect(() => {
        if (selectedItem) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [selectedItem]);


    const handleViewAllClick = () => {
        setViewAll(v => !v);
    }

    const title: TitleContent = {
        jp: "プロジェクト",
        en: "Projects",
    };


    const projectsContent: SectionContent = {
        jp: [
            {
                title: "premier projet",
                imagepath: "/preview.png",
                videopath: "j5-WIgR2ifk",
                description: "cv en fr",
                tags: ["javascript", "php"]

            },
            {
                title: "deuxieme projet",
                imagepath: "/preview.png",
                description: "cv en en",
                tags: ["css", "php"]

            },
            {
                title: "troisieme projet",
                imagepath: "/preview.png",
                description: "cv en jp",
                tags: ["javascript", "jquery"]

            },
            {
                title: "quatrieme projet",
                imagepath: "/",
                description: "cv en jp",
                tags: ["javascript", "php"]
            },
            {
                title: "premier projet",
                imagepath: "/preview.png",
                description: "cv en fr",
                tags: ["javascript", "php"]

            },
            {
                title: "deuxieme projet",
                imagepath: "/preview.png",
                description: "cv en en",
                tags: ["css", "php"]

            },
            {
                title: "troisieme projet",
                imagepath: "/preview.png",
                description: "cv en jp",
                tags: ["javascript", "jquery"]

            },
            {
                title: "quatrieme projet",
                imagepath: "/",
                description: "cv en jp",
                tags: ["javascript", "php"]
            },

        ],
        en: [
            {
                title: "first project",
                imagepath: "/preview.png",
                description: "cv en fr",
                tags: ["javascript", "php"]
            },
            {
                title: "second project",
                imagepath: "/preview.png",
                description: "cv en en",
                tags: ["javascript", "php"]
            },
            {
                title: "third project",
                imagepath: "/preview.png",
                description: "cv en jp",
                tags: ["jquery", "php"]
            },
            {
                title: "fourth project",
                imagepath: "/",
                description: "cv en jp",
                tags: ["javascript", "php"]
            },
        ]
    };

    const btnMore: TitleContent = {
        jp: 'もっと見る',
        en: 'View more'
    }

    const btnLess: TitleContent = {
        jp: '閉じる',
        en: 'View less'
    }

    return (
        <section id="projects" className={`${!viewAll ? "min-[1032px]:h-screen" : ""} w-screen snap-start`}>
            <div className="flex justify-center items-center">
                <h2 className={`
            relative mt-4 md:mt-11 text-xl text-center font-title p-4 relative
            before:absolute before:bg-skills ${language === "en" ? "before:w-3/5 before:left-5" : "before:w-2/3 before:left-6 "} before:h-1 before:bottom-3`}>
                    {title[language as keyof TitleContent]}
                </h2>
            </div>
            <ul className="flex flex-wrap place-content-around place-items-center px-1 sm:px-0">
                {projectsContent[language as keyof SectionContent].slice(0, 3).map((item: Card, index: number) =>
                    <Project item={item} handleClick={handleItemClick} key={item.title + index} />
                )}
                {/* "View all items" start from item at index 3 */}
                {viewAll && projectsContent[language as keyof SectionContent].slice(3).map((item: Card, index: number) =>
                    <Project item={item} handleClick={handleItemClick} key={item.title + index} />
                )}
            </ul>
            <div className="flex justify-center my-8 mx-16">
                {!viewAll ?
                    <Button style={'primary'} click={handleViewAllClick} content={btnMore[language as keyof TitleContent]} />
                    :
                    <Link href="#projects" className="w-full sm:w-auto">
                        <Button style={'primary'} click={handleViewAllClick} content={btnLess[language as keyof TitleContent]} />
                    </Link>
                }
            </div>

            {selectedItem && (
                <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 w-[90vw] h-[90vh]
                 p-6 rounded-2xl bg-white drop-shadow-2xl overflow-y-auto">
                    <button
                        className="burger open absolute top-2 right-2"
                        title="Close window"
                        onClick={handleCloseClick}>
                        <span className="burger__top-bun w-7 h-0.5 absolute bg-[#8696FA] rotate-0 -translate-x-3 -translate-y-1.5"></span>
                        <span className="burger__bottom-bun w-7 h-0.5 absolute bg-[#8696FA] rotate-0  -translate-x-3 translate-y-0.5"></span>
                    </button>

                    <div className="flex flex-col items-center md:block">
                        <h3 className="font-title text-2xl">{selectedItem.title}</h3>
                        <div className="text-slate-400">{selectedItem.description}</div>
                        <div className="my-4 flex justify-center md:block">{selectedItem.tags.map((tag, index: number) =>
                            <span className="py-0.5 px-6 mr-2 text-white text-sm bg-[#A66DD5] rounded-full" key={tag + index}>
                                {tag}
                            </span>
                        )}
                        </div>
                        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
                            <div className="md:w-3/4 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi, voluptatum enim aliquid unde tempore expedita ab optio sapiente! Sequi magni veniam nobis quo deserunt debitis quidem nisi, itaque deleniti.</div>
                            <div className="w-full h-80 md:w-[550px] md:h-[270px] rounded-xl overflow-hidden relative m-2">
                                {selectedItem.videopath !== undefined ?
                                    <iframe
                                        className="w-full h-80 md:w-[550px] md:h-[270px]"
                                        src={`https://www.youtube.com/embed/${selectedItem.videopath}?controls=0`}
                                        title="YouTube video player"
                                        allowFullScreen>
                                    </iframe>
                                    :
                                    <Image src={selectedItem.imagepath} alt="app preview" fill className="object-cover" />
                                }
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:justify-center items-center px-10 sm:px-0 w-full sm:w-auto">
                            <a href="#" target="_blank" rel="noopener" className="text-center w-full sm:w-auto m-2"><Button style={'secondary'} content={'Github'} /></a>
                            <a href="#" target="_blank" rel="noopener" className="text-center w-full sm:w-auto m-2"><Button style={'secondary'} content={'Live Demo'} /></a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects;