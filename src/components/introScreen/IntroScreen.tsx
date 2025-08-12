"use client";
import styles from "./introScreen.module.css";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&é(-è_çà)=^$*ù!:;,?.<>";
const phrases = ["Welcome", "to", "Web", "&", "Moka"];

function scrambleText(text: string, progress: number) {
    return text
        .split("")
        .map((char, i) => {
            if (i < progress) return char;
            return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");
}

export default function IntroScreen({ onFinishAction }: { onFinishAction: () => void }) {
    const [mounted, setMounted] = useState(false);
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [showPanels, setShowPanels] = useState(false);

    const panelCount = 32;
    const panels = useMemo(() => Array.from({ length: panelCount }), []);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!mounted) return;

        if (step < phrases.length) {
            if (progress < phrases[step].length) {
                const timeout = setTimeout(() => setProgress(progress + 1), 60);
                return () => clearTimeout(timeout);
            } else {
                const delay = setTimeout(() => {
                    setStep(step + 1);
                    setProgress(0);
                }, 600);
                return () => clearTimeout(delay);
            }
        } else {
            const endDelay = setTimeout(() => setShowPanels(true), 200);
            return () => clearTimeout(endDelay);
        }
    }, [mounted, progress, step]);

    useEffect(() => {
        if (showPanels) {
            const totalTime = panelCount * 0.02 * 1000 ;
            const timeout = setTimeout(() => onFinishAction(), totalTime);
            return () => clearTimeout(timeout);
        }
    }, [showPanels, onFinishAction, panelCount]);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {!showPanels ? (
                <motion.div
                    key="intro"
                    className={styles.container}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    {scrambleText(phrases[step] || "", progress)}
                </motion.div>
            ) : (
                <motion.div key="panels" className={styles.panelsWrapper}>
                    {panels.map((_, i) => (
                        <motion.div
                            key={i}
                            className={styles.panel}
                            style={{
                                top: `${(i * 100) / panelCount}%`,
                                height: `${100 / panelCount}%`,
                            }}
                            initial={{ rotateX: 0, opacity: 1 }}
                            animate={{ rotateX: -90, opacity: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: i * 0.02,
                                ease: "easeInOut",
                            }}
                        >
                            <div className={styles.panelInner}></div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}


