import Image from "next/image";

type Language = 'jp' | 'en';

interface ContactProps {
    language: Language
}

interface SectionContent {
    jp: string;
    en: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {

    const title: SectionContent = {
        jp: "お問い合わせ",
        en: "Contact",
    };

    const title2: SectionContent = {
        jp: "ご連絡をお待ちしております！",
        en: "Drop me a message!",
    };

    const message: SectionContent = {
        jp: `カジュアル面談、プロジェクト計画や、
        このポートフォリオのフィードバックのある場合など、
        是非ご連絡くださいますようお願い致します。
        ご一緒にお仕事できる機会をお楽しみにしております。`,
        en: `If you would like to have a casual chat, discuss any new project,
        or if you have any feedback on my current projects you would like to share,
        please do not hesitate to reach me directly by email, telephone or on my social networks.
        I am looking forward to working with you!`
    }

    const linkedin: SectionContent = {
        jp: "LinkedInでつながりましょう！",
        en: "Send me a message on LinkedIn!",
    };


    return (
        <section id="contact" className="md:h-screen md:min-h-[550px] w-screen snap-start bg-contact rounded-t-[70px] sm:rounded-t-[100px] text-white">
            <div className="flex justify-center">
                <h2 className="relative mt-4 md:mt-11 text-xl text-center font-title p-4 underline underline-offset-8 decoration-4 decoration-white">
                    {title[language as keyof SectionContent]}
                </h2>
            </div>
            <div className="flex justify-center flex-col md:flex-row md:gap-6 items-center md:items-end md:h-[60vh] md:min-h-[300px] mx-4 mt-5 pb-12">
                <div className="md:w-80 md:mb-7">
                    <h3 className="text-xl my-4">
                        {title2[language as keyof SectionContent]}
                    </h3>
                    <div className="whitespace-pre-line text-justify">
                        {message[language as keyof SectionContent]}
                    </div>
                </div>
                <div className="flex flex-col items-start my-4 md:w-80">
                    <div className="flex items-center gap-8 m-3">
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
                            href="tel:+33625606928"
                            target="_blank"
                            rel="noopener noreferrer" >
                            +33 625 606 928
                        </a>

                    </div>
                    <div className="flex items-center gap-8 m-3">
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
                            href="mailto:florianj.giraud@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer" >
                            florianj.giraud@gmail.com
                        </a>

                    </div>
                    <div className="flex items-center gap-8 m-3">
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
                            href="https://www.linkedin.com/in/jiro-jasmin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile" >
                            Florian J. Giraud
                            <p className="text-sm">{linkedin[language as keyof SectionContent]}</p>
                        </a>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Contact;