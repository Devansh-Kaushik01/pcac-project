"use client"

const ExploreCard = ({ item }) => {
    return (
        <div className=" flex flex-col gap-2 p-2 ">
            <h3 className="text-3xl font-normal">{item.serialno}</h3>
            <h4 className="text-2xl font-semibold">
                {item.heading}
            </h4>
            <p className="font-normal text-gray">
                {item.paragraph}
            </p>
        </div>
    )
}
export default ExploreCard;