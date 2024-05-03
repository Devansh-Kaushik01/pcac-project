"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import DefaultInput from "../../../../../components/defaultInput/deafultInput";

const InputData = [
    {
       type: "text",
       placeholder: "Your Name*"
    },
    {
        type: "email",
        placeholder: "Your Email*"
     },
     {
        type: "phone",
        placeholder: "Your Phone*"
     },
     {
        type: "text",
        placeholder: "Your Subject*"
     }

]

const DefaultForm = () => {
    return (
        <div className="container mx-auto h-auto flex flex-col gap-4 ">
            <div className=' grid lg:grid-cols-2 gap-2 '>
                {InputData.map((item, index) => {
                    return (
                        <DefaultInput
                            key={index}
                            type={item.type}
                            placeholder={item.placeholder}
                            classNames={"!border !border-lightgray p-2 h-14 !rounded-lg "}
                        />
                    )
                })}
            </div>
            <div className="flex flex-col gap-4">
                <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full focus:outline-none rounded-lg border border-lightgray"
                    placeholder="Additional Details ( optional )" />
                <DefaultButton anchor onPress={"/"} classNames={"w-full"}>
                    Send Message
                </DefaultButton>
            </div>
        </div>
    );
};
export default DefaultForm;