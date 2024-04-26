"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import DefaultInput from "../../../../../components/defaultInput/deafultInput"
const DefaultForm = () => {
    return (
        <div className="container mx-auto h-auto flex flex-col gap-4 ">
            <div className="flex gap-4">
                <DefaultInput
                    type={"text"}
                    placeholder={"Your Name*"}
                    classNames={"!border !border-lightgray p-2 h-14 !rounded-lg "}
                />
                <DefaultInput
                    type={"email"}
                    placeholder={"Your Email*"}
                    classNames={"!border !border-lightgray p-2 h-14 !rounded-lg "}
                />
            </div>
            <div className="flex gap-4">
                <DefaultInput
                    type={"phone"}
                    placeholder={"Your Phone*"}
                    classNames={"!border !border-lightgray p-2 h-14 !rounded-lg "}
                />
                <DefaultInput
                    type={"text"}
                    placeholder={"Subject*"}
                    classNames={"!border !border-lightgray p-2 h-14 !rounded-lg "}
                />
            </div>
            <div className="flex flex-col gap-4">
                <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full focus:outline-none rounded-lg border border-lightgray"
                    placeholder="Additional Details ( optional )" />
                <DefaultButton anchor onPress={"/"} classNames={"bg-blue text-white flex justify-center w-full h-14 rounded-lg"}>
                    Send Message
                </DefaultButton>
            </div>
        </div>
    );
};
export default DefaultForm;