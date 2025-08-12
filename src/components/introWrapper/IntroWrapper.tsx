"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const IntroScreen = dynamic(() => import("@/components/introScreen/IntroScreen"), {
    ssr: false,
});

export default function IntroWrapper() {
    const [introDone, setIntroDone] = useState(false);

    if (introDone) return null;

    return <IntroScreen onFinishAction={() => setIntroDone(true)} />;
}
