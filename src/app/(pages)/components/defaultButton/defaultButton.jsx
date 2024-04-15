import React from 'react'
import Link from "next/link"
import { Button } from "@material-tailwind/react";

function DefaultButton({ children, classNames, onPress, anchor }) {
    return (
        anchor ?
            <Link href={onPress}
                className={`bg-theme flex items-center h-10 text-white rounded text-center px-6 text-nowrap 
                ${classNames}`}
            >
                {children}
            </Link>
            :
            <Button
                type='button'
                onClick={onPress}
                className={`bg-theme hover:shadow-none shadow-none !py-0 h-10 text-white rounded text-center px-6 text-nowrap normal-case font-medium text-sm ${classNames}`}
            >
                {children}
            </Button>
    )
}

export default DefaultButton