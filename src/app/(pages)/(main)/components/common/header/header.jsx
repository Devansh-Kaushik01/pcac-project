"use client"
import React, { Fragment, useEffect, useState } from 'react';
import DefaultButton from '../../../../components/defaultbutton/defaultbutton';
import Link from "next/link"
import Image from 'next/image'
import Logo from "../../../../../../assets/logo/logo.png"
import { GoClock } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import MainDrawer from "../drawer/mainDrawer"
import { usePathname } from 'next/navigation';

const detailData = [
    { name: "Mon-Fri: 08:00- 06:30", link: "/", icon: <GoClock /> },
    { name: "+91 (987) 6543 2100", link: "tel:+91 (987) 6543 2100", icon: <BsTelephone /> },
    { name: "contact@pcac.com", link: "mailto: abc@example.com", icon: <CiGlobe /> },
]
const menuItems = [
    { name: "Home", link: "/" },
    { name: "Latest News", link: "/news" },
    { name: "Gallery", link: "/gallery" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" }
]

const Header = ({ }) => {
    const [current, setCurrent] = useState("");
    const pathname = usePathname();

    useEffect(()=>{
        setCurrent(pathname);
    }, [pathname]);

    return (
        <Fragment>
            <div className="w-full lg:bg-blue py-2">
                <div className='container mx-auto lg:flex hidden justify-between items-center text-white'>
                    <h4 className="text-xs font-bold ">
                        Property Consultant Association Chandigarh -
                        <span className="font-normal"> For all your property requirements</span>
                    </h4>
                    <div className='flex items-center gap-8 text-xs'>
                        {detailData.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    key={index}>
                                    <div className='flex items-center gap-1'>
                                        {item.icon} {item.name}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='container mx-auto p-4 lg:px-0 px-4 flex justify-between items-center'>
                <Link href={"/"}>
                    <Image src={Logo} alt={"logo"} />
                </Link>
                <div className=' hidden md:flex gap-12 '>
                    <div className='flex items-center gap-12 '>
                        {menuItems.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    className={current === item.link ? "font-semibold" : "font-normal"}
                                    key={index}>
                                    <div className='flex flex-col items-center gap-1 '>
                                        {item.name}
                                        <div
                                            className={`hidden lg:block rounded-full w-1 h-1 ${current === item.link ? "bg-blue" : ""}`}>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className='flex gap-2'>
                        <DefaultButton anchor onPress={"/"} classNames={"!text-black bg-graybtn border border-lightgray-100 "}>
                            Request an account
                        </DefaultButton>
                        <DefaultButton anchor onPress={"/"} >
                            Login
                        </DefaultButton>
                    </div>
                </div>
                <div className='flex md:hidden '>
                    <MainDrawer />
                </div>
            </div>

        </Fragment>
    );
}

export default Header;