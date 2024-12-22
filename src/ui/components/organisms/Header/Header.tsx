"use client";

import { cn } from "@/src/utils/cn";
import Image from "next/image";

export const Header = () => {

    return (
        <header>
            <div
                className={cn(
                    "w-[9.5rem]"
                )}
            >
                <Image src="/logo.svg" alt="Logo" fill />
            </div>
        </header>
    );
};