"use client"
import styles from "./header.module.css"
import dataHeader from "@/assets/data/header.json"
import {useEffect, useMemo, useRef, useState} from "react";
import gsap from "gsap";

export default function Header() {


    const [index, setIndex] = useState(0);

    const slogans = useMemo(()=>["créatifs", "performants", "interactifs", "modernes", "responsives"],[]);
    const ref = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!ref.current) return;

            gsap.to(ref.current, {
                y: -20,
                opacity : 0,
                duration : 0.5,
                ease : "power2.in",
                onComplete : ()=>{
                    setIndex(prev => (prev + 1) % slogans.length);


            gsap.fromTo(
                ref.current,
                {opacity:0, },
                {opacity:1, duration:1, ease : "power2.out"},
            )
        }
            });},2000)
        return ()=>clearInterval(interval)
    },[slogans.length]);




    return <>
        <header id={"header"} className={styles.header}>

            <article>
                <h3 className={styles.slogans}>{dataHeader.title} <span ref={ref} className={styles.span}>{slogans[index]}</span></h3>
                <h3 className={styles.h3}>{dataHeader.description}</h3>
                <h3 className={styles.subtitle}>{dataHeader.subTitle}</h3>
                {/*<Link className={styles.link} href={""}>{dataHeader.button}</Link>*/}
            </article>

        </header>

    </>
}