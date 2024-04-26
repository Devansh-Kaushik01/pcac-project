"use client"
import ProfileLogo from "../../../../../../assets/logo/profilelogo.jpg"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import maping2 from "../../../../../../assets/images/backgroundmap2.jpg"
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const WhatWeDo = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 gap-2 p-4 md:p-0">
            <Image
            src={maping2}
            alt="maping"
            className="absolute left-0 w-1/2 -mt-64 -z-10"
            />
            <div className="lg:text-5xl text-3xl font-medium lg:flex lg:flex-col gap-2 z-10 lg:py-10">
                <h2>We Do This</h2>
                <h2 className="text-lightgray">For A Single Cause</h2>
            </div>
            <div className="flex flex-col justify-between items-end ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-5 text-md font-medium text-gray lg:py-10 ">
                        <p>I am excited to announce the launch of our new property app, designed to enhance your real estate experience.
                             With its user-friendly interface and innovative features, navigating the market has never been easier. From browsing 
                             listings to connecting with agents, this app is your one-stop solution for all things property-related.
                              Download now and unlock a world of possibilities in the palm of your hand. Happy house hunting!
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <DefaultButton anchor={true} onPress={"/"} classNames={"!text-black flex gap-2 text-md !p-0 font-semibold hidden"}>
                            Read Our Menifesto <MdArrowOutward size={20} />
                        </DefaultButton>
                        <div className="flex gap-4 ">
                            <Image
                                src={ProfileLogo}
                                alt="ProfileLogo"
                                className="cursor-pointer"
                            />
                            <div className=" cursor-pointer">
                                <h3 className="font-semibold">Kamal Gupta</h3>
                                <h3 className="font-light text-lightgray">President (PCAC) </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatWeDo;