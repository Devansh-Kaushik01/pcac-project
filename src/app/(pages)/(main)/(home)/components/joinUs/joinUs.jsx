"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import PropertyCard from "./components/propertyCard";
import { GoHome } from "react-icons/go";
import { RiShakeHandsLine } from "react-icons/ri";
import { IoKeyOutline } from "react-icons/io5";

const data = [
    {
        title: "Buy property",
        icon: <GoHome />
    },
    {
        title: "sell property",
        icon: <RiShakeHandsLine size={25} />
    },
    {
        title: "rent property",
        icon: <IoKeyOutline size={25} />
    }
]

const JoinUs = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between">
                <div className="lg:text-5xl text-3xl font-medium flex flex-col gap-2">
                    <h2>Would you like</h2>
                    <h2 className="text-gray">To join us for?</h2>
                </div>
                <div className="flex items-center">
                    <DefaultButton classNames={"text-white bg-blue"}>
                        Contact Us
                    </DefaultButton>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8 mt-10'>
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