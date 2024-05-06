"use client"
import MemberCard from "./components/memberCard"
import Member1 from "../../../../../../assets/images/jatinder-singh.png";
import Member2 from "../../../../../../assets/images/member2.jpg";
import Member3 from "../../../../../../assets/images/member3.jpg";
import Member4 from "../../../../../../assets/images/member4.jpg";
import Member5 from "../../../../../../assets/images/member5.jpg";

const Team = () => {
    return (
        <div className="container mx-auto lg:py-14 py-10 lg:px-0 px-4 ">
            <h4 className="uppercase text-sm font-semibold">Our Team Members</h4>
            <div className="flex font-semibold lg:flex-row flex-col lg:gap-0 gap-2 justify-between lg:items-end pt-4">
                <div className="lg:text-5xl text-3xl flex flex-col gap-2">
                    <h2>Meet our</h2>
                    <h2 className="text-lightgray">Professional Team</h2>
                </div>
                <p className="italic lg:w-1/2 lg:text-lg">Ut enim ad minim veniam, quis nostrud nisi et exercitation the
                    ullamco laboris containing Lorem nisi ut aliquip.
                </p>
            </div>
            <div className="lg:pt-14 pt-6">
                <MemberCard
                paraghraph={`He is a diligent sportsperson. He had won several awards and recognitions in sports and was also a Gold Medalist in hockey, but due to a severe foot injury, he withdrew himself from hockey and shifted his interest to becoming a successful businessman in the real estate industry. He is admired for his discerning knowledge and business acumen in the real estate, construction and hospitality industries.
                He took a keen interest in building his company (Simar Associates) as one of the renowned companies in property dealing in Chandigarh. He named this company after the name of his wife. He treats her as his lucky charm. His teammates look up to him as their mentor, who inspires them to succeed in life with commitment and hard work.`}
                    imgs={Member1}
                    profileLogo={Member1}
                    name={`Mr. Jatinder Singh`}
                    post={`General Secretary`}
                />
            </div>
            <div className="lg:pt-14 pt-6">
                <MemberCard
                    classNames={"flex lg:!flex-row-reverse flex-col"}
                    textArea={"flex flex-row-reverse"}
                    imgs={Member2}
                    paraghraph={``}
                />
            </div>
            <div className="lg:pt-14 pt-6">
                <MemberCard
                    imgs={Member3}
                    paraghraph={``}
                />
            </div>
            <div className="lg:pt-14 pt-6">
                <MemberCard
                    classNames={"flex lg:!flex-row-reverse flex-col"}
                    textArea={"flex flex-row-reverse"}
                    imgs={Member4}
                    paraghraph={``}
                />
            </div>
            <div className="lg:pt-14 pt-6">
                <MemberCard
                    imgs={Member5}
                    paraghraph={``}
                />
            </div>
        </div>
    );
};
export default Team;