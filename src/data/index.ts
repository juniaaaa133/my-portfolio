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
    desc : 'I am a frontend developer and my tech stacks are HTML, CSS, Javascript, ReactJS, NextJS, Typescript and Laravel.',
    image : '/img/mypic.jpg',
    social_name : {
        social1 : 'facebook',
        social2 : 'github',
        social3 : 'telegram',
    }
};

export const about_data :AboutType  = {
  exp_data : 1,
  proj_data : 20,
    language_data : 2,
  about_text : `
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  `,
  skills : [
    {id : 1 ,logo : 'HTML',percentage : 88},
    {id : 1 ,logo : 'CSS',percentage : 90},
    {id : 1 ,logo : 'JavaScript',percentage : 80},
    {id : 1 ,logo : 'ReactJS',percentage : 56},
    {id : 1 ,logo : 'NextJS',percentage : 39},
    {id : 1 ,logo : 'TypeScript',percentage : 30},
    {id : 1 ,logo : 'Laravel',percentage : 46},
    {id : 1 ,logo : 'Tailwind',percentage : 68},
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        `,
        cover_image : '/projectImage/p2l.png',
        live_url : 'https://goldpay-plum.vercel.app/',
        repo_url : 'https://github.com/juniaaaa133/goldpay-theBankingProj',
        mockup_images : {
            laptop_image : '/projectImage/p2l.png',
            mobile_image : '/projectImage/p2m.png',
            tablet_image : '/projectImage/p2t.png',
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