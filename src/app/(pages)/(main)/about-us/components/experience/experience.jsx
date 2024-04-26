"use client"
import Image from "next/image";
import ProfileLogo from "../../../../../../assets/logo/profilelogo.jpg"
import ExperienceImg from "../../../../../../assets/images/experience.jpg"

const Experience = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row lg:py-10 ">
            <div className="w-full lg:pt-16 lg:p-0 p-4 ">
                <Image
                    src={ExperienceImg}
                    alt="ExperienceImg"
                />
            </div>
            <div className="w-full h-auto flex flex-col gap-4 py-10 lg:px-0 px-4">
                <h4 className="text-sm font-semibold uppercase">About Pcac</h4>
                <h2 className="lg:text-5xl text-3xl font-bold">We aim to Provide Expert</h2>
                <h2 className="lg:text-5xl text-3xl font-bold text-lightgray">Advice and Quality Services.</h2>
                <h3 className="italic text-2xl font-semibold">Ut enin ad minim veniam, quis nostrud nisi et exercitation the
                    ullamco laboris containing Lorem nisi ut aliquip.
                </h3>
                <p className="lg:text-lg text-sm font-medium text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, sunt in culpa
                    qui officia when an unknown. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanges laboris aliquip ex ea
                    commodo consequat.
                </p>
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
    )
}

export default Experience;