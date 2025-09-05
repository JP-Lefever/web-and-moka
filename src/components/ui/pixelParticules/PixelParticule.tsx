"use client"
import styles from "./pixelParticule.module.css"
import { useEffect, useState, CSSProperties } from "react";

export default function PixelParticle() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [delay, setDelay] = useState(0);
    const [size, setSize] = useState(2);
    const [color, setColor] = useState("#ffffff");


    useEffect(() => {
    const colors = ["#00f6ff", "#ff00f7", "#ffe600", "#ff6b00", "#00ff9d"];
        setX(Math.random() * 100);
        setY(Math.random() * 100);
        setDelay(Math.random() * 5);
        setSize(2 + Math.random() * 6);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, []);


        const style: CSSProperties = {
        top: `${y}%`,
        left: `${x}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${color}`,
        animationDelay: `${delay}s, ${delay}s`,

    };

    return <div className={styles.particle} style={style} />;
}
