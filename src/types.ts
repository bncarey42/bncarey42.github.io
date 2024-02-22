type Technology = {
    icon: string;
    title: string;
}


type Role = {
    title: string;
    startDate: string;
    endDate: string;
    description?: string;
    technologies?: Technology[];
    duties?: string[] | string;
    projects?: Role[];
}
