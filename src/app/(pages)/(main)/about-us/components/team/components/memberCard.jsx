"use client"
import Image from "next/image";
import ProfileLogo from "../../../../../../../assets/logo/profilelogo.jpg";


const MemberCards = ({ classNames, textArea, imgs }) => {
    return (
        <div className="container mx-auto">
            <div className={`flex lg:flex-row flex-col items-center justify-between gap-10 ${classNames}`}>
                <div className={`flex gap-5 lg:w-3/4 ${textArea}`}>
                    <div className="w-12 h-auto bg-blue lg:block hidden"></div>
                    <div className="flex flex-col gap-6">
                        <p className="tracking-wide leading-7 font-normal"> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a gallery of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It
                            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages,and more recently with desktop publishing software like Aldus PageMaker including
                            version of Lorem Ipsum.
                        </p>
                        <div className="flex gap-4 ">
                            <Image
                                src={ProfileLogo}
                                alt="ProfileLogo" 
                                className="cursor-pointer"
                            />
                            <div className=" cursor-pointer">
                                <h3 className="font-semibold">Kamal Gupta</h3>
                                <h3 className="font-light text-lightgray">President (PCAC) </h3>
                            </div>
                        </div>

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