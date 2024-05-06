"use client"
import Link from "next/link";
import { LuClock } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import InfoCard from "./components/infoCard";
import { IoLogoTwitter } from "react-icons/io";
import DefaultForm from "./components/defaultForm";
import { MdOutlineAttachEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const infoData = [
    { icon: <HiOutlineLocationMarker size={26} />, heading: "Our Location", info: "S.C.O-209, Sector 36-D,", info2: "Sector 36, Chandigarh, 160036" },
    { icon: <MdOutlineAttachEmail size={26} />, heading: "Quick Contact", info: "Email: info@pcac.com", info2: "Support: admin@pcac.com" },
    { icon: <FiPhoneCall size={26} />, heading: "Call us Now", info: "Office: +91 (987)-654-3210", info2: "Toll free: +91 (987)-654-3210" },
    { icon: <LuClock size={26} />, heading: "Opening Hours", info: "From Monday - Friday", info2: "9:30 am to 6:30 pm" },
]
const iconsData = [
    { link: "/", icon: <FaFacebookF size={22} /> },
    { link: "/", icon: <FaLinkedinIn size={22} /> },
    { link: "/", icon: <IoLogoTwitter size={22} /> },
    { link: "/", icon: <FaYoutube size={22} /> },
]

const GetInTouch = ({ }) => {
    return (
        <div className="container mx-auto grid lg:grid-cols-[30%_auto] lg:gap-10 gap-4 lg:py-10" >
            <div className=" flex flex-col justify-center items-center gap-6 px-10 lg:py-0 py-6 bg-blue text-white  ">
                {infoData.map((item, index) => {
                    return (
                        <InfoCard
                            key={index}
                            item={item}
                        />
                    )
                })}
                <div className='flex gap-6'>
                    {iconsData.map((item, index) => {
                        return (
                            <Link href={item.link}
                                key={index}>
                                <div className="rounded-full p-2 border hover:bg-white hover:text-blue">
                                    {item.icon}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className=" p-5 flex flex-col gap-4">
                <h2 className="lg:text-5xl text-2xl font-semibold">Get In Touch<span className="text-lightgray"> With Us</span></h2>
                <p className="text-md font-normal tracking-wide leading-relaxed ">Have questions? We're here to help! Whether it's about
                    property listings, buying, selling, or renting, our dedicated team is ready to assist you. Reach out via phone, email, or
                    fill out the contact form below. Your dream property journey starts here!
                    when an unknown.
                </p>
                <DefaultForm />
            </div>
        </div>
    );
};
export default GetInTouch;