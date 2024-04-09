export type HeroType = {
    mini_text : string,
    mega_text : string[]  ,
    desc : string  ,
    image : string,
    social_name : {
        social1 : string,
        social2 : string,
        social3 : string,
    }
} 

export type AboutType = {
    exp_data : number,
    proj_data : number,
    language_data : number,
    about_text : string,
    skills : {id : number ,logo :string,percentage : number}[],
    about_image : string,
}

export type ProjectType =  {
    id :number,
    tech_stacks : string[],
    title : string,
    desc : string,
    cover_image : string,
    live_url : string,
    repo_url : string,
    mockup_images : {
        laptop_image : string,
        mobile_image :string,
        tablet_image : string,
    }
}

export type SocialType = {
    fb_social : string,
    instagram_social : string,
    telegram_social : string,
    linkedin_social : string,
    github_social :string,
    viber_social : string
}