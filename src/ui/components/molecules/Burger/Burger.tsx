"use client";

import { useState } from "react";

import { BurgerButton } from "@/src/ui/components/atoms/BurgerButton";
import { cn } from "@/src/utils/cn";

export const Burger = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex justify-center items-center gap-x-[1.5rem] cursor-pointer"
        >
            <div className={cn(
                "uppercase text-[4.8rem] font-bebas tracking-wide transition-opacity duration-300 ease-in-out select-none"
            )}>
                Menu
            </div>
            <BurgerButton isHovered={isHovered} />
        </div>
    );
};