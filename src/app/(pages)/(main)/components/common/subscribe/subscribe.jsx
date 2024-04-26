"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import DefaultInput from "../../../../components/defaultInput/deafultInput"

const Subscribe = () => {
    return (
        <div className="w-full subscribeimg lg:p-10 p-4">
            <div className="container mx-auto backdrop-blur-xs backdrop-brightness-150  bg-white/10 py-14">
                <div className="container mx-auto flex flex-col gap-5 justify-center text-center items-center ">
                    <h2 className="text-white lg:text-5xl text-3xl font-semibold">Subscribe</h2>
                    <p className="text-white lg:text-lg text-sm lg:px-0 px-4 ">Subscribe our newsletter too stay updated every moment.</p>
                    <div className="flex lg:flex-row flex-col gap-2">
                        <DefaultInput
                            classNames={'p-2 !bg-white text-black lg:w-[400px] !h-14 !rounded-lg'}
                            placeholder={"Enter a valid email address..."}
                        />
                        <DefaultButton anchor onPress={"/"} classNames={"bg-blue text-white h-14 lg:w-32 flex justify-center rounded-lg"}>
                            Submit
                        </DefaultButton>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Subscribe;