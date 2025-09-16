
import styles from "./page.module.css"
import Header from "@/components/layout/header/Header";
import IntroWrapper from "@/components/introWrapper/IntroWrapper";
import Process from "@/components/process/Process";
import About from "@/components/about/About";





export default function HomePage() {


    return (
        <>
            <header>
                <IntroWrapper >
                    <Header />
               </IntroWrapper>
            </header>
            <main>
               <section id={"about"} >
                   <About/>
               </section>
                <section id={"process"}>
                    <Process />
                </section>
            </main>

        </>
    );
}
