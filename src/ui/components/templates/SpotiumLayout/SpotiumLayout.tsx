"use client";

import { useLocale } from "next-intl";

import { Header } from "@/src/ui/components/organisms/Header";
import { Footer } from '@/src/ui/components/organisms/Footer';
import { brains, bebas, dm } from "@/src/utils/fonts";

interface SpotiumLayoutProps {
    children: React.ReactNode;
};

export const SpotiumLayout = ({ children }: SpotiumLayoutProps) => {
    const local = useLocale();

    return (
        <html lang={local}>
            <body className={`${brains.variable} ${bebas.variable} ${dm.variable} ${brains.className} antialiased`}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
};