"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton"
import QuestionCard from "./components/questionCard"
const questionsdata = [
    {
        heading: `How do I list my property on the app?`
    },
    {
        heading: `Can I schedule viewings through the app?`
    },
    {
        heading: `Is it safe to transact through the app?`
    },
    {
        heading: `How can I communicate with buyers/renters`
    },
    {
        heading: `Are there any fees associated with using the app?`
    }
]

const Questions = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 py-10">
            <div className="flex flex-col gap-6 p-4">
                <h4 className="uppercase font-semibold">Questions & Answers</h4>
                <div className="flex flex-col gap-1 lg:text-5xl text-3xl font-semibold">
                    <h2>Have any questions?</h2>
                    <h2 className="text-lightgray">Find answers here.</h2>
                </div>
                <div>
                    <p className="text-md font-normal w-4/5 text-gray">Explore our comprehensive
                        FAQ section for answers to all your queries. We're here to help you navigate
                        through any uncertainties.</p>
                </div>
                <div>
                    <DefaultButton anchor onPress={"/"} classNames={""}>
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