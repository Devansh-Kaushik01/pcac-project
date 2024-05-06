"use client"
import Image from "next/image";
import DefaultProfile from "../../../../components/common/defaultProfile/defaultProfile"


const MemberCards = ({ classNames, textArea, imgs, paraghraph , name ,post ,profileLogo }) => {
    return (
        <div className="container mx-auto">
            <div className={`flex lg:flex-row flex-col items-center justify-between gap-10 ${classNames}`}>
                <div className={`flex gap-5 lg:w-3/4 ${textArea}`}>
                    <div className="w-12 h-auto bg-blue lg:block hidden"></div>
                    <div className="flex flex-col gap-6">
                        <p className="tracking-wide leading-7 font-normal">{paraghraph}</p>
                        <DefaultProfile
                        profileLogo={profileLogo}
                            name={name}
                            post={post}
                        />
                    </div>
                </div>
                <div>
                    <Image
                        src={imgs}
                        alt="imgs"
                        className="w-full h-full rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
};
export default MemberCards;