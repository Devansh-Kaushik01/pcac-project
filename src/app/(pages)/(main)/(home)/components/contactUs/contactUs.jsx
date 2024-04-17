"use client";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { MdPrint } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
const detailData = [
    { name: "S.C.O-209, Sector 36-D, Sector36, Chandigarh, 160036", link: "/", icon: <IoLocationSharp className="text-blue" size={20} /> },
    { name: " +91 (123) 456-7890", link: "tel:+91 (123) 456-7890", icon: <MdPhone className="text-blue" size={20} /> },
    { name: " +91 (123) 456-7890", link: "tel:+91 (123) 456-7890", icon: <MdPrint className="text-blue" size={20} /> },
]
const iconsData = [
    { link: "/", icon: <FaFacebookF /> },
    { link: "/", icon: <FaLinkedinIn /> },
    { link: "/", icon: <IoLogoTwitter /> },
    { link: "/", icon: <FaYoutube /> },
]

const ContactUs = () => {
    return (
        <div className="container mx-auto flex flex-col gap-8 items-center text-center lg:mt-20 mt-10">
            <div className="flex flex-col gap-4 items-center">
                <h2 className="lg:text-5xl text-3xl font-semibold">Buy<span className="text-blue">.</span> Sell<span className="text-blue">.</span> Rent<span className="text-blue">.</span></h2>
                <p className="w-4/5 lg:text-lg text-sm text-lightgray">We're a diverse and passionate team that takes ownership of your design and empower you to execute the roadmap.
                    We stay light on our feet and truly enjoy delivering great work.
                </p>
            </div>
            <div className='flex lg:flex-row flex-col text-sm items-center gap-6 lg:px-0 px-4 '>
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
            <div className='flex gap-10'>
                {iconsData.map((item, index) => {
                    return (
                        <Link href={item.link}
                            key={index}>
                            <div className="rounded-full p-2 text-blue hover:text-white hover:bg-blue border">
                                {item.icon}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default ContactUs;