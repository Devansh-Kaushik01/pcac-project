"use client"
const NewsCard = ({ item}) => {
    return (
        <div className="container mx-auto flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">
                {item.title}
            </h2>
            <p className="text-lightgray"> 
                {item.paragraph}
            </p>
            {/* <p className="text-lightgray"> 
                {item.paragraph}
            </p>
            <p className="text-lightgray"> 
                {item.paragraph}
            </p> */}
        </div>
    )
}
export default NewsCard;