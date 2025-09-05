"use client"

import styles from "./navBar.module.css"
import Image from "next/image";
import dataNav from "@/assets/data/navBar.json"
import Link from "next/link";
import {useState} from "react";
import clsx from "clsx";

export default function NavBar() {

    const [activeSection, setActiveSection] = useState<string>("")


    return (
        <>
            <nav className={styles.nav}>
                <section>
                    <ul>
                        {dataNav.map((item) => (
                            <li className={clsx(styles.link,{
                                [styles.active] : activeSection === item.link})} key={item.id}>
                                <a href={item.link} onClick={()=> setActiveSection(item.link)} className={clsx(styles.link,{
                                    [styles.active] : activeSection === item.link})} >{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </section>
            </nav>
        </>
    )
}