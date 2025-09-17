import type { ExperienceTemplate, HeaderLabels, ProjectTemplate } from './label-interface';

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
    },
    Experience: {
        Title: 'Experience',
        Description: 'Another look at my professional experience.'
    }
};

export const Projects: ProjectTemplate[] = [
    {
        Title: { Primary: 'Rizze:', Secondary: 'A Stacker Game' },
        OneLiner: 'A nostalgic challenge reborn for your phone. Fast, fun and addictive!',
        Description: 'Rizze is a fast and addictive one-tap challenge built for quick play sessions on the go. Designed for simplicity and accessibility, every round delivers an easy-to-learn yet hard-to-master experience that keeps you coming back. With smooth gameplay, clean visuals, and engaging design, Rizze is perfect for anyone looking for a fun pick-up-and-play game on iOS.',
        Technologys: [ 'Unity - C#', 'Xcode', 'Apple Core', 'Apple Gamekit', 'Visual Studio Code', 'Canva', 'GitHub' ],
        Link: "https://github.com/hectorp55/cube-stacker",
        Images: [
            {image: './assets/Rizze-1.png', thumbImage: './assets/Rizze-1.png'},
            {image: './assets/Rizze-2.png', thumbImage: './assets/Rizze-2.png'},
            {image: './assets/Rizze-3.png', thumbImage: './assets/Rizze-3.png'},
            {image: './assets/Rizze-4.png', thumbImage: './assets/Rizze-4.png'},
        ]
    },
    {
        Title: { Primary: 'Fuel Cast:', Secondary: 'Gas Price Estimator' },
        OneLiner: 'Know before you pump. Get tomorrow\’s gas price forecast today.',
        Description: 'This app helps drivers make smarter fueling decisions by predicting whether gas prices are likely to rise or fall. It combines historic data from the FRED Federal Reserve API and the U.S. Energy Information Administration API, with daily price updates from Collect API, to generate forecasts. Built with Next.js using API routes and deployed on AWS Amplify, the app delivers fast, reliable insights right from the web.',
        Technologys: [ 'Next.js', 'Tailwind CSS', 'Next.js API Routes', 'AWS Amplify', 'Canva', 'GitHub' ],
        Link: "https://github.com/hectorp55/gas-prices-estimator",
        Images: [
            {image: './assets/Fuelcast-1.png', thumbImage: './assets/Fuelcast-1.png'},
            {image: './assets/Fuelcast-2.png', thumbImage: './assets/Fuelcast-2.png'},
            {image: './assets/Fuelcast-3.png', thumbImage: './assets/Fuelcast-3.png'},
            {image: './assets/Fuelcast-4.png', thumbImage: './assets/Fuelcast-4.png'},
        ]
    },
    {
        Title: { Primary: 'Pokemon', Secondary: 'Wordle' },
        OneLiner: 'New York Times Wordle, Pokemon Version',
        Description: 'A React-based demo inspired by the popular New York Times game, Wordle. In this version, players guess five-letter Pokémon names and can request hints in the form of their in-game sprites. It\'s a fun twist on the original, blending wordplay with nostalgia for Pokémon fans.',
        Technologys: [ 'React', 'React Query', 'Pokemon API V2', 'Visual Studio', 'GitHub', 'Firebase' ],
        Link: "https://github.com/hectorp55/poke-wordle",
        Images: [
            {image: './assets/poke-wordle-1.png', thumbImage: './assets/poke-wordle-1.png'},
            {image: './assets/poke-wordle-2.png', thumbImage: './assets/poke-wordle-2.png'},
            {image: './assets/poke-wordle-3.png', thumbImage: './assets/poke-wordle-3.png'},
            {image: './assets/poke-wordle-4.png', thumbImage: './assets/poke-wordle-4.png'},
        ]
    },
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

export const Experiences: ExperienceTemplate[] = [
    {
        Company: { Primary: 'Indeed,', Secondary: 'Austin, TX (Remote)' },
        Titles: [
            {
                Name: "Software Engineer II",
                StartDate: "Jun 2023",
                EndDate: "July 2025"
            },
            {
                Name: "Software Engineer I",
                StartDate: "Mar 2023",
                EndDate: "Jun 2023"
            },
            {
                Name: "Research Engineer I",
                StartDate: "Aug 2021",
                EndDate: "Mar 2023"
            }
        ],
        Description: [
            'Designed and built the GraphQL API portion of an intelligent resume enhancement tool that inferred relevant skills and certifications from jobseekers’ existing Indeed profiles, resulting in an increased number of resumes eligible for employer search.',
            'Independently developed and integrated AI-powered agents that generate personalized resume sections from structured user profile data, enabling jobseekers to enhance their resumes, increase visibility in employer searches, and reduce time to match with potential employers.',
            'Led a project that produced a quality score for each jobseeker, enabling the evaluation of data provided by third-party vendors and informing decisions on contract continuation based on data reliability.',
            'Individually monitored and maintained research initiatives aimed at generating high-quality sales leads for roles gathered on public job boards, enabling the sales team to prioritize outreach efforts more effectively and improve conversion rates.'
        ],
        Technologys: [ 'React', 'GraphQL', 'Typescript', 'Java', 'Python', 'HTML', 'CSS', 'Kotlin', 'Terraform', 'SQL', 'Spring', 'Jest' ],
    },
    {
        Company: { Primary: 'Charles Schwab,', Secondary: 'Austin, TX (Hybrid)' },
        Titles: [
            {
                Name: "Software Developer III",
                StartDate: "Aug 2019",
                EndDate: "Sep 2021"
            },
            {
                Name: "Software Developer II",
                StartDate: "Jun 2018",
                EndDate: "Aug 2019"
            }
        ],
        Description: [
            'Provided technical guidance to junior developers who participated in the new employment readiness program through knowledge-sharing workshops, pairing sessions, and code reviews, helping accelerate their onboarding and reduce the time to effectiveness in their first engineering roles.',
            'Collaborated with product managers and impacted front-end teams to design and implement a new backend service that centralized and standardized the delivery of shared profile information across Schwab.com, improving data consistency, reducing duplication of effort, and enabling a more seamless user experience across multiple applications.',
            'Led the implementation of a new system for efficiently delivering business-critical alerts on the Schwab.com homepage, reducing the time and effort required to notify users and minimizing risk to the company during high-impact events.',
            'Collaborated cross-functionally with product managers, UX designers, and QA engineers to deliver refreshed components on the Schwab.com Personal Value homepage, modernizing both the underlying framework and visual design to enhance usability and performance.'
        ],
        Technologys: [ 'Angualr', '.NetCore', 'Typescript', 'Java', 'Javascript', 'HTML', 'CSS', 'SCSS', 'Webpack', 'Jasmine', 'Junit', 'xUnit' ],
    },
    {
        Company: { Primary: 'Paycom,', Secondary: 'Oklahoma City, OK' },
        Titles: [
            {
                Name: "Software Developer Intern",
                StartDate: "May 2017",
                EndDate: "Aug 2017"
            }
        ],
        Description: [
            'Collaborated with a team of interns to design and develop the user interface and backend database for an internal prototype tutorial creation tool, aimed at reducing the time and technical knowledge required to build step-by-step guides for any Paycom webpage.',
            'Applied Agile methodologies by organizing and participating in daily standups, sprint planning sessions, and rotating team leadership responsibilities to promote effective project management and communication.',
        ],
        Technologys: [ 'Angualr', '.NetCore', 'Typescript', 'Java', 'Javascript', 'HTML', 'CSS', 'SCSS', 'Webpack', 'Jasmine', 'Junit', 'xUnit' ],
    }
];