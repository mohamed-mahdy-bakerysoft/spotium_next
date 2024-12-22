"use client";

import Image from "next/image";

export const Logo = () => {
    return (
        <div className="relative w-[15.177rem] h-[4.1rem]">
            <Image src="/header/logo.svg" alt="Logo" fill className="object-contain object-center" />
        </div>
    );
};