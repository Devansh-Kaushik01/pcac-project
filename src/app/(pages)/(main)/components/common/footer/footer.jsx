"use client"
import React, { useState } from 'react';
import Link from "next/link"
import Image from 'next/image'
import Logo from "../../../../../../assets/logo/logo.png"
import DefaultFooter from "./component/defaultFooter"

const menuItems = [
    { name: "About us", link: "/about-us" },
    { name: "Contact us", link: "/contact-us" },
    { name: "Help", link: "/help" },
    { name: "Privacy Policy", link: "/policy" },
    { name: "Disclaimer", link: "/disclaimer" }

]

const Footer = ({ }) => {
    return (
        <div className='border-t border-lightgray'>
            <div className='container mx-auto flex lg:flex-row flex-col text-sm justify-between items-center py-6'>
                <Link href={"/"}>
                    <Image src={Logo} alt={"logo"} />
                </Link>
                <div className='flex lg:flex-row flex-col '>
                    <div className='lg:flex lg:flex-row flex-col font-normal items-center gap-10 lg:mt-0 mt-4 hidden '>
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
                </div>
                <p className='lg:px-0 px-4 text-center'>
                    Copyright © 2024 • Synswift Infotech LLP.
                </p>
            </div>
        </div>
    );
};
export default Footer;