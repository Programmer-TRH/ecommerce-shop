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
            <Link href="/wishlist" className={`${pathname === "/wishlist" && "bg-secondary-red p-2"} rounded-full`}>
                <Favourite />
            </Link>
            <Link href="/cart" className={`${pathname === "/cart" && "bg-secondary-red p-2"} rounded-full `}>
                <CartIcon />
            </Link>
        </>
    )
}
