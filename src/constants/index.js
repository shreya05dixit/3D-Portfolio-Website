import {
    css,
    git,
    github,
    html,
    javascript,
    react,
    tailwindcss,
    typescript,
    linkedin,
    car,
    arrow,
    contact,
    mysql,
    threejs,
    opencv,
    azure,
    python,
    portfolio,
    price,
    vision
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Data Science",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "3D Graphics",
    },
    {  
        imageUrl: azure,
        name: "Azure",
        type: "Cloud Platform",
    },
    {
        imageUrl: opencv,
        name: "OpenCV",
        type: "Computer Vision",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Central Board of Secondary Education (CBSE)",
        company_name: "Chameli Devi Public School, Indore (M.P.)",
        iconBg: "#accbe1",
        date: "July 2020",
        grade: "Class X : 93.6% ",
    },
    {
        title: "Central Board of Secondary Education (CBSE)",
        company_name: "Vidya Bhavan Public School, Indore (M.P.)",
        iconBg: "#fbc3bc",
        date: "July 2022",
        grade: "Class XII : 89% ",

    },
    {
        title: "Bachelor of Engineering in Computer Sciences",
        company_name: "Institute of Engineering & Technology (IET), DAVV, Indore (M.P.)",
        iconBg: "#b7e4c7",
        date: "October 2022 - Present",
        grade: "CGPA : 8.11 (aggregate upto 4th sem)",
    
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/',
    }
];

export const projects = [
    {
        iconUrl: price,
        theme: 'btn-back-red',
        name: 'Property Price Estimator',
        description: 'Built an application model which focuses on predicting real estate prices in Banglore (India) using advanced regression techniques. It involves comprehensive data preprocessing, feature engineering, and model selection.',
        link: 'https://github.com/shreya05dixit/Property-Pricing-Predictor',
    },
    {
        iconUrl: portfolio ,
        theme: 'btn-back-green',
        name: 'My 3D Portfolio Website',
        description: 'Designed an interactive 3D portfolio website, showcasing projects and education through immersive visuals and dynamic navigation.',
        link: 'https://github.com/shreya05dixit/3D-Portfolio-Website',
    },
    {
        iconUrl: vision,
        theme: 'btn-back-blue',
        name: 'Object Dimension Measurement',
        description: 'Developed a system for object dimension measurement using OpenCV, enabling accurate calculation of object sizes through image processing techniques.',
        link: 'https://github.com/shreya05dixit/Object-Dimension-Measurement',
    },
];
