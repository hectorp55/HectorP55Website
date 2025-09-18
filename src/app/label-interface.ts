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

export interface TechLogos {
    [key: string]: string
    // React: string,
    // ReactQuery: string,
    // Firebase: string,
    // GraphQL: string,
    // Angular: string,
    // Python: string,
    // Kotlin: string,
    // Java: string,
    // Typescript: string,
    // Xcode: string,
    // Unity: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Unity_Hub_Logo.png",
    // GameCenter: "https://upload.wikimedia.org/wikipedia/commons/9/96/Game_Center_icon.svg",
    // VisualStudioCode: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Visual_Studio_Code_0.10.1_icon.png",
    // VisualStudio: "https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg",
    // Canva: "https://upload.wikimedia.org/wikipedia/he/5/56/Canva-logo.png",
    // GitHub: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    // NextJS: "./assets/next.js.png",
    // TailwindCss: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hasyim50px-TailwindCSS_Logo.png",
    // AWS: "./assets/aws.png",
    // Illustrator: "https://upload.wikimedia.org/wikipedia/commons/5/59/Adobe-illustrator-icon.svg",
    // Photoshop: "https://upload.wikimedia.org/wikipedia/commons/9/92/Adobe_Photoshop_CS6_icon.svg",
    // Krita: "https://upload.wikimedia.org/wikipedia/commons/7/73/Calligrakrita-base.svg",
    // PokeAPI: "./assets/pokeapi.png",
    // RocketLeague: "./assets/champ.png",
}