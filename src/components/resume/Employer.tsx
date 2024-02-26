import {ResumeEmployer} from "../../types.ts";
import Role from "./Role.tsx";

const Employer = ({employer, startDate, endDate, roles}: ResumeEmployer) => {
    console.log("Employer", employer, startDate, endDate, roles)
    return <>
        <div className="">
            <div className="grid grid-cols-3 gap-3 sticky top-3">
                <div className="col-span-2">
                    <h3 className={"font-semibold"}>{employer}</h3>
                    <p className="font-semibold text-primary"> {startDate} - {endDate}</p>
                </div>
            </div>
        </div>
        <div className="col-span-3">
            { roles.filter(() => true).map((role, idx) =>
                <Role title={role.title}
                      startDate={role.startDate}
                      endDate={role.endDate}
                      technologies={role.technologies}
                      description={role.description}
                      duties={role.duties}
                      projects={role.projects}
                      key={idx}
                />
            )}
        </div>
    </>
}

export default Employer;
