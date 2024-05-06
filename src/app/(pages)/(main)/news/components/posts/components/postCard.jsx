"use client"
import Team from "../../../../../../../assets/images/team.jpg"
import ProfileLogo from "../../../../../../../assets/logo/Profilelogo.png"
import { FaRegClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import DefaultProfile from "@/app/(pages)/(main)/components/common/defaultProfile/defaultProfile";

const PostCard = ({ item }) => {
    return (
        <div className="w-full h-auto flex flex-col gap-4 p-4">
            <Link href={item.link}>
                <Image
                    src={Team}
                    alt="images"
                />
            </Link>
            <div className="flex flex-col gap-3">
                <Link href={item.link}>
                    <h2 className="text-lg font-semibold uppercase hover:text-blue">{item.heading}</h2>
                </Link>
                <p className="text-sm text-lightgray">{item.para}</p>
            </div>
            <div className="flex justify-between">
                <DefaultProfile
                    classNames={"flex items-center gap-1"}
                    profileLogo={ProfileLogo}
                    name={"Posted By:"}
                    post={"PCAC"}
                />
                <div className="flex gap-1 items-center text-sm text-lightgray">
                    <FaRegClock size={18} />
                    <h4>March 25, 2024</h4>
                </div>
            </div>
        </div>
    );
}
export default PostCard;