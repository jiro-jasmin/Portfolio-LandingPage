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

    const features: TitleContent = {
        jp: "特徴",
        en: "Features",
    };

    const btnMore: TitleContent = {
        jp: 'もっと見る',
        en: 'View more'
    };

    const btnLess: TitleContent = {
        jp: '閉じる',
        en: 'View less'
    };

    const projectsContent: Card[] = [
        {
            title: "Pickify",
            imagepath: "pickify.png",
            description: {
                en: "Music player",
                jp: "音楽配信サイト"
            },
            tags: ["TypeScript", "Next.js"],
            github: "https://github.com/jiro-jasmin/Pickify",
            livedemo: "https://pickify.vercel.app/",
            videopath: "YhD31XVDDns",
            features: `🚀 TypeScript, React, Next.js
            🚀 React-Icons for easy-to-use SVG
            🚀 Next.js built-in CSS modules for styling
            🚀 Async call to retrieve data 
            🚀 Handle song change while music is being both played and paused
            🚀 Spotify inspired UI`
        },
        {
            title: "Blog",
            imagepath: "blog.png",
            description: {
                en: "My blog w/ Strapi headless CMS",
                jp: "CMSのStrapiを使ったブログ"
            },
            tags: ["Next.js", "Strapi"],
            github: "https://github.com/jiro-jasmin/Blog",
            videopath: "pqqSpC_XyhI",
            features: `🚀 React with Next.js
            🚀 Strapi the headless CMS
            🚀 Sass (SCSS)
            🚀 Axios for static generation with default data
            🚀 SWR for client-side data fetching
            🚀 Markdown-it, a markdown parser when uploading data from the panel (from .md to .html)
            🚀 Next-themes, a dark/light theme toggler 
            🚀 Material Design inspired UI
            🚀 Client-side form data validation when uploading a comment`
        },
        {
            title: "Fabiola Amaudric du Chaffaut",
            imagepath: "fabiola.png",
            description: {
                en: "Visual artist's portfolio",
                jp: "現代アーティストのポートフォリオ"
            },
            tags: ["JavaScript", "php"],
            github: "https://github.com/jiro-jasmin/Artist-s-portfolio",
            livedemo: "https://fabiolaamaudricduchaffaut.fr/",
            videopath: "9_cJaUuS97U",
            features: `🚀 Native PHP, JavaScript and CSS
                🚀 Kirby, the flat CMS
                🚀 Dynamic pages with French/English toggler
                🚀 Customable and responsive animation on homepage, and responsive animation on scroll for the works' menu
                🚀 Custom admin panel made with Kirby CMS
                🚀 Manageable SEO with Kirby Meta plugin`
        },
        {
            title: "Portfolio",
            imagepath: "portfolio.png",
            description: {
                en: "SEO-friendly landing page",
                jp: "SEOを意識したランディングページ"
            },
            tags: ["TypeScript", "Next.js"],
            github: "https://github.com/jiro-jasmin/Portfolio-LandingPage",
            features: `This project is the website you are currently visiting !  
              
                🚀 TypeScript, React, Next.js
                🚀 Dynamic pages with English/Japanese language toggler
                🚀 Mobile first approach with Tailwind & fully responsive
                🚀 SEO-friendly single page app including light-weight Next.js images, use of key expressions & call-to-action button
                🚀 Collaborative project: user-friendly & modern UI design made by Noelie Karoum (http://noeliekaroumportfolio.com/)`
        },
        {
            title: "Hot Burgers",
            imagepath: "hotburgers.png",
            description: {
                en: "E-commerce w/ admin panel",
                jp: "ECサイトと管理画面"
            },
            tags: ["JavaScript", "php", "SQL"],
            github: "https://github.com/jiro-jasmin/Hot-Burgers",
            livedemo: "https://hotburgers-berlin.000webhostapp.com/",
            videopath: "9IDCPDBPxUg",
            features: `🚀 Native PHP, Javascript
                🚀 SQL 
                🚀 Bootstrap & a bit of CSS
                🚀 SQL database connection using both PDO and mysqli PHP classes
                🚀 Handling cart with session storage in Javascript
                🚀 Authentication (sign up & sign in with password hash) in PHP
                🚀 Custom admin panel which allow the user to CRUD (Create, Read, Update, Delete) any items in the database through forms in PHP
                🚀 Server-side form data validation`
        },
        {
            title: "Snake Game",
            imagepath: "snake.png",
            description: {
                en: "Video game using OOP",
                jp: "オブジェクト指向でのビデオゲーム"
            },
            tags: ["JavaScript"],
            github: "https://github.com/jiro-jasmin/jiro-jasmin.github.io/tree/main/js_snake",
            livedemo: "https://jiro-jasmin.github.io/js_snake/",
            videopath: "p3Vsh3mpcng",
            features: `🚀 Native JavaScript & CSS
                🚀 Object Oriented Programming
                🚀 HTML canvas
                🚀 Sounds on event`
        },
        {
            title: "Choose Your Character",
            imagepath: "choose.png",
            description: {
                en: "Responsive animation",
                jp: "レスポンシブなアニメーション"
            },
            tags: ["JavaScript", "jQuery"],
            github: "https://github.com/jiro-jasmin/jiro-jasmin.github.io/tree/main/jquery_charac",
            livedemo: "https://jiro-jasmin.github.io/jquery_charac/",
            videopath: "Gjx9pUPNKTs",
            features: `🚀 JavaScript with jQuery library
                🚀 Responsive animation: cards list on desktop and carousel on mobile
                🚀 Audio on click (as well as background music if your browser does not automatically block it)
                🚀 On desktop, buttons at the bottom are linked with the cards through the DOM`
        },
        {
            title: "La Pizza de Marseille",
            imagepath: "pizza.png",
            description: {
                en: "Restaurant website",
                jp: "レストラン情報"
            },
            tags: ["JavaScript", "php"],
            github: "https://github.com/jiro-jasmin/La-Pizza-de-Marseille",
            livedemo: "https://pizza-marseille.000webhostapp.com/",
            videopath: "646WPLIC8dY",
            features: `🚀 Native php
                🚀 .tsv table and .txt files for data
                🚀 Bootstrap & a bit of CSS
                🚀 Dynamic contact page displaying current opening state of the shop (based on the current French timestamp)
                🚀 Form with GET method to calculate final price and create a custom pizza
                🚀 Views count of the whole website displayed in the footer (create and upload a new file each day there is a new visitor)`
        },
        {
            title: "My Movie List",
            imagepath: "todo.png",
            description: {
                en: "To-do list",
                jp: "ToDoリスト"
            },
            tags: ["JavaScript", "Bootstrap"],
            github: "https://github.com/jiro-jasmin/jiro-jasmin.github.io/tree/main/js_todolist",
            livedemo: "https://jiro-jasmin.github.io/js_todolist/",
            videopath: "b6n8kW0fXRo",
            features: `🚀 Native php
                🚀 .tsv table and .txt files for data
                🚀 Bootstrap & a bit of CSS
                🚀 Dynamic contact page displaying current opening state of the shop (based on the current French timestamp)
                🚀 Form with GET method to calculate final price and create a custom pizza
                🚀 Views count of the whole website displayed in the footer (create and upload a new file each day there is a new visitor)`
        },
        {
            title: "Progica",
            imagepath: "progica.png",
            description: {
                en: "Hosting service",
                jp: "宿泊サービス"
            },
            tags: ["php", "Symfony"],
            github: "https://github.com/jiro-jasmin/Progica",
            videopath: "xmWqfdf-avA",
            features: `🚀 php with Symfony framework
            🚀 SQL
            🚀 Bootstrap & a bit of CSS
            🚀 Webpack Encore & Stimulus (JS framework)
            🚀 SQL database connection
            🚀 Authentication (sign up & sign in with password hash)
            🚀 Custom admin panel which allow the user to CRUD (Create, Read, Update, Delete) any items in the database through forms in PHP
            🚀 Server-side form data validation
            🚀 Sending actual email via the contact form (with Mailtrap)`
        },
    ];

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
                {projectsContent.slice(0, 3).map((item: Card, index: number) =>
                    <Project language={language} item={item} handleClick={handleItemClick} key={item.title + index} />
                )}
                {/* "View all items" start from item at index 3 */}
                {viewAll && projectsContent.slice(3).map((item: Card, index: number) =>
                    <Project language={language} item={item} handleClick={handleItemClick} key={item.title + index} />
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

                    <div className="flex flex-col md:block text-center md:text-left">
                        <h3 className="font-title text-2xl">{selectedItem.title}</h3>
                        <div className="text-slate-400">{selectedItem.description[language]}</div>
                        <div className="my-4 flex justify-center md:block">{selectedItem.tags.map((tag, index: number) =>
                            <span className="py-0.5 px-6 mr-2 text-white text-sm bg-[#A66DD5] rounded-full" key={tag + index}>
                                {tag}
                            </span>
                        )}
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div className="md:w-3/4 mb-2 whitespace-pre-line">
                                <h4 className="text-lg font-bold mb-2">{features[language as keyof TitleContent]}</h4>
                                <div className="text-left">
                                    {selectedItem.features}
                                </div>
                            </div>
                            <div className="w-full h-80 md:max-w-[550px] md:h-[270px] rounded-xl overflow-hidden relative m-2">
                                {selectedItem.videopath !== undefined ?
                                    <iframe
                                        className="w-full h-[270px]"
                                        src={`https://www.youtube.com/embed/${selectedItem.videopath}?controls=0`}
                                        title="YouTube video player"
                                        allowFullScreen>
                                    </iframe>
                                    :
                                    selectedItem.livedemo !== undefined ?
                                        <a href={selectedItem.livedemo} target="_blank" rel="noopener noreferrer" title="Visit live demo" aria-label="app live demo">
                                            <Image src={`/projects/${selectedItem.imagepath}`} alt="app preview" fill sizes="550px" className="object-cover" />
                                        </a>
                                        :
                                        <Image src={`/projects/${selectedItem.imagepath}`} alt="app preview" fill sizes="550px" className="object-cover" />
                                }
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:justify-start items-center px-10 sm:px-0 w-full sm:w-auto">
                            <a href={selectedItem.github} target="_blank" rel="noopener noreferrer" className="text-center w-full sm:w-auto m-2 md:ml-0"><Button style={'secondary'} content={'Github'} /></a>
                            {selectedItem.livedemo &&
                                <a href={selectedItem.livedemo} target="_blank" rel="noopener noreferrer" className="text-center w-full sm:w-auto m-2"><Button style={'secondary'} content={'Live Demo'} /></a>
                            }
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects;