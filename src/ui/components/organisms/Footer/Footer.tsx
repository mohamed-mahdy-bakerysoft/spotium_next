"use client";

import { Container } from "@/src/ui/components/atoms/Container";
import { CopyrightNotice } from "@/src/ui/components/atoms/CopyrightNotice";

export const Footer = () => {
    return (
        <footer>
            <Container className="flex justify-center items-center py-[1.5rem]">
                <CopyrightNotice />
            </Container>
        </footer>
    );
};