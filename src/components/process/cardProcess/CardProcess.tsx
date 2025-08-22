import styles from "./cardProcess.module.css"
import Image from "next/image";
import {ServicesProps} from "@/types/definitions";


export default function CardProcess({service} : {service : ServicesProps}){

const {name, image, description} = service;

    return (
        <article className={styles.card}>
            <figure className={styles.imageContainer}>
                <Image className={styles.image} src={image} alt={name} fill={true} />
            </figure>

                <h2 className={styles.title}>{name}</h2>
                <p className={styles.year}>{description}</p>

        </article>
    )
}