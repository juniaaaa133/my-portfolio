import { AboutType, ContactType, HeroType, ProjectType, SocialType } from "@/types";

export const social_data : SocialType = {
    fb_social : 'https://www.facebook.com/scientist.999?mibextid=JRoKGi',
    instagram_social : 'https://www.instagram.com/bipolar_disorder_iz_real?igsh=ZWVpcnhmdGtzbXVq',
    telegram_social : 't.me/Offensiv3',
    linkedin_social : 'https://www.linkedin.com/in/reinn007',
    github_social : 'https://github.com/juniaaaa133',
    viber_social : '09794302034'
}

export const hero_data  : HeroType = {
    mini_text : 'Hello , I am ',
    mega_text : [
        'Rein Ogga Myo',
        'Frontend Developer'
    ],
    desc : 'I am a frontend developer , MERN stack developer and my tech stacks are HTML, CSS, Javascript, ReactJS, NextJS, Typescript and NodeJs.',
    image : '/img/mypic.jpg',
    social_name : {
        social1 : 'facebook',
        social2 : 'github',
        social3 : 'telegram',
    }
};

export const about_data :AboutType  = {
  data1 : '1',
  data2 : '19',
  data3 : '4',
  about_text : `
  A junior Front-End Developer and MERN stack developer achieved excellent skills in HTML, CSS, JavaScript, React, NextJS and NodeJs with standard amount of knowledge in both backend and api structure.I am knowledgeable in developing and managing responsive website with smooth user experience. I am willing to collaborate with team and offer my best experience to your establishment. `,
  skills : [
    {id : 1 ,logo : 'HTML',percentage : 88},
    {id : 2 ,logo : 'CSS',percentage : 90},
    {id : 3 ,logo : 'JavaScript',percentage : 80},
    {id : 4 ,logo : 'ReactJS',percentage : 56},
    {id : 5 ,logo : 'NextJS',percentage : 39},
    {id : 6 ,logo : 'Node.js',percentage : 30},
    {id : 7 ,logo : 'TypeScript',percentage : 30},
    // {id : 8 ,logo : 'Laravel',percentage : 26},
    {id : 9 ,logo : 'Tailwind',percentage : 68},
  ],
  about_image : '/img/aboutimg.jpg',
}

export const project_data :ProjectType[] = [
    {
        id: 1,
        tech_stacks : [
           'NextJS','TypeScript','CSS','Tailwind'
        ],
        title : 'Melodious, Random Music App',
        desc : `
        Melodious, the mini project is one of my coolest projects ever! local storage and local data are used in this project. Music data are used from YouTube. They depend on choices which will store in local storage. As It's own documentation is included in this project, anyone can easily enjoy it.
        `,
        cover_image : '/projectImage/p1l.png',
        live_url : 'https://melodious.vercel.app/',
        repo_url : 'https://github.com/juniaaaa133/melodious',
        mockup_images : {
            laptop_image : '/projectImage/p1l.png',
            mobile_image : '/projectImage/p1m.png',
            tablet_image : '/projectImage/p1t.png',
        }
    },
    {
        id: 2,
        tech_stacks : [
           'NextJS','TypeScript','CSS','Tailwind'
        ],
        title : 'Goldpay, Banking Service Project',
        desc : `
        GoldPay is a mobile banking service app that a staff (admin) can control. Data are locally stored. An admin Dashboad styled service app has functions such as 'Deposit' , 'WIthdraw' and 'Transfer'. Any user can be searched by it's phone number in each function. It also has usual function such as user CRUD , and Transcation history.        `,
        cover_image : '/projectImage/p2l.png',
        live_url : 'https://goldpay-plum.vercel.app/',
        repo_url : 'https://github.com/juniaaaa133/goldpay-theBankingProj',
        mockup_images : {
            laptop_image : '/projectImage/p2l.png',
            mobile_image : '/projectImage/p2m.png',
            tablet_image : '/projectImage/p2t.png',
        }
    },
    {
        id: 3,
        tech_stacks : [
           'NextJS','TypeScript','CSS','Tailwind'
        ],
        title : 'WizardRabbit , Q&A Website',
        desc : `
        As an project idea that helps us solve our problems and errors, WizardRabbit , Q&A website has categories and it's relatable questions. Data are locally stored . It also has search function and in each question detail page, A related questions and categories are also included. Also a beta Q&A project.        `,
        cover_image : '/projectImage/p3l.png',
        live_url : 'https://wizard-rabbit.vercel.app/',
        repo_url : 'https://github.com/juniaaaa133/WizardRabbit-TechProbSolutionApp',
        mockup_images : {
            laptop_image : '/projectImage/p3l.png',
            mobile_image : '/projectImage/p3m.png',
            tablet_image : '/projectImage/p3t.png',
        }
    },
    {
        id: 4,
        tech_stacks : [
           'ReactJS','CSS','Tailwind'
        ],
        title : 'Mabel - Movie Project',
        desc : `
        Mabel ,one of the classic movie streaming projects is built simply and smoothly using React libiary and tailwind css.User can watch trailers of movies such as the upcomings ,the most populars.This is one of the simpliest projects with smooth Ui and functions.
        `,
        cover_image : '/projectImage/p4l.png',
        live_url : 'https://mabel-stream.vercel.app/',
        repo_url : 'https://github.com/juniaaaa133/movieProject',
        mockup_images : {
            laptop_image : '/projectImage/p4l.png',
            mobile_image : '/projectImage/p4m.png',
            tablet_image : '/projectImage/p4t.png',
        }
    }
]

export const contact_data : ContactType = {
    email : {
        service_id : 'service_ofib2p9',
        template_id : 'template_16mn7p6',
        api : 'dAZB-7WvMyXopw6Zp',
    },
    phone_number : '0953523241',
    address_direction : `16°51'04.0"N 96°11'11.5"E`,
    address_name : '19th Street Zaya Rd ,SouthOkkalapa Township ,Yangon, Myanmar',
    email_address : 'reinnn.og@gmail.com'
}