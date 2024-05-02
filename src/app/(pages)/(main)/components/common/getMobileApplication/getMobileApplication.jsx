"use client";
import Image from "next/image";
import AppstoreImg from "../../../../../../assets/images/appstore.png";
import GoogleplayImg from "../../../../../../assets/images/googleplay.png";
import MobileImg from "../../../../../../assets/images/mobileImg.png"
import Link from "next/link";

const GetMobileApplication = () => {
    return (
        <div className="lg:px-0 px-4 lg:pt-28">
            <div className="container text-white grid lg:grid-cols-2 lg:mx-auto bg-blue rounded-2xl h-[442px] ">
                <div className=" p-10 flex flex-col gap-8 justify-center">
                    <div className="flex flex-col gap-2 font-semibold">
                    <h2 className="lg:text-5xl text-3xl">Get your property</h2>
                    <h2 className="lg:text-5xl text-3xl ">with <span className="font-extrabold">PCAC.</span></h2>
                    </div>
                    <p className="text-md text-white font-normal">Download the PCAC app now to seamlessly buy,sell, or rent property.
                    Start exploring and engaging in real estate transactions today!</p>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white text-sm font-semibold uppercase "> Download App:</h1>
                        <div className="flex gap-2">
                            <Link href="/" className="">
                                <Image src={GoogleplayImg} alt="GoogleplayImg" />
                            </Link>
                            <Link href="/">
                                <Image src={AppstoreImg} alt="AppstoreImg" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full relative lg:block hidden">
                    <div className="absolute lg:-top-[100px] left-20">
                        <Image src={MobileImg} alt={"mobile"} className="w-[500px]" />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default GetMobileApplication;
