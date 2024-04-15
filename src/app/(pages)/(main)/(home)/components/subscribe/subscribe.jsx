"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import DefaultInput from "../../../../components/defaultInput/deafultInput"

const Subscribe = () => {
    return (
        <div className="w-full subscribeimg py-10">
            <div className="container mx-auto backdrop-blur-xs backdrop-brightness-150 py-14">
                <div className="container mx-auto flex flex-col gap-5 justify-center text-center items-center ">
                    <h2 className="text-white text-5xl">Subscribe</h2>
                    <p className="text-white text-lg lg:px-0 px-4 ">Subscribe our newsletter too stay updated every moment.</p>
                    <div className="flex lg:flex-row flex-col gap-2">
                        <DefaultInput
                            classNames={'p-2 !bg-white text-black lg:w-[300px] !rounded-lg'}
                        />
                        <DefaultButton classNames={"bg-blue text-white !h-10 rounded-lg"}>
                            Submit
                        </DefaultButton>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Subscribe;