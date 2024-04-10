'use client'
import TitleX from '@/ELEMENTX/Ui/Title/TitleX'
import useClipboard from '@/feature/hooks/useClipboard';
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import IconX from '@/ELEMENTX/Ui/Icons/IconX';
import ToggleX from '@/ELEMENTX/Ui/Toggle/ToggleX';
import ButtonR from '@/ELEMENTX/Ui/Buttons/ButtonR';
import { useTheme } from 'next-themes';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';
import { ContactType } from '@/types';
import { contact_data, social_data } from '@/data';
import { HandleEmail } from '@/features/emailjs/sendEmail';

const Contact = ({id} : {id : string}) => {

  let {theme}  = useTheme();
  let {isOpened,CopyToClipboard} = useClipboard();
  let [data,setData] = useState<ContactType>();
  let messageInput = useRef(null);
  let [message,setMessage] = useState('Submit')

  //api fetching style
  let FetchData = () => {
    setData(contact_data);
  }

  useEffect(()=>{
    FetchData();
  },[])


  //Made a function that send submitted data to emailjs using useRef.
let HandleSubmit = (e :ChangeEvent<HTMLFormElement>) => {
  e.preventDefault();
   if(messageInput.current !== null){
    HandleEmail(messageInput.current);
    setMessage("Submitted");
   }
}

  return (
    <div id={id} className='ct-main frame'>
        <TitleX theme={theme} name={'Contact Now'} />
       {
        data == undefined ? 
        <LoaderS />
        :
        <>
         <div className="ct-ctn">
            <form onSubmit={HandleSubmit} ref={messageInput} className="ct-form">
              <div className="ct-inp-ctn">
              <input name='name' type="text" placeholder='Full Name'className={`ct-inp text-[14px] sec-f mega-trans ${theme == 'dark' ? 'fonclD text-white' : 'fontcl'}` }/>
                <input  name='email' type="email" placeholder='Email Address'className={`ct-inp text-[14px] sec-f mega-trans ${theme == 'dark' ? 'fonclD text-white' : 'fontcl'}` }/>
              </div>
                <textarea  name="message" id="" className={`mega-trans ${theme == 'dark' ? 'fontcl3D' : 'fontcl3' } sec-f text-[14px] ct-area`} placeholder='Message'></textarea>
<div className="ct-btn-ctn">
<ButtonR text={message} theme={theme} width={'ct-btn'} />

</div>
            </form>
            <div className="ct-info-ctn">
              <div onClick={()=>CopyToClipboard(data.phone_number)} className={`mega-trans shadow-sm bcu ${theme == 'dark' ? "ct-infoD": "ct-info"} `} >
                <div className="ct-info-title-ctn">
                    <FaPhone className='ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } mega-trans text-[12px] sec-f  ct-info-title`}>Phone Number</div>
                </div>
                <div className="ct-info-title-ctn">
                    <FaPhone className='opacity-[0] ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontcl3D' : 'fontcl3' } meag-tarns text-[12px] sec-f ct-info-value`}>{data.phone_number}</div>
                </div>
              </div>
              <div onClick={()=>CopyToClipboard(data.email_address)} className={`mega-trans shadow-sm bcu ${theme == 'dark' ? "ct-infoD": "ct-info"} `} >
                <div className="ct-info-title-ctn">
                    <MdEmail className='ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } mega-trans text-[12px] sec-f  ct-info-title`}>Email Address</div>
                </div>
                <div className="ct-info-title-ctn">
                    <FaPhone className='opacity-[0] ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontcl3D' : 'fontcl3' } meag-tarns text-[12px] sec-f ct-info-value`}>{data.email_address}</div>
                </div>
              </div>
              <div onClick={()=>CopyToClipboard(data.address_direction)} className={`mega-trans shadow-sm bcu ${theme == 'dark' ? "ct-infoD": "ct-info"} `} >
                <div className="ct-info-title-ctn">
                    <FaLocationDot className='ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } mega-trans text-[12px] sec-f  ct-info-title`}>Address</div>
                </div>
                <div className="ct-info-title-ctn">
                    <FaPhone className='opacity-[0] ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontcl3D' : 'fontcl3' } meag-tarns text-[12px] sec-f ct-info-value`}>{data.address_name}</div>
                </div>
              </div>
              <div className="ct-icn-ctn mini-bar">
                <IconX type='facebook' url={social_data.fb_social} />
                <IconX type='instagram' url={social_data.instagram_social} />
                <IconX type='github' url={social_data.github_social} />
                <IconX type='telegram' url={social_data.telegram_social} />
                <IconX type='linkedin' url={social_data.linkedin_social} />

              </div>
            </div>
        </div>
<ToggleX text={"Copied To Clipboard!"} theme={theme} open={isOpened} />

        </>
       }
           </div>
  )
}

export default Contact