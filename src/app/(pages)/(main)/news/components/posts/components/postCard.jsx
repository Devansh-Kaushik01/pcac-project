"use client"
import Team from "../../../../../../../assets/images/team.jpg"
import ProfileLogo from "../../../../../../../assets/logo/profilelogo.jpg"
import { FaRegClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ item }) => {
    return (
        <div className="w-full h-auto flex flex-col gap-4 p-4">
            <Link href="/news/detail-news">
                <Image
                    src={Team}
                    alt="images"
                />
            </Link>
            <div className="flex flex-col gap-3">
                <Link href="/news/detail-news">
                <h2 className="text-lg font-semibold uppercase hover:text-blue">{item.heading}</h2>
                </Link>
                <p className="text-sm text-lightgray">{item.para}</p>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-2 ">
                    <Image
                        src={ProfileLogo}
                        alt="ProfileLogo"
                        className="cursor-pointer"
                    />
                    <div className="flex gap-2 cursor-pointer text-sm">
                        <h3 className="font-semibold ">Posted by:</h3>
                        <h3 className="font-light text-lightgray">PCAC</h3>
                    </div>
                </div>
                <div className="flex gap-1 items-center text-sm text-lightgray">
                    <FaRegClock size={18} />
                    <h4>March 25, 2024</h4>
                </div>
            </div>
        </div>
    );
}
export default PostCard;