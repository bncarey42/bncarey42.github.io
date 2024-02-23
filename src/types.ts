export type Link = {
    icon?: string;
    href: string;
    title: string;
    showTitle?: boolean;
}

export type Skill = {
    skill: Technology;
    onClick: (params?:any) => any;
}

export type Technology = {
    icon: string;
    title: string;
}

export type ResumeRole = {
    title: string;
    startDate: string;
    endDate: string;
    description?: string;
    technologies?: Technology[];
    duties?: string[] | string;
    projects?: ResumeRole[];
}

export type Courses = {
    title: string;
    semester: string;
}

export type Education = {
    school: string;
    website: string;
    city: string;
    degree: string;
    yearGraduated: string;
    extra?: string[];
    courses: Courses[];
}

export type Resume = {
    education: Education[]
    work: ResumeRole[]
}
