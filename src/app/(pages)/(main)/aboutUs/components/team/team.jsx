"use client"
import MemberCards from "./components/memberCards"
import Member1 from "../../../../../../assets/images/member1.jpg";
import Member2 from "../../../../../../assets/images/member2.jpg";
import Member3 from "../../../../../../assets/images/member3.jpg";
import Member4 from "../../../../../../assets/images/member4.jpg";
import Member5 from "../../../../../../assets/images/member5.jpg";

const Team = () => {
    return (
        <div className="container mx-auto py-14 lg:px-0 px-4 ">
            <h4 className="uppercase text-sm font-semibold">Our Team Members</h4>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-2 justify-between lg:items-end pt-4">
                <div className="font-semibold lg:text-5xl text-3xl flex flex-col gap-2">
                    <h2>Meet our</h2>
                    <h2 className="text-gray">Professional Team</h2>
                </div>
                <p className="italic font-semibold lg:w-1/2 text-lg">Ut enim ad minim veniam, quis nostrud nisi et exercitation the
                    ullamco laboris containing Lorem nisi ut aliquip.
                </p>
            </div>
            <div className="pt-14">
                <MemberCards
                    imgs={Member1}
                />
            </div>
            <div className="pt-14">
                <MemberCards
                    classNames={"flex lg:!flex-row-reverse flex-col"}
                    textArea={"flex flex-row-reverse"}
                    imgs={Member2}
                />
            </div>
            <div className="pt-14">
                <MemberCards
                    imgs={Member3}
                />
            </div>
            <div className="pt-14">
                <MemberCards
                    classNames={"flex lg:!flex-row-reverse flex-col"}
                    textArea={"flex flex-row-reverse"}
                    imgs={Member4}
                />
            </div>
            <div className="pt-14">
                <MemberCards
                    imgs={Member5}
                />
            </div>
        </div>
    );
};
export default Team;