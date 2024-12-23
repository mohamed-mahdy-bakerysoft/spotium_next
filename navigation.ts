import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "uk"];

export const { Link, redirect, useRouter, usePathname } =
    createSharedPathnamesNavigation({ locales });