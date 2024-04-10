import emailjs from 'emailjs-com';


export const  HandleEmail = (Message: HTMLFormElement) => {
    emailjs.sendForm("service_wckb7fk", "template_16mn7p6",Message, "dAZB-7WvMyXopw6Zp")    
  };