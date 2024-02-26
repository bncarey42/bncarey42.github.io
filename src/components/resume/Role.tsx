import {ResumeRole} from "../../types.ts";
// import linkifyHtml from "linkify-html";
import TechBtn from "../TechBtn.tsx";

interface RoleInterface extends ResumeRole {
    isProject?: boolean;
}

function linkifyHtml(desc: string) {
    return desc
}

const Role = ({
                  title,
                  description,
                  startDate,
                  endDate,
                  projects,
                  duties,
                  technologies,
                  isProject = false
              }: RoleInterface) => {
    return <div className="mb-3">
        <div className="mb-3">
            <h4 className={"font-semibold"}>{title}</h4>
            <p className="font-semibold text-primary"> {startDate} - {endDate}</p>
            {description && <p>
                <span className="font-semibold mr-1">{
                    `${isProject ? "Project" : "Role"} Description:`
                }</span>
                <span>{description ? linkifyHtml(description) : ''}</span></p>}
        </div>
        {technologies?.length && <div className="mb-3">
            <h4>Technologies:</h4>
            <ul className="inline-grid grid-cols-4 lg:grid-cols-6 gap-3 w-full">
                {
                    technologies.map((tech, key) =>
                        <TechBtn icon={tech.icon} title={tech.title} onClick={() => {
                        }} key={key}/>)
                }
            </ul>
        </div>}
        {duties?.length && <div className="mb-3">
            <h4>Responsibilities:</h4>
            <div className="pl-3">

                {typeof duties === 'string' ? linkifyHtml(duties) :
                    <ul>{duties.map((duty, key) => <li className="list-disc" key={key}>{linkifyHtml(duty)}</li>)}</ul>}

            </div>
        </div>}
        {
            projects?.length &&
            <div className="mb-3">
                <h4>Projects:</h4>
                <div className="pl-3">
                    {projects.map((project, idx) => <Role title={project.title} description={project.description}
                                                          duties={project.duties} technologies={project.technologies}
                                                          startDate={project.startDate} endDate={project.endDate}
                                                          isProject={true}
                                                          key={idx}/>)}
                </div>
            </div>
        }
    </div>
}

export default Role;
