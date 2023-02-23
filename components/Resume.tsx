import Image from "next/image";
import Link from "next/link";

type Language = 'jp' | 'en';

interface ResumeProps {
    language: Language
}

interface TitleContent {
    jp: string;
    en: string;
}

type Card = {
    title: string,
    docpath: string,
}

const Resume: React.FC<ResumeProps> = ({ language }) => {

    const title: TitleContent = {
        jp: "応募書類",
        en: "Resume",
    };

    const message: TitleContent = {
        jp: "下記の書類のご検討のほど、よろしくお願いします。",
        en: "You can download my documents down below, in English and in Japanese."
    }

    const resumeContent: Card[] = [
        {
            title: "Resume (English)",
            docpath: "/resume/pdf/FlorianGiraud-Resume.pdf"
        },
        {
            title: "履歴書 (Japanese)",
            docpath: "/resume/pdf/ジロ・履歴書.pdf"
        },
        {
            title: "職務経歴書 (Japanese)",
            docpath: "/resume/pdf/ジロ・職務経歴書.pdf"
        }
    ];

    return (
        <section id="resume" className="md:h-screen w-screen snap-start relative z-10 bg-resume bg-left-bottom sm:bg-[url('/resume/resume-bg.png')] sm:bg-cover">
            <div className="flex justify-center items-center">
                <h2 className="
            relative mt-4 md:mt-11 text-xl text-center font-title p-4 relative
            underline underline-offset-8 decoration-4 decoration-white"
                >
                    {title[language as keyof TitleContent]}
                </h2>
            </div>
            <div className="mx-3 pt-5 pb-2 sm:text-center sm:my-8">
                {message[language as keyof TitleContent]}
            </div>
            <div className="flex justify-center sm:hidden mt-4">
                <Image src="/resume/cv.png" alt="resume" width={200} height={200} />
            </div>
            <ul className="flex flex-col justify-center items-center w-full md:w-auto pb-4 sm:py-8">
                {resumeContent.map((item: Card, index: number) =>
                    <li key={index} className="my-2 w-full flex text-center font-bold sm:justify-center">
                        <Link
                            href={item.docpath}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            aria-label="Download Resume"
                            className="
                            py-3 px-12 sm:px-16 my-3 mx-8 bg-white rounded-full w-full sm:w-80
                            hover:brightness-105 shadow-md hover:shadow-white hover:scale-105 transition-all duration-300 ease-in-out
                            flex justify-between items-center
                            ">
                            <span>{item.title}</span> <Image src="/resume/download.png" alt="download" width={20} height={20} />
                        </Link>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Resume;