"use client"
import Image from "next/image";
import Link from "next/link";
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import Buildings from "../../../../../../assets/images/3-Buildings.jpg"
import Googleplay from "../../../../../../assets/images/googleplay.png"
import Playstore from "../../../../../../assets/images/appstore.png"
import maping1 from "../../../../../../assets/images/backgroundmap1.jpg"

const Hero = ({ }) => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row">
            <div className="w-full lg:pt-16 pt-4 lg:px-0 px-4 ">
                    <Image
                        src={Buildings}
                        alt="Buildings"
                    />
            </div>
            <div className="w-full bg-center h-auto ">
                <div className="lg:block hidden">
                    <Image
                        src={maping1}
                        alt="maping"
                        className="absolute right-0 h-[650px] object-cover -z-10"
                    />
                </div>
                <div className="flex flex-col gap-4 lg:py-32 py-4 px-4">
                    <h2 className="lg:text-5xl text-3xl">Find your dream home</h2>
                    <h2 className="lg:text-5xl text-3xl font-bold">with PCAC<span className="text-blue">.</span></h2>
                    <p className="lg:text-lg text-sm text-gray">Discover seamless properties, personalized listings, and expert guidance on your journey to homeownership with PCAC app.
                    </p>
                    <DefaultButton
                        onPress={"/contact-us"}
                        anchor
                        classNames={"text-white bg-blue lg:h-14 h-12 w-32 rounded-lg"}>
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
export default Hero;