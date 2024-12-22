"use client";

import { Logo } from "@/src/ui/components/molecules/Logo";
import { Container } from "@/src/ui/components/atoms/Container";

export const Header = () => {

    return (
        <header>
            <Container>
                <Logo />
            </Container>
        </header>
    );
};