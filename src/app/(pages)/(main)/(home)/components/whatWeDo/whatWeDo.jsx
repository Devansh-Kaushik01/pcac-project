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
                className="absolute left-0 w-1/2 -mt-72 -z-10"
            />
            <div className="lg:text-5xl text-3xl font-semibold lg:flex lg:flex-col gap-2 z-10 lg:py-10">
                <h2>We Do This</h2>
                <h2 className="text-lightgray">For A Single Cause</h2>
            </div>
            <div className="flex flex-col justify-between items-end ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-5 text-md font-normal text-gray lg:py-10 ">
                        <p>As the president of our esteemed Property Association,
                            I am thrilled to introduce our revolutionary property
                            association app. With this innovative tool, we aim to
                            empower homeowners, buyers, and sellers alike.
                        </p>
                        <p>
                            Our app streamlines property management, facilitates seamless
                            communication among residents, and provides valuable resources
                            for real estate transactions.
                        </p>
                        <p>
                            From accessing community updates to managing maintenance requests,
                            the app ensures efficient governance and enhances the overall living
                            experience.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <DefaultButton anchor={true} onPress={"/"} classNames={"!text-black  bg-white flex gap-2 text-md !p-0 font-normal hidden"}>
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