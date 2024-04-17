"use client"
import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';
import Logo from '../../../../../assets/logo/logo.png';
import Link from "next/link";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const MainDrawer = () => {
    const menuItems = [
        { name: "Home", active: true, link: "/" },
        { name: "Latest News", link: "/news" },
        { name: "About Us", link: "/aboutUs" },
        { name: "Contact Us", link: "/contact" }
    ]

    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
        <React.Fragment>
            <DefaultButton
                onPress={openDrawerRight}
                classNames={"lg:hidden p-0 w-10 h-10 flex justify-center items-center !text-black"}
            >
                {openRight ?
                    <CgMenuRightAlt className={"text-black text-xl"} />
                    :
                    <CgMenuRight className={"text-black text-xl "} />
                }
            </DefaultButton>
            <Drawer placement="right" open={openRight} onClose={closeDrawerRight} className="p-4">
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
