export default function Landing() {

    const presArray = ["Welcome", "to", "Web", "&", "Moka"]

    const scrolling = presArray.map((word)=> word)

    return (<>
        <section>
            <h1>{scrolling}</h1>
        </section>
    </>)
}