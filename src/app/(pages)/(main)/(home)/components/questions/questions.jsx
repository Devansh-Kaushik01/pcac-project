"use client"
import DefaultButton from "@/app/(pages)/components/defaultButton/defaultButton"
import QuestionCard from "./components/questionCard"
const questionsdata = [
    {
        heading: `How can I list my property for sale or rent on the app?`,
        answer: `To list your property, simply download our app, create an account, and navigate to the "List Property" section.
         Fill in the necessary details about your property, such as location, size, amenities, and price. You can also upload photos
          to showcase your property effectively. Once submitted, your listing will be reviewed and published on the app.`
    },
    {
        heading: `How can I search for properties that meet my specific criteria?`,
        answer: `You can easily search for properties by using our advanced search filters. Simply input your desired location, property
         type, price range, and any other preferences such as the number of bedrooms or amenities. The app will then display a list of 
         properties that match your criteria, allowing you to browse through them and find the perfect one for you.`
    },
    {
        heading: `What steps should I take to buy a property through the app?`,
        answer: `Once you find a property you're interested in, you can contact the seller or their agent directly through the app to arrange
         viewings or ask any questions you may have. If you decide to proceed with the purchase, you can negotiate the terms, conduct inspections,
          and finalize the deal through the app. We also provide guidance and support throughout the buying process to ensure a smooth transaction.`
    },
    {
        heading: `How can I ensure the safety and legitimacy of listings on the app?`,
        answer: `We take the safety and authenticity of listings very seriously. All listings on our app are verified and screened to ensure they meet 
        our standards. We also have measures in place to prevent fraudulent activity and protect our users. However, we advise users to exercise caution 
        and conduct due diligence when dealing with property transactions.`
    },
    {
        heading: `Can I use the app to find properties for short-term rentals or vacation stays?`,
        answer: `Yes, our app offers a wide range of properties for short-term rentals and vacation stays, including apartments, villas, and holiday homes.
         You can use the search filters to specify your rental duration, desired location, and any other preferences you may have. Whether you're planning 
         a weekend getaway or an extended vacation, our app has plenty of options to choose from.`
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