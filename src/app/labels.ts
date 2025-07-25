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
        Description: 'A mobile game I designed and developed using Unity and C#. The concept came from a desire to create a game that could be played using only a single tap, making it simple, accessible, and engaging. I handled every aspect of the project, including game design, development, and artwork, from start to finish. The game is currently available on the Google Play Store.',
        Technologys: [ 'Unity - C#', 'Visual Studio', 'Adobe Illustrator', 'GitHub' ],
        Link: "https://github.com/hectorp55/bridgebuilder",
        Images: [
            {image: './assets/BridgeBuilder-TitleScreen.png', thumbImage: './assets/BridgeBuilder-TitleScreen.png'},
            {image: './assets/BridgeBuilder-Gameplay2.png', thumbImage: './assets/BridgeBuilder-Gameplay2.png'},
            {image: './assets/BridgeBuilder-Gameplay3.png', thumbImage: './assets/BridgeBuilder-Gameplay3.png'},
            {image: './assets/BridgeBuilder-Gameplay4.png', thumbImage: './assets/BridgeBuilder-Gameplay4.png'},
            {image: './assets/BridgeBuilder-Gameplay5.png', thumbImage: './assets/BridgeBuilder-Gameplay5.png'},
            {image: './assets/BridgeBuilder-Gameplay6.png', thumbImage: './assets/BridgeBuilder-Gameplay6.png'},
        ]
    },
    {
        Title: { Primary: 'Cake', Secondary: 'Stacker' },
        OneLiner: 'Uno soñaba que era rey, Y de momento quiso un pastel',
        Description: 'A web game I created, inspired by one of my favorite childhood mini games, Disney’s 625 Sandwich Stacker. The main character, a piglet who dreams of becoming king so he can eat as much cake as he wants, was inspired by the lullaby “Cochinitos Dormilones” by Cri Cri, a bedtime song my dad used to sing to me. I handled every part of the game myself, from the hand-drawn character art to the core gameplay mechanics. The result is a playful, nostalgic experience that brings together personal memories and interactive design.',
        Technologys: [ 'Unity - C#', 'Adobe Photoshop', 'Visual Studio' ],
        Link: null,
        Images: [
            {image: './assets/CakeStacker-TitleScreen.png', thumbImage: './assets/CakeStacker-TitleScreen.png'},
            {image: './assets/CakeStacker-Gameplay2.png', thumbImage: './assets/CakeStacker-Gameplay2.png'},
            {image: './assets/CakeStacker-Gameplay3.png', thumbImage: './assets/CakeStacker-Gameplay3.png'},
            {image: './assets/CakeStacker-Gameplay4.png', thumbImage: './assets/CakeStacker-Gameplay4.png'},
            {image: './assets/CakeStacker-Gameplay5.png', thumbImage: './assets/CakeStacker-Gameplay5.png'},
        ]
    },
    {
        Title: { Primary: 'Intergalactic', Secondary: 'Muster' },
        OneLiner: 'Intergalactic hamburgers are all the rage!',
        Description: 'A web game I led the development of, created in collaboration with a group of work friends interested in exploring what it takes to bring a small game from concept to launch. As a team, we handled everything from initial ideation and hand-drawn artwork to game design, development, and final deployment. It was a fun and rewarding exercise in collaboration, creativity, and fast-paced iteration. The game is still available to play on itch.io and can be found in the README of the GitHub project linked above.',
        Technologys: [ 'Unity - C#', 'Krita', 'Visual Studio', 'GitHub' ],
        Link: "https://github.com/hectorp55/UFOCowGame",
        Images: [
            {image: './assets/IM-Gameplay1.png', thumbImage: './assets/IM-Gameplay1.png'},
            {image: './assets/IM-Gameplay2.png', thumbImage: './assets/IM-Gameplay2.png'},
            {image: './assets/IM-Gameplay3.png', thumbImage: './assets/IM-Gameplay3.png'},
        ]
    }
];