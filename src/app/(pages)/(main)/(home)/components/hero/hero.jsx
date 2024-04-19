"use client"
import Image from "next/image";
import Link from "next/link";
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import Building3 from "../../../../../../assets/images/building3.jpg"
import Building2 from "../../../../../../assets/images/building2.jpg"
import Building1 from "../../../../../../assets/images/building1.jpg"
import Googleplay from "../../../../../../assets/images/googleplay.png"
import Playstore from "../../../../../../assets/images/appstore.png"
import BuildingCarousel from "./components/bulidlingCarousel"

const Hero = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row ">
            <div className="w-full lg:pt-16 ">
                <section className=" w-full hidden lg:block mx-auto">
                    <div className="relative cursor-pointer  ">
                        <ImagesCard
                            img={Building3}
                        />
                        <ImagesCard
                            img={Building2}
                            classnames={"absolute z-10 md:top-10 top-6 md:right-10 lg:right-40"}
                        />
                        <ImagesCard
                            img={Building1}
                            classnames={"absolute md:top-60 top-52 left-40"}
                        />
                    </div>
                </section>
                <div className='block lg:hidden w-full p-4'>
                <BuildingCarousel/>
                </div>
            </div>
            <div className="w-full bg-center h-auto banner">
                <div className="flex flex-col gap-4 lg:py-32 py-4 px-4">
                    <h2 className="lg:text-5xl text-3xl">Find your dream home</h2>
                    <h2 className="lg:text-5xl text-3xl font-bold">with PCAC <span className="text-blue">.</span></h2>
                    <p className="lg:text-lg text-sm text-gray">If you're new to Genie or looking to supercharge your current stack,
                        this section will help you learn more about the platform features.
                    </p>
                    <DefaultButton classNames={"text-white bg-blue w-36"}>
                        Contact Us
                    </DefaultButton>
                    <div className="flex lg:justify-end ">
                        <div className=" flex flex-col justify-ends mt-10 ">
                            <h4 className="uppercase text-blue text-sm font-bold">Download app:</h4>
                            <div className="flex gap-2">
                                <Link href="/">
                                    <Image
                                        src={Googleplay}
                                        alt="Googleplay"
                                    />
                                </Link>
                                <Link href="/">
                                    <Image
                                        src={Playstore}
                                        alt="Playstore"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ImagesCard = ({ img, classnames }) => {
    return (
        <div className={`${classnames}`}>
            <Image
                src={img}
                alt={`${img + "img"}`}
                className="rounded-[30px] w-56"
            />
        </div>
    )
}

export default Hero;