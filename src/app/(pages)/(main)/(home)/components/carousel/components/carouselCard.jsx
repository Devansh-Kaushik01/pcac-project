"use client"
import Image from "next/image";
import { Fragment } from "react";
import ProfileImg from "../../../../../../../assets/images/profileImg.png"

const CarouselCard = ({ paragraph, name, address }) => {
    return (
        <Fragment>
            <div className="flex flex-col gap-5 items-center text-center ">
                <p className="w-2/3 lg:font-semibold lg:text-lg text-sm">{paragraph}</p>
                <div className="">
                    <Image src={ProfileImg}
                        alt="ProfileImg"
                        className="ml-14"
                    />
                    <h4 className="mt-2 font-semibold">{name}</h4>
                    <h6 className="text-sm font-medium text-lightgray">{address}</h6>
                </div>
            </div>
        </Fragment>
    )
}
export default CarouselCard;