"use client"
import React, { useState } from 'react';
import Link from "next/link"
import Image from 'next/image'
import Logo from "../../../../../assets/logo/logo.png"
import DefaultFooter from "./component/defaultFooter"

const menuItems = [
    { name: "About us", link: "/aboutUs" },
    { name: "Contact us", link: "/contactUs" },
    { name: "Help", link: "/help" },
    { name: "Privacy Policy", link: "/policy" },
    { name: "Disclaimer", link: "/disclaimer" }

]

const Footer = ({ }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='border-t mt-10'>
            <div className='container flex lg:flex-row flex-col justify-between items-center mx-auto lg:py-2 py-6'>
                <Link href={"/"}>
                    <Image src={Logo} alt={"logo"} />
                </Link>
                <div className='flex lg:flex-row flex-col lg:gap-14 gap-6   '>
                    <div className='lg:flex lg:flex-row flex-col items-center gap-10 lg:mt-0 mt-4 hidden '>
                        {menuItems.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    key={index}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                    <div className='block lg:hidden w-full p-4'>
                        <DefaultFooter />
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