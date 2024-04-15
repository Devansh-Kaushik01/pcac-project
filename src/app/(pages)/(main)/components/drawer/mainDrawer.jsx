"use client"
import React from "react";
import {
    Drawer,
    IconButton,
} from "@material-tailwind/react";
import { CgMenuRight, CgMenuRightAlt } from "react-icons/cg";
import DefaultButton from "../../../components/defaultbutton/defaultbutton";
import Logo from '../../../../../assets/logo/logo.png';
import { IoMdClose } from "react-icons/io";
import Link from "next/link"
import Image from 'next/image'

const MainDrawer = ({ openRight, openDrawer, closeDrawerRight }) => {
    const menuItems = [
        { name: "Home", active: true, link: "/" },
        { name: "Latest News", link: "/news" },
        { name: "About Us", link: "/about" },
        { name: "Contact Us", link: "/contact" }
    ]

    return (
        <React.Fragment>
            <Drawer open={openRight} onClose={closeDrawerRight} className="p-4 bg-black text-white">
                <div className="mb-6 flex items-center justify-between">
                    <Link href={"/"}>
                        <Image src={Logo} alt={"logo"} />
                    </Link>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight} className="">
                        <IoMdClose size={18} />
                    </IconButton>
                </div>
                <div className="mb-8 pr-4 font-normal">
                    <div className='flex flex-col gap-7'>
                        {menuItems.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    className={`${item.active === true ? "font-bold" : "font-normal"}`}
                                    key={index}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <DefaultButton classNames={"text-white bg-lightgray-100 text-black font-semibold w-48 "}>
                        Request an account
                    </DefaultButton>
                    <DefaultButton classNames={"text-white bg-blue w-48"}>
                        Login
                    </DefaultButton>
                </div>
            </Drawer>
        </React.Fragment>
    );
}

export default MainDrawer;
