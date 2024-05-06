"use client"
import Image from "next/image";
import ProfileLogo from "../../../../../../assets/logo/Profilelogo.png"
import ExperienceImg from "../../../../../../assets/images/experience.jpg"
import DefaultProfile from "../../../components/common/defaultProfile/defaultProfile";

const Experience = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row lg:py-10 ">
            <div className="w-full lg:pt-16 lg:p-0 p-4 ">
                <Image
                    src={ExperienceImg}
                    alt="ExperienceImg"
                />
            </div>
            <div className="w-full h-auto flex flex-col gap-6 py-10 lg:px-0 px-4">
                <div className="flex flex-col gap-6 font-semibold">
                    <h4 className="text-sm uppercase">About Pcac</h4>
                    <div className="flex flex-col gap-1 lg:text-5xl text-3xl">
                        <h2>We aim to Provide Expert</h2>
                        <h2 className="text-lightgray">Advice and Quality Services.</h2>
                    </div>
                    <h3 className="italic text-2xl">Your trusted partner for expert advice and quality services in every
                        step of your property journey. Elevate your experience with us.
                    </h3>
                </div>
                <p className="lg:text-lg text-sm font-normal text-gray">Our app is your gateway to expert advice and top-tier services in the real estate realm.
                    Whether you're buying, selling, or renting, count on us for personalized guidance and seamless transactions. with a commitment to excellence,
                    we ensure every step of your property journey is supported by expertise and quality service. Explore our app and elevate your property experience
                    today!
                </p>
                <DefaultProfile
                    profileLogo={ProfileLogo}
                    name={"Kamal Gupta"}
                    post={"President"}
                />
            </div>
        </div>
    )
}

export default Experience;