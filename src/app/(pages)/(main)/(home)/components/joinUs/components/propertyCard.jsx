"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import { FaArrowRightLong } from "react-icons/fa6";

const PropertyCard = ({ item }) => {
    return (
        <div className="relative flex flex-col gap-10 items-center group text-center pt-0 bg-white shadow-3xl bg-clip-border rounded-xl h-[428px] w-96">
            <div className="flex items-center justify-center h-2 opacity-0 w-40 bg-blue group-hover:opacity-100 rounded-b-xl "></div>
            <div className="p-6 flex flex-col gap-4 items-center">
                <DefaultButton
                    classNames="relative w-14 h-14 border-2 border-blue group-hover:bg-blue text-blue group-hover:text-white focus:ring focus:ring-blue active:opacity-[0.85] rounded-full">
                    <span className="absolute font-semibold text-xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        {item.icon}
                    </span>
                </DefaultButton>
                <h4 className="text-xl font-semibold uppercase">
                    {item.title}
                </h4>
                <p className="lg:w-3/4  font-normal text-gray ">
                    {item.paragraph}
                </p>
                <DefaultButton anchor={true} onPress={"/contact-us"} >
                    <FaArrowRightLong className="text-blue" size={20} />
                </DefaultButton>
            </div>

        </div>
    )
}
export default PropertyCard;