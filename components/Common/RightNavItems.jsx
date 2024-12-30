"use client"
import Link from 'next/link'
import React from 'react'
import CartIcon from "@/Icons List/CartIcon";
import Favourite from "@/Icons List/Favourite";
import { usePathname } from 'next/navigation';

export default function RightNavItems() {
    const pathname = usePathname()
 
    return (
        <>
            <Link href="/wishlist" className={`${pathname === "/wishlist" ? "hover:bg-line bg-line active:bg-line" : "bg-primary-black/5"}   p-2 rounded-full`}>
                <Favourite />
            </Link>
            <Link href="/cart" className={`${pathname === "/cart" ? "hover:bg-line bg-line active:bg-line" : "bg-primary-black/5"}   p-2 rounded-full`}>
                <CartIcon />
            </Link>
        </>
    )
}
