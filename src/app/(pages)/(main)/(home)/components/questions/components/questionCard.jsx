"use client"
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";

function Icon({ id, open }) {
    return (
        <IoIosArrowDown
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        />
    );
}
const QuestionCard = ({ item }) => { 
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)} className="lg:text-xl text-sm">{item.heading}</AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </>
    );
};
export default QuestionCard;