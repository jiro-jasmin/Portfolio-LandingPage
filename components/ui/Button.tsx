import { useState } from "react";

interface ButtonProps {
    style: btnStyle,
    content: string,
    click?: () => void,
    small?: boolean
}

type btnStyle = "primary" | "secondary"

const Button: React.FC<ButtonProps> = ({ style, content, click, small }) => {

    const [hovered, setHovered] = useState<boolean>(false);
    const toggleHover = (): void => {
        if (style === "secondary") {
            setHovered(!hovered)
        }
    };

    const btnClass = (style: btnStyle): string => {
        if (style === "primary") {
            return `font-sans px-8 py-2 rounded-full sm:rounded-lg bg-primary text-white 
            hover:brightness-105 hover:bg-primary-hover shadow-lg hover:shadow-[#79A4FF] hover:scale-105 transition-all duration-300 ease-in-out
            w-full sm:w-auto ${small === true ? "text-base" : "text-lg sm:text-base"}`
        } else if (style === "secondary") {
            return `${hovered ? 'bg-secondary-hover ' : 'bg-skills '}
            font-sans text-base px-8 py-2 rounded-full sm:rounded-lg text-white bg-skills
            hover:brightness-105 shadow-lg hover:shadow-[#E5BCCF] hover:scale-105 transition-all duration-300 ease-in-out
            w-full sm:w-auto text-lg sm:text-base`
        }
        return btnClass("primary");
    }

    return (
        <button className={btnClass(style)}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={click}
        >
            {content}
        </button>
    );
}

export default Button;