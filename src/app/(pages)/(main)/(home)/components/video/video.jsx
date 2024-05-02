"use client"
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import { FaPlay } from "react-icons/fa6";

const card = [
    {
        heading: "Watch the video",
        paragraph: "to see how our team provides verified properties",
    }
];
const Video = ({}) => {
    return (
        <div className="bg-cover bg-center lg:min-h-auto py-20 flex items-center justify-center meetingImg ">
            <div className="container mx-auto lg:px-4">
                <div className="flex flex-col md:flex-row gap-8 mx-auto bg-indigo-600 bg-opacity-0 rounded-lg text-white">
                    <div className="flex flex-col md:flex-row justify-between">
                        {card.map((item, index) => (
                            <div key={index} className="flex flex-col items-center lg:flex-row py-4">
                                <div className="w-4/5 flex flex-col gap-4">
                                    <h2 className="lg:text-5xl text-3xl font-semibold">{item.heading}</h2>
                                    <p className="lg:text-5xl text-3xl lg:w-1/2 font-light">{item.paragraph}</p>
                                    <div className="">
                                        <p className="text-white font-normal mt-10">Still have any doubts?<Link href="/contact-us" className="underline underline-offset-4"> Contact Us</Link> and check for yourself.</p>
                                    </div>
                                    <DefaultButton
                                     onPress={"/contact-us"} 
                                     anchor
                                     classNames={"bg-blue h-14 w-32 rounded-lg flex justify-center font-semibold"}>Contact Us</DefaultButton>
                                </div>
                                <div className="lg:flex hidden justify-center">
                                    <DefaultButton
                                        classNames="relative mb-5 w-20 h-20 border-2 border-blue bg-blue text-white rounded-full">
                                        <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-10">
                                            <FaPlay size={32} />
                                        </span>
                                    </DefaultButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Video;