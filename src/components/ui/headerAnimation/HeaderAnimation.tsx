"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeaderAnimation() {
    useEffect(() => {
        const header = document.getElementById("header");
        const particles = document.getElementById("particles");
        const process = document.getElementById("process");

        if (!header || !particles || !process) return;

        const headerContent = header.querySelectorAll(':scope > article:not(#particles)');

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: header,
                    start: "top top",
                    end: "bottom+=300% top",
                    scrub: 0.5,
                    pin: true,
                    pinSpacing: true,
                },
            })
                .to(headerContent, { opacity: 0, duration: 1, ease: "none" })
                .to(particles, { opacity: 0, duration: 1, ease: "none" }, "+=4")
                .to(process, { opacity: 1, duration: 1, ease: "none" },"+=3");
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => ctx.revert();
    }, []);

    return null;
}
