"use client"

import Link from "next/link";

const DefaultFooter = () => {
  return(
    <div className="flex justify-center gap-24">
        <div className="flex flex-col gap-2">
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/">Help</Link>
        </div>
        <div className="flex flex-col gap-2">
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Disclaimer</Link>
        </div>
    </div>
  )
}
export default DefaultFooter;