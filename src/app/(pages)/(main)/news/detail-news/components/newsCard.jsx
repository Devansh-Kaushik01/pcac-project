"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";

const NewsCard = ({ item, currentRecord, totalRecords }) => {
    return (
        <div className="container mx-auto flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">
                {item.title}
            </h2>
            {/* <div  dangerouslySetInnerHTML={{__html: item.paragraph}} /> */}
            <p className="text-lightgray">
                {item.paragraph}
            </p>
            <div className="flex justify-between">
                 
                <DefaultButton anchor onPress={`/news/detail-news/${currentRecord === 1 ? totalRecords : currentRecord - 1 }`} classNames={"hover:!text-white !text-black hover:bg-blue bg-graybtn"}>
                    Prev
                </DefaultButton>
                
                <DefaultButton anchor onPress={`/news/detail-news/${currentRecord === totalRecords ? 1 : currentRecord + 1}`} classNames={"hover:!text-white !text-black hover:bg-blue bg-graybtn"}>
                    Next
                </DefaultButton>

            </div>
        </div>
    )
}
export default NewsCard;