import dataServices from "@/assets/data/services.json"
import CardProcess from "@/components/process/cardProcess/CardProcess";

export default function Process() {

    return (
        <>
            <section>
                {dataServices.map((service)=>
                    <section key={service.id}>
                        <CardProcess service = {service}/>
                    </section>
                )}
            </section>

        </>
    )
}