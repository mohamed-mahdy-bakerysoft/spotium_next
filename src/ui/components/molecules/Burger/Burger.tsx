"use client";

import { cn } from "@/src/utils/cn";
import { useState } from "react";

const transitions = "transition-all duration-300 ease-in-out before:transition-all before:duration-300 before:ease-in-out after:transition-all after:duration-300 after:ease-in-out";
const before = "before:content-[''] before:absolute before:left-[30%] before:top-[50%] before:w-[1rem] before:h-[1rem] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-regalBlack before:rounded-[50%]";
const after = "after:content-[''] after:absolute after:right-[30%] after:top-[50%] after:w-[1rem] after:h-[1rem] after:translate-x-[50%] after:translate-y-[-50%] after:bg-regalBlack after:rounded-[50%]";
const hoverBefore = "before:top-[30%] before:left-[50%] before:w-[2.719rem] before:h-[2.719rem]";
const hoverAfter = "after:top-[80%] after:right-[50%]";

export const Burger = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex justify-center items-center cursor-pointer"
        >
            <div
                className="uppercase text-[4.8rem] font-bebas"
            >
                Menu
            </div>
            <div className="w-[6.359rem] h-[6.359rem] flex justify-center items-center">
                <div className={cn(
                    "w-full h-[4.28rem] bg-regalWhite rounded-[3rem] relative",
                    transitions,
                    before,
                    after,
                    isHovered && "w-[4.28rem] h-full",
                    isHovered && hoverBefore,
                    isHovered && hoverAfter
                )} />
            </div>
        </div>
    );
};