import {Timeline} from "../components/Timeline.tsx";
import {ProfessionalExperiences} from "../../constants/experiences";

const Experiences = () => {
    return (
        <div className={"w-full"}>
            <Timeline data={ProfessionalExperiences} />
        </div>
    )
}

export default Experiences