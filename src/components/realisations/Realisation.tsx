"use client"
import styles from "./realisation.module.css"
import dataRealisation from "@/assets/data/projects.json"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Realisation() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)

    const sectionRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!sectionRef.current || !contentRef.current) return;

        const context = gsap.context(() => {

            const content = contentRef.current
            const items = gsap.utils.toArray<HTMLElement>("ul li")

            // Pin + scroll du container
            gsap.to(content, {
                yPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=2000",
                    pin: true,
                    scrub: true,
                    onUpdate: self => {
                        const progress = self.progress // 0 à 1
                        const index = Math.floor(progress * items.length)
                        items.forEach((item, i) => {
                            if (i === index) item.classList.add(styles.active)
                            else item.classList.remove(styles.active)
                        })
                    }
                }
            })

        }, sectionRef)

        return () => context.revert()
    }, [])

    return (
        <section ref={sectionRef} className={styles.sectionProject}>
            <article ref={contentRef} className={styles.article}>
                {dataRealisation.map(d =>
                    <ul className={styles.ul} onClick={handleOpen} key={d.id}>
                        <li>
                            <h2>{d.label}</h2>
                            {open &&
                                <>
                                    <p>{d.description}</p>
                                    <Link href={d.label}>clic</Link>
                                </>
                            }
                        </li>
                    </ul>
                )}
            </article>
        </section>
    )
}
