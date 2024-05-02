"use client"
import React from "react";
import {
    Drawer,
    IconButton,
} from "@material-tailwind/react";
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';
import Logo from '../../../../../../assets/logo/logo.png';
import Link from "next/link";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const MainDrawer = () => {
    const menuItems = [
        { name: "Home", active: true, link: "/" },
        { name: "Latest News", link: "/news" },
        { name: "Gallery", link: "/gallery" },
        { name: "About Us", link: "/about-us" },
        { name: "Contact Us", link: "/contact-us" }
    ]

    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
        <div className="fixedDrawer">
            <DefaultButton
                onPress={openDrawerRight}
                classNames={"lg:hidden p-0 w-10 h-10 flex justify-center items-center bg-blue !text-white"}
            >
                {openRight ?
                    <CgMenuRightAlt size={20}/>
                    :
                    <CgMenuRight size={20}/>
                }
            </DefaultButton>
            <Drawer
             placement="right" open={openRight} onClose={closeDrawerRight} className="p-4 ">
                <div className="mb-6 flex items-center justify-between">
                    <Link href={"/"}>
                        <Image src={Logo} alt={"logo"} />
                    </Link>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight} className="bg-blue text-white rounded-full">
                        <IoMdClose size={20} />
                    </IconButton>
                </div>
                <div className="">
                    <div className='flex flex-col gap-7 font-normal'>
                        {menuItems.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    className={`${item.active === true ? "font-bold" : "font-normal"}`}
                                    key={index} onClick={closeDrawerRight}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-2 pt-6">
                    <DefaultButton classNames={"text-white bg-lightgray-100 text-black font-semibold w-48 "}>
                        Request an account
                    </DefaultButton>
                    <DefaultButton classNames={"text-white bg-blue w-48 font-semibold"}>
                        Login
                    </DefaultButton>
                </div>
            </Drawer>
        </div>
    );
}
export default MainDrawer;
