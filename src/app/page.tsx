

import Header from "@/components/layout/header/Header";
import IntroWrapper from "@/components/introWrapper/IntroWrapper";
import Process from "@/components/process/Process";
import HeaderAnimation from "@/components/ui/headerAnimation/HeaderAnimation";




export default function HomePage() {


    return (
        <>
            <header>
                <IntroWrapper >
                    <Header />
               </IntroWrapper>
            </header>
            <main>
                <section>
                    <Process />
                </section>
            </main>
            <HeaderAnimation/>
        </>
    );
}
