import styles from "./process.module.css"
import dataServices from "@/assets/data/services.json"
import CardProcess from "@/components/process/cardProcess/CardProcess";

export default function Process() {

    return (
        <>
            <section className={styles.sectionCard}>
                {dataServices.map((service)=>
                    <section  key={service.id}>
                        <CardProcess service = {service}/>
                    </section>
                )}
            </section>

        </>
    )
}