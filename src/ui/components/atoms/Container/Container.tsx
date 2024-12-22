"use client";

import { cn } from "@/src/utils/cn";

interface ContainerType {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerType) => {

    return (
        <div className={cn("w-full px-[5rem] py-[3rem]", className)}>
            {children}
        </div>
    );
};