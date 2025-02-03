

import Navbar from "@/app/shared/components/Navbar";
import Deliveries from "@/app/deliveries/components/deliveries";

const DeliveriesPage = () => {
    return (
        <>
            <Navbar initialTab={'Deliveries'}/>

            <Deliveries/>
        </>
    )
}

export default DeliveriesPage;