"use client"
import React, { useState } from 'react';
import Link from "next/link"
import Image from 'next/image'
import Logo from "../../../../../assets/logo/logo.png"

const menuItems = [
    { name: "About us", link: "/aboutUs" },
    { name: "Contact us", link: "/contactus" },
    { name: "Help", link: "/help" },
    { name: "Privacy Policy", link: "/policy" },
    { name: "Disclaimer", link: "/disclaimer" }

]

const Footer = ({ }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='border-t mt-10'>
            <div className='container flex lg:flex-row flex-col justify-between items-center mx-auto pt-4'>
                <Link href={"/"}>
                    <Image src={Logo} alt={"logo"} />
                </Link>
                <div className='flex lg:flex-row flex-col lg:gap-14 gap-6  '>
                    <div className='flex lg:flex-row flex-col items-center lg:gap-10 gap-6 lg:mt-0 mt-4 '>
                        {menuItems.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    key={index}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                    <p className='lg:px-0 px-4 text-center'>
                        Copyright © 2024 • Synswift Infotech LLP.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;