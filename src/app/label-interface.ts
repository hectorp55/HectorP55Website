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
    Link: string,
    Images: ImageObject[]
}

export interface ImageObject {
    image: string,
    thumbImage: string,
    alt?: string,
    title?: string[]
}