"use client";

interface ContainerType {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerType) => {

    return (
        <div className="w-full px-[5rem] py-[3rem]">
            {children}
        </div>
    );
};