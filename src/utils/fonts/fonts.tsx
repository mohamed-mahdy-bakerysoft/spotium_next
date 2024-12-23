import { JetBrains_Mono, Bebas_Neue, DM_Sans } from 'next/font/google';

export const brains = JetBrains_Mono({
    weight: "400",
    variable: '--font-brains',
    style: ['normal'],
    subsets: ['cyrillic', 'latin'],
    display: 'swap',
});

export const bebas = Bebas_Neue({
    weight: "400",
    variable: '--font-bebas',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const dm = DM_Sans({
    weight: "400",
    variable: '--font-dm',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});