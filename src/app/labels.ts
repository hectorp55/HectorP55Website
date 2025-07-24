import type { HeaderLabels, ProjectTemplate } from './label-interface';

export const PageHeaderLabels: HeaderLabels = {
    AboutMe: {
        Title: 'About Me',
        Description: 'Full-stack software engineer with experience building scalable, responsive web applications using modern frameworks and technologies. I specialize in developing and maintaining critical, client-facing features with a solid understanding of both front-end and back-end systems. Outside of work, I enjoy playing video games and dabbling in mobile game design. One day, I’m hoping to build the next Flappy Bird.'
    },
    Contact: {
        Title: 'Contact Me',
        Description: 'I’m currently exploring new full-time opportunities and excited to contribute to a team where I can grow, solve meaningful problems, and build impactful products. If you have any questions, feedback, or potential opportunities for collaboration, I’d love to connect.'
    },
    Projects: {
        Title: 'Projects',
        Description: 'A gallery of my personal at home projects.'
    }
};

export const Projects: ProjectTemplate[] = [
    {
        Title: { Primary: 'Bridge', Secondary: 'Builder' },
        OneLiner: 'Ever felt like building just a whole bunch or bridges? Well now you can!',
        Description: 'A mobile game I developed using Unity. The original idea came from a brainstorming session with my brother in which we wanted to create a game that only took single taps as input. The game was completely designed, developed, and drawn by me. It can be found on the google play store.',
        Technologys: [ 'Unity - C#', 'Adobe Illustrator' ],
        Link: "https://github.com/hectorp55/bridgebuilder",
        Images: ['./assets/BridgeBuilder-TitleScreen.png', './assets/BridgeBuilder-Gameplay2.png', './assets/BridgeBuilder-Gameplay3.png', './assets/BridgeBuilder-Gameplay4.png', './assets/BridgeBuilder-Gameplay5.png', './assets/BridgeBuilder-Gameplay6.png']
    },
    {
        Title: { Primary: 'Cake', Secondary: 'Stacker' },
        OneLiner: 'Uno soñaba que era rey, Y de momento quiso un pastel',
        Description: 'A web game I developed as a final project for my Digital Painting course at Texas A&M. The game was based on a Disney mini game which I played as a kid called "625 Sandwich Stacker", and the piglet inspired by the Cri Cri song, "Cochinitos Dormilones". The game and character were completely designed, developed, and drawn by me.',
        Technologys: [ 'Unity - C#', 'Adobe Photoshop' ],
        Link: null,
        Images: ['./assets/CakeStacker-TitleScreen.png', './assets/CakeStacker-Gameplay2.png', './assets/CakeStacker-Gameplay3.png', './assets/CakeStacker-Gameplay4.png', './assets/CakeStacker-Gameplay5.png']
    },
    {
        Title: { Primary: 'Intergalactic', Secondary: 'Muster' },
        OneLiner: 'Intergalactic hamburgers are all the rage!',
        Description: 'A web game I developed using Unity. The original idea came from just watching to many alien movies. The game was designed, developed, and drawn by me and a couple work friends. It can be found on itch.io at the link below.',
        Technologys: [ 'Unity - C#', 'Krita' ],
        Link: "https://github.com/hectorp55/UFOCowGame",
        Images: ['./assets/IM-Gameplay1.png', './assets/IM-Gameplay2.png', './assets/IM-Gameplay3.png']
    }
];