"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import PropertyCard from "./components/propertyCard";
import { GoHome } from "react-icons/go";
import { RiShakeHandsLine } from "react-icons/ri";
import { IoKeyOutline } from "react-icons/io5";

const data = [
    {
        title: "Buy property",
        paragraph: `Simplify property sales with our app.
         List, connect with buyers, and ensure secure transactions 
         within our trusted community network.`,
        icon: <GoHome />
    },
    {
        title: "sell property",
        paragraph: `Sell your property easily with our app. List,
         connect with buyers, and complete transactions securely 
         within our trusted community network.`,
        icon: <RiShakeHandsLine size={25} />
    },
    {
        title: "rent property",
        paragraph: `Find and rent your ideal property hassle-free
         with our app. Browse listings, connect with landlords, 
         and secure rentals effortlessly.`,
        icon: <IoKeyOutline size={25} />
    }
]

const JoinUs = ({ }) => {
    return (
        <div className="container mx-auto lg:px-0 px-4 pt-10 ">
            <div className="lg:flex justify-between">
                <div className="lg:text-5xl text-3xl font-semibold flex flex-col gap-2 z-10">
                    <h2>Would you like</h2>
                    <h2 className="text-lightgray">To join us for?</h2>
                </div>
                <div className="flex items-center lg:mt-0 mt-4">
                    <DefaultButton
                        onPress={"/contact-us"}
                        anchor
                        classNames={"text-white bg-blue h-14 w-32 flex justify-center font-semibold rounded-lg"}>
                        Contact Us
                    </DefaultButton>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-10 mt-12'>
                {data.map((item, index) => {
                    return (
                        <PropertyCard
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default JoinUs;