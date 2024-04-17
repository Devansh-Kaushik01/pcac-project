"use client"
import MemberCards from "./components/memberCards"

const Team = () => {
    return (
        <div className="container mx-auto py-10 ">
            <h4 className="uppercase text-sm font-semibold">Our Team Members</h4>
            <div className="font-semibold lg:text-5xl text-3xl">
                <h2>Meet our</h2>
                <h2 className="text-gray">Professional Team</h2>
            </div>
            <div className="pt-6">
                <MemberCards />
            </div>
        </div>
    );
};
export default Team;