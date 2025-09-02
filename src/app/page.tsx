
import NavBar from "@/components/layout/navBar/NavBar";
import Header from "@/components/layout/header/Header";
import IntroWrapper from "@/components/introWrapper/IntroWrapper";
import Process from "@/components/process/Process";




export default function HomePage() {


    return (
        <>
            <header>
                <IntroWrapper >
                    <NavBar />
                    <Header />
               </IntroWrapper>
            </header>
            <main>
                <Process/>
            </main>
        </>
    );
}
