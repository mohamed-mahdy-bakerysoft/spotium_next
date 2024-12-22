"use client";

import { Logo } from "@/src/ui/components/molecules/Logo";
import { Container } from "@/src/ui/components/atoms/Container";
import { Burger } from "@/src/ui/components/molecules/Burger";

export const Header = () => {

    return (
        <header>
            <Container
                className="flex justify-between items-center"
            >
                <Logo />
                <Burger />
            </Container>
        </header>
    );
};