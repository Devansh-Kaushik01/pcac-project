import React, { Fragment, useState } from 'react';
import DefaultButton from '../../../components/defaultbutton/defaultbutton';
import Link from "next/link"
import Image from 'next/image'
import Logo from "../../../../../assets/logo/logo.png"
import { GoClock } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import MainDrawer from "../drawer/mainDrawer"

const detailData = [
    { name: "Mon-Fri: 08:00- 06:30", link: "/", icon: <GoClock /> },
    { name: "+91 (987) 6543 2100", link: "tel:+91 (987) 6543 2100", icon: <BsTelephone /> },
    { name: "contact@pcac.com", link: "mailto: abc@example.com", icon: <CiGlobe /> },
]
const menuItems = [
    { name: "Home", active: true, link: "/" },
    { name: "Latest News", link: "/news" },
    { name: "About Us", link: "/aboutUs" },
    { name: "Contact Us", link: "/contact" }
]

const Header = ({ }) => {
    const [toggle, setToggle] = useState(false);
  
    return (
        <Fragment>
            <div className="w-full lg:bg-blue p-2">
                <div className='container mx-auto lg:flex hidden justify-between items-center text-white'>
                    <h4 className="text-sm font-medium ">
                        Property Consultant Association Chandigarh -
                        <span className="font-light"> For all your property requirements</span>
                    </h4>
                    <div className='flex items-center gap-8'>
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
            <div className='container mx-auto py-2 lg:px-0 px-4 flex justify-between items-center'>
                <Link href={"/"}>
                    <Image src={Logo} alt={"logo"} />
                </Link>
                <div className=' hidden md:flex gap-12 '>
                    <div className='flex items-center gap-12'>
                        {menuItems.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    className={`${item.active === true ? "font-bold " : "font-normal"}`}
                                    key={index}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                    <div className='flex gap-2'>
                        <DefaultButton classNames={"text-white bg-lightgray-100 text-black font-semibold"}>
                            Request an account
                        </DefaultButton>
                        <DefaultButton classNames={"text-white bg-blue"}>
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