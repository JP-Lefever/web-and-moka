import styles from "./cost.module.css"
import dataCost from "@/assets/data/cost.json"
import { CostServicesProps} from "@/types/definitions";

export  default function Cost(){

    return (
        <>
            <section className={styles.section}>
            {dataCost.services.map((item : CostServicesProps) => (
                <article className={styles.article} key={item.id}>
                    <h2 className={styles.h2}>{item.name}</h2>
                    <ul className={styles.ul}>
                        <li>{item.price}</li>
                        <li>{item.scope}</li>
                        <li>{item.responsive}</li>
                        <li>{item.design_ux}</li>
                        <li>{item.seo}</li>
                        {item.payment &&
                            <li>{item.payment}</li>
                        }
                        {item.api &&
                            <li>{item.api}</li>
                        }
                        <li>{item.timeline}</li>
                    </ul>
                </article>

            ))}
            </section>
        </>
    )
}