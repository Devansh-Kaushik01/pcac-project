"use client"
import Image from "next/image";
import Link from "next/link";
import Googleplay from "../../../../../../assets/images/googleplay.png"
import Playstore from "../../../../../../assets/images/appstore.png"

const Download = () => {
    return (
        <div className="container mx-auto downloadImg">
            <div className="p-10 flex lg:flex-row flex-col gap-4 justify-between items-center">
                <h2 className="lg:text-5xl text-3xl text-white font-semibold ">Download PCAC App</h2>
                <div className="flex gap-2">
                    <Link href="/">
                        <Image
                            src={Googleplay}
                            alt="Googleplay"
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={Playstore}
                            alt="Playstore"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Download;
