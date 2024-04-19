"use client"
import ProfileLogo from "../../../../../../assets/logo/profilelogo.jpg"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import maping from "../../../../../../assets/images/backgroundmap2.jpg"
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const WhatWeDo = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 gap-2 p-4 md:p-0">
            <Image
            src={maping}
            alt="maping"
            className="absolute left-0 w-1/2 -mt-80 -z-10"
            />
            <div className="lg:text-5xl text-3xl font-medium lg:flex lg:flex-col gap-2 z-10">
                <h2>We Do This</h2>
                <h2 className="text-gray">For A Single Cause</h2>
            </div>
            <div className="flex flex-col justify-between items-end ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-5 text-md font-medium text-lightgray ">
                        <p>It is a long established fact that a render will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters,as opposed to using!
                        </p>
                        <p>
                            Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web pageike.
                        </p>
                        <p>
                            Many desktop publishing packages and web page editors now use
                            ipsum' will uncover many web sites still in their infancy.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <DefaultButton anchor={true} onPress={"/"} classNames={"!text-black flex gap-2 text-md !p-0 font-semibold"}>
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
                                <h3 className="font-light text-gray">President (PCAC) </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatWeDo;