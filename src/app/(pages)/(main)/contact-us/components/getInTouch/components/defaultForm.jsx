"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import DefaultInput from "../../../../../components/defaultInput/deafultInput"
const DefaultForm = () => {
    return (
        <div className="container mx-auto h-auto flex flex-col gap-4">
            <div className="flex gap-4">
                <DefaultInput
                    type={"text"}
                    placeholder={"Your Name*"}
                    classNames={"!border-2 !border-gray p-2 !rounded-lg "}
                />
                <DefaultInput
                    type={"email"}
                    placeholder={"Your Email*"}
                    classNames={"!border-2 !border-gray p-2 !rounded-lg "}
                />
            </div>
            <div className="flex gap-4">
                <DefaultInput
                    type={"phone"}
                    placeholder={"Your Phone*"}
                    classNames={"!border-2 !border-gray p-2 !rounded-lg "}
                />
                <DefaultInput
                    type={"text"}
                    placeholder={"Subject*"}
                    classNames={"!border-2 !border-gray p-2 !rounded-lg "}
                />
            </div>
            <div className="flex flex-col gap-4">
                <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full rounded-lg border-2 border-gray"
                    placeholder="Additional Details ( optional )" />
                <DefaultButton classNames={"bg-blue text-white w-full h-12 "}>
                    Send Message
                </DefaultButton>
            </div>
        </div>
    );
};
export default DefaultForm;