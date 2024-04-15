"use client"
import React, { useState } from 'react';
import Link from "next/link"
import Image from 'next/image'
import Logo from "../../../../../assets/logo/logo.png"

const menuItems = [
    { name: "About us", link: "/aboutus" },
    { name: "Contact us", link: "/contactus" },
    { name: "Help", link: "/help" },
    { name: "Privacy Policy", link: "/policy" },
    { name: "Disclaimer", link: "/disclaimer" }

]

const Footer = ({ }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='border-t mt-10'>
            <div className='container flex justify-between items-center mx-auto p-4'>
                <Link href={"/"}>
                    <Image src={Logo} alt={"logo"} />
                </Link>
                <div className=' hidden md:flex gap-14  '>
                    <div className='flex items-center gap-10'>
                        {menuItems.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    key={index}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                    <p>
                        Copyright © 2024 • Synswift Infotech LLP.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;