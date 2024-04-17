"use client"
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";
import Image from "next/image";
import Member1 from "../../../../../../../assets/images/member1.jpg"

const MemberCards = () => {
    return (
        <Card className="container lg:flex-row">
            <CardBody>
                <Typography color="gray" className="mb-8 font-normal">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a gallery of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in 
                  the 1960s will the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including
                  version of Lorem Ipsum.
                </Typography>
            </CardBody>
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <Image
                    src={Member1}
                    alt="card-image"
                />
            </CardHeader>
        </Card>
    );
};
export default MemberCards;