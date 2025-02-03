
import Patients from "@/app/patients/components/patients";
import Navbar from "@/app/shared/components/Navbar";

const PatientsPage = () => {

    return (
        <>
            <Navbar initialTab='Patients'/>

            <Patients/>
        </>
    );
}

export default PatientsPage;