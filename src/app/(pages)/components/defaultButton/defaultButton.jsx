"use client"
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const DefaultButton = ({ anchor, children, onPress, classNames }) => {
    return (
        anchor ?
            <Link href={onPress}
                className={`font-semibold rounded-lg bg-blue flex justify-center items-center h-14 w-32 text-white  px-6 text-nowrap ${classNames}`}
            >
                {children}
            </Link>
            :
            <Button type="button"
                onClick={onPress}
                className={`bg-blue hover:shadow-none shadow-none 
        text-white text-md text-nowrap flex justify-center rounded-lg h-14 w-32 font-semibold ${classNames}`}
            >
                {children}
            </Button>
    )
};
export default DefaultButton;