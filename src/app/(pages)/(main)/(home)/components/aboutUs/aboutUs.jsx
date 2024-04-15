"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image from 'next/image'
import BlurImg from '../../../../../../assets/images/blurimg.jpg'
import PropertyImg from "../../../../../../assets/images/propertyimg.jpg"
import { MdArrowOutward } from "react-icons/md";

const AboutUs = () => {
    return (
        <div className="container mx-auto lg:pt-20 pt-6">
            <div className="flex flex-col lg:gap-4 gap-2 md:px-0 px-4">
                <h4 className="uppercase font-bold">About us</h4>
                <h2 className="lg:text-5xl text-3xl font-medium">Setting Up Standard For</h2>
                <h2 className="lg:text-5xl text-3xl font-medium text-gray">Tricity Properties</h2>
            </div>
            <section className="md:py-10 md:p-10 md:px-0 pt-2">
                <div className="px-4 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                    <div className="relative ">
                        <Image
                            src={PropertyImg}
                            alt="propertyimg"
                        />
                        <Image
                            src={BlurImg}
                            alt="BlurImg"
                            className="absolute top-0 -right-0 h-full lg:flex hidden"
                        />
                    </div>
                    <div className="lg:flex hidden flex-col gap-2 bg-white md:p-10 w-96 lg:absolute top-24 right-40">
                        <div className="text-black font-bold text-lg uppercase">
                            <p>Latest News</p>
                        </div>
                        <p className=" lg:text-justify font-medium text-lightgray leading-relaxed">There are many variations of passages
                            of Lorem Ipsum available, but the majority have suffered
                            alteration in some form,by injected humour, or randomised words. </p>
                        <DefaultButton anchor={true} onPress={"/"} classNames={"!text-black flex gap-2 text-md !px-0"}>
                            Read More <MdArrowOutward size={20} />
                        </DefaultButton>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AboutUs;