"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton"
import QuestionCard from "./components/questionCard"
const questionsdata = [
    {
        heading: "What are my options?"
    },
    {
        heading: "Can i switch to s different plan?"
    },
    {
        heading: "Do you offer non-disclouser signature?"
    },
    {
        heading: "Do you issue loans?"
    },
    {
        heading: "Are there any long-terms contracts?"
    }
]

const Questions = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 py-10">
            <div className="flex flex-col gap-5 p-4">
                <h4 className="uppercase font-bold">Questions & Answers</h4>
                <div className="flex flex-col gap-1 lg:text-5xl text-3xl font-medium">
                    <h2>Have any questions?</h2>
                    <h2 className="text-gray">Find answers here.</h2>
                </div>
                <div>
                    <p className="text-sm w-4/5 text-lightgray">If you’re new to Genie or looking to supercharge your current stack, this
                        section will help you learn more about the platform and its features.</p>
                </div>
                <div>
                    <DefaultButton classNames={"bg-blue text-white"}>
                        Read More
                    </DefaultButton>
                </div>
            </div>
            <div className='lg:grid lg:px-0 px-4 '>
                {questionsdata.map((item, index) => {
                    return (
                        <QuestionCard
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Questions;