"use client"
const InfoCard = ({ item }) => {
    return (
        <div className="container mx-auto h-auto flex gap-6 ">
            <div>
                {item.icon}
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl font-semibold">{item.heading}</h4>
                <p>{item.info}</p>
                <p>{item.info2}</p>
            </div>
        </div>
    );
};
export default InfoCard;