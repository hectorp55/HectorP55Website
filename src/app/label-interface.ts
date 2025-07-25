export interface HeaderLabels {
    AboutMe: Header,
    Contact: Header,
    Projects: Header,
    Experience: Header,
}

export interface Header {
    Title: string,
    Description: string
}

export interface ProjectTitle {
    Primary: string,
    Secondary: string
}

export interface ProjectTemplate {
    Title: ProjectTitle,
    OneLiner: string,
    Description: string,
    Technologys: string[],
    Link: string,
    Images: ImageObject[]
}

export interface RoleInformation {
    Name: string,
    StartDate: string,
    EndDate: string,
}

export interface ExperienceTemplate {
    Company: ProjectTitle,
    Titles: RoleInformation[],
    Technologys: string[],
    Description: string[]
}

export interface ImageObject {
    image: string,
    thumbImage: string,
    alt?: string,
    title?: string[]
}