"use client"
import Image from "next/image"

const DefaultProfile = ({profileLogo, name , post , classNames}) => {
    return (
        <div className="flex gap-4 ">
            <Image
                src={profileLogo}
                alt="ProfileLogo"
                className="cursor-pointer rounded-full w-12 h-12"
            />
            <div className={`cursor-pointer ${classNames}` }>
                <h3 className="font-semibold">{name}</h3>
                <h3 className="font-light text-lightgray">{post}</h3>
            </div>
        </div>
    )
}
export default DefaultProfile;