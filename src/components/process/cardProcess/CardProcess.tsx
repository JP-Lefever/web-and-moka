import Image from "next/image";
import {ServicesProps} from "@/types/definitions";


export default function CardProcess({service} : {service : ServicesProps}){

const {name, image, description} = service;

    return (
        <article>
            <Image src={image} alt={name} width={1024} height={1280} />
            <h2>{name}</h2>
            <p>{description}</p>
        </article>
    )
}