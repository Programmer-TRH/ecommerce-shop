"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Logout from "@/Icons List/Logout";
import MallBag from "@/Icons List/MallBag";
import ProfileIcon from "@/Icons List/ProfileIcon";
import Link from "next/link";
import ContactIcon from '@/Icons List/ContactIcon';

export default function ProfileModalNavLink({type}) {
    const pathname = usePathname()

    return (
        <>
            <Link href="/profile" className={`block hover:bg-line active:bg-line w-full px-4 py-1 mt-8 mb-1 ${pathname === "/profile" ? "bg-line" : ""} `}>
                <ProfileIcon className="inline-block size-8 -ml-1" /> <span className="-ml-1">My account</span>
            </Link>
            <Link href="/order" className={`block hover:bg-line active:bg-line w-full px-4 py-1 mb-1 ${pathname === "/order" ? "bg-line" : ""}`}>
                <MallBag className="inline-block size-6 mr-0.5" /> <span>My Order</span>
            </Link>
            {type === "mobile" && (
                <Link href="/contact" className={`block hover:bg-line active:bg-line w-full px-4 py-1 mb-1 ${pathname === "/contact" ? "bg-line" : ""}`}>
                <ContactIcon className="inline-block size-6 mr-0.5" /> <span>Contact</span>
            </Link>)
            }
            <Link href="/login" className={`block hover:bg-line active:bg-line w-full px-4 py-1  ${pathname === "/login" ? "bg-line" : ""}`}>
                <Logout className="inline-block size-6 mr-0.5" /> <span>Logout</span>
            </Link>
        </>
    )
}
