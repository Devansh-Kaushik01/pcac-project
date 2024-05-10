"use client"
import DefaultButton from '@/app/(pages)/components/defaultButton/defaultButton'
import Image from 'next/image'
import BlurImg from '../../../../../../assets/images/blurimg.jpg'
import PropertyImg from "../../../../../../assets/images/propertyimg.jpg"
import { MdArrowOutward } from "react-icons/md";

const AboutUs = () => {
    return (
        <div className="container mx-auto lg:pt-20 pt-6">
            <div className="flex flex-col lg:gap-4 gap-2 md:px-0 px-4 font-semibold">
                <h4 className="uppercase">About us</h4>
                <h2 className="lg:text-5xl text-3xl">Setting Up Standard For</h2>
                <h2 className="lg:text-5xl text-3xl text-lightgray">Tricity Properties</h2>
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
                        <p className=" lg:text-justify font-normal text-gray leading-relaxed">In our fast-paced world, the real estate market
                         can seem like a maze of complexities. From fluctuating prices to evolving trends, staying ahead can be daunting. </p>
                        <DefaultButton anchor={true} onPress={"/news"} classNames={"!text-black !bg-white flex gap-2  !px-0 "}>
                            Read More <MdArrowOutward size={20} />
                        </DefaultButton>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AboutUs;