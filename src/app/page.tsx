
import styles from "./page.module.css"
import Header from "@/components/layout/header/Header";
import IntroWrapper from "@/components/introWrapper/IntroWrapper";
import Process from "@/components/process/Process";
import HeaderAnimation from "@/components/ui/headerAnimation/HeaderAnimation";




export default function HomePage() {


    return (
        <>
            <header id={"home"}>
                <IntroWrapper >
                    <Header />
               </IntroWrapper>
            </header>
            <main>
               <section className={styles.sec}>
                   <h1>A Propos</h1>
               </section>
                <section id={"process"}>
                    <Process />
                </section>
            </main>
            <HeaderAnimation/>
        </>
    );
}
