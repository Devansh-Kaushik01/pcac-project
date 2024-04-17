"use client";
import Image from "next/image";
import AppstoreImg from "../../../../../../assets/images/appstore.png";
import GoogleplayImg from "../../../../../../assets/images/googleplay.png";
import MobileImg from "../../../../../../assets/images/mobileImg.jpg"
import Link from "next/link";

const GetMobileApplication = () => {
    return (
        <div className="container text-white grid lg:grid-cols-2 mx-auto bg-blue rounded-2xl my-10">
            <div className=" p-10 flex flex-col gap-4">
                <h2 className="lg:text-5xl text-3xl">Get your property</h2>
                <h2 className="lg:text-5xl text-3xl font-bold ">with PCAC</h2>
                <p className="lg:text-lg text-sm text-white">If you’re new to Genie or looking to supercharge your current will help you learn more about the and its features.</p>
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-sm font-bold uppercase "> Download App:</h1>
                    <div className="flex gap-2">
                        <Link href="#" className="">
                            <Image src={GoogleplayImg} alt="GoogleplayImg" />
                        </Link>
                        <Link href="#">
                            <Image src={AppstoreImg} alt="AppstoreImg" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-3/6 relative  lg:block hidden">
                <div className="absolute lg:-top-[52px]">
                    <Image src={MobileImg} alt={"mobile"} className="w-[400px] h-[400px] object-fit" />
                </div>
            </div>
        </div>
    )
};
export default GetMobileApplication;
