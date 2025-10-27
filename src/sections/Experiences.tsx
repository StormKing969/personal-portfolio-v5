import {Timeline} from "../components/Timeline.tsx";
import {ProfessionalExperiences} from "../../constants/experiences";

const Experiences = () => {
    return (
        <section id={"work"} className={"w-full"}>
            <Timeline data={ProfessionalExperiences} />
        </section>
    )
}

export default Experiences