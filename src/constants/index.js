import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Game Developer",
        icon: web,
    },
    {
        title: "Student Software Development",
        icon: mobile,
    },
    {
        title: "Artist/ Animator",
        icon: backend,
    },
    {
        title: "Streamer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Csharp",
        icon: 'src/assets/tech/Csharp.png',
    },
    {
        name: "Cplusplus",
        icon: 'src/assets/tech/Cplus.png',
    },
    {
        name: "unrealengine",
        icon: 'src/assets/tech/unrealengine.png',
    },
    {
        name: "unity",
        icon: 'src/assets/tech/unity.png',
    },
];

const experiences = [
    {
        title: "Samsung Promoter",
        company_name: "Samsung/ CPM",
        icon: 'src/assets/company/Samsung.png',
        iconBg: "#383E56",
        date: "October 2021 - Present",
        points: [
            "Keeping up with the latest technology of samsung products.",
            "Helping clients with this knowledge to give them the best experience finding a product that suits them best.",
            "Knowledge on care of products and applying the care to said products.",
            "Communication with different people and acting as a solutions expert for samsung products.",
        ],
    },
];

const projects = [
    {
        name: "Pixel Party",
        description:
            "A multiplayer party game made by classmates and I.",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "C#",
                color: "green-text-gradient",
            },
            {
                name: "Aseprite",
                color: "pink-text-gradient",
            },
        ],
        image: 'src/assets/pixelparty.png',
    },
    {
        name: "Jelly Guy",
        description:
            "A 2D platformer game, art and animation done by me entirely.",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "C#",
                color: "green-text-gradient",
            },
            {
                name: "Aseprite",
                color: "pink-text-gradient",
            },
        ],
        image: 'src/assets/jellyguy.png',
    },
    {
        name: "Cyber School",
        description:
            "A 2D game made in unreal engine progammed and animated by me.",
        tags: [
            {
                name: "unrealengine",
                color: "blue-text-gradient",
            },
            {
                name: "blueprints",
                color: "green-text-gradient",
            },
            {
                name: "Aseprite",
                color: "pink-text-gradient",
            },
        ],
        image: 'src/assets/schoolfight.png',
    },
];

export { services, technologies, experiences, projects };