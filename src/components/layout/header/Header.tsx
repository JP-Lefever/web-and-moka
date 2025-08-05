import styles from "./header.module.css"
import dataHeader from "@/assets/data/header.json"
import Link from "next/link";
import Image from "next/image";

export default function Header() {


    return <>
        <header className={styles.header}>
            <article>
                <h1 className={styles.h1}>{dataHeader.title}</h1>
                <h2 className={styles.h2}>{dataHeader.subTitle}</h2>
                <Link className={styles.link} href={""}>{dataHeader.button}</Link>
                <h3 className={styles.h3}>{dataHeader.description}</h3>
            </article>
            <article>
                <figure>
                    <Image className={styles.image} src={"/images/header.png"} width={1024} height={860} alt={"logo entreprise, gobelet de café pc à la main, casque a la tete, avec inscrit le nom de l'entreprise web & moka"}/>
                </figure>
            </article>
        </header>

    </>
}