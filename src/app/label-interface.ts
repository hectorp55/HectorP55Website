export interface HeaderLabels {
    AboutMe: Header,
    Contact: Header,
    Projects: Header
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
    Images: string[]
}
