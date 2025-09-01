import styles from "./process.module.css"
import dataServices from "@/assets/data/services.json"
import CardProcess from "@/components/process/cardProcess/CardProcess";

export default function Process() {

    return (
        <>

            <section className={styles.section}>
                <article className={styles.h1}>
                    <h2>Process</h2>
                </article>
                <div className={styles.div}>
                    <article className={styles.sectionCard}>
                        {dataServices.map((service)=>
                            <article className={styles.articleCard} key={service.id}>
                                <CardProcess service = {service}/>
                            </article>
                        )}
                    </article>
                </div>
            </section>

        </>
    )
}