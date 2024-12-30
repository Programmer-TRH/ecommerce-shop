"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Logout from "@/Icons List/Logout";
import MallBag from "@/Icons List/MallBag";
import ProfileIcon from "@/Icons List/ProfileIcon";
import Link from "next/link";
import ContactIcon from '@/Icons List/ContactIcon';

export default function ProfileModalNavLink({ id, type }) {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <div className='*:grid *:items-center *:justify-items-start *:pr-6 *:grid-cols-[auto_1fr] *:gap-1'>
            <button popoverTarget={id} onClick={() => router.push("/profile")} className={`block hover:bg-line active:bg-line w-full px-4 py-1 mt-8 md:mt-1 mb-1 ${pathname === "/profile" ? "bg-line" : ""} `}>
                <ProfileIcon className="inline-block size-8 -ml-1" />
                <span className="-ml-1">
                    My account
                </span>
            </button>
            <button popoverTarget={id} onClick={() => router.push("/order")} className={`block hover:bg-line active:bg-line w-full px-4 py-1 mb-1 ${pathname === "/order" ? "bg-line" : ""}`}>
                <MallBag className="inline-block size-6" /> <span >My Order</span>
            </button>
            {type === "mobile" && (
                <button popoverTarget={id} onClick={() => router.push("/contact")} className={`block hover:bg-line active:bg-line w-full px-4 py-1 mb-1 ${pathname === "/contact" ? "bg-line" : ""}`}>
                    <ContactIcon className="inline-block size-6" /> <span>Contact</span>
                </button>)
            }
            <button popoverTarget={id} onClick={() => router.push("/login")} className={`block hover:bg-line active:bg-line w-full px-4 py-1  ${pathname === "/login" ? "bg-line" : ""}`}>
                <Logout className="inline-block size-6" /> <span>Logout</span>
            </button>
        </div>
    )
}
