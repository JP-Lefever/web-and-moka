import styles from "./header.module.css"
import dataHeader from "@/assets/data/header.json"
import Link from "next/link";
import Image from "next/image";
import PixelParticle from "@/components/ui/pixelParticules/PixelParticule";

export default function Header() {


    return <>
        <header id={"header"} className={styles.header}>
            <article>
                <figure className={styles.figure}>
                    <Image className={styles.image} src={"/images/web-moka-neon.png"} width={1024} height={860} alt={"logo entreprise, gobelet de café pc à la main, casque a la tete, avec inscrit le nom de l'entreprise web & moka"}/>
                </figure>
                <h2 className={styles.h2}>{dataHeader.subTitle}</h2>
            </article>
            <article id={"particles"}>
                {Array.from({length: 80}).map((_, i) => (
                    <PixelParticle key={i}/>
                ))}
            </article>
            <article>

                <h3 className={styles.h3}>{dataHeader.description}</h3>
                <Link className={styles.link} href={""}>{dataHeader.button}</Link>
            </article>
        </header>

    </>
}