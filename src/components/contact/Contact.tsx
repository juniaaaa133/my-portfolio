'use client'
import TitleX from '@/ELEMENTX/Ui/Title/TitleX'
import useClipboard from '@/feature/hooks/useClipboard';
import React, { useContext, useRef, useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import IconX from '@/ELEMENTX/Ui/Icons/IconX';
import ToggleX from '@/ELEMENTX/Ui/Toggle/ToggleX';
import ButtonR from '@/ELEMENTX/Ui/Buttons/ButtonR';
import { useTheme } from 'next-themes';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';

const Contact = ({id} : {id : string}) => {

  let [data,setData] = useState([]);
  let {theme}  = useTheme();

  let {isOpened,CopyToClipboard} = useClipboard();
console.log(isOpened , ' is cont');
let [val ,setVal] = useState();

  return (
    <div id={id} className='ct-main frame'>
        <TitleX theme={theme} name={'Contact Now'} />
       {
        data.length !== 0 ? 
        <LoaderS />
        :
        <>
         <div className="ct-ctn">
            <div className="ct-form">
              <div className="ct-inp-ctn">
              <input type="text" placeholder='Full Name'className={`ct-inp text-[14px] sec-f mega-trans ${theme == 'dark' ? 'fonclD text-white' : 'fontcl'}` }/>
                <input type="email" placeholder='Email Address'className={`ct-inp text-[14px] sec-f mega-trans ${theme == 'dark' ? 'fonclD text-white' : 'fontcl'}` }/>
              </div>
                <textarea name="" id="" className={`mega-trans ${theme == 'dark' ? 'fontcl3D' : 'fontcl3' } sec-f text-[14px] ct-area`} placeholder='Message'></textarea>
<div className="ct-btn-ctn">
<ButtonR text='Submit' theme={theme} width={'ct-btn'} />

</div>
            </div>
            <div className="ct-info-ctn">
              <div onClick={()=>CopyToClipboard('09123456789')} className={`mega-trans shadow-sm bcu ${theme == 'dark' ? "ct-infoD": "ct-info"} `} >
                <div className="ct-info-title-ctn">
                    <FaPhone className='ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } mega-trans text-[12px] sec-f  ct-info-title`}>Phone Number</div>
                </div>
                <div className="ct-info-title-ctn">
                    <FaPhone className='opacity-[0] ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontcl3D' : 'fontcl3' } meag-tarns text-[12px] sec-f ct-info-value`}>09123456789</div>
                </div>
              </div>
              <div onClick={()=>CopyToClipboard('09123456789')} className={`mega-trans shadow-sm bcu ${theme == 'dark' ? "ct-infoD": "ct-info"} `} >
                <div className="ct-info-title-ctn">
                    <MdEmail className='ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } mega-trans text-[12px] sec-f  ct-info-title`}>Email Address</div>
                </div>
                <div className="ct-info-title-ctn">
                    <FaPhone className='opacity-[0] ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontcl3D' : 'fontcl3' } meag-tarns text-[12px] sec-f ct-info-value`}>reinnn.og@gmail.com</div>
                </div>
              </div>
              <div onClick={()=>CopyToClipboard(`16°51'04.0"N 96°11'11.5"E`)} className={`mega-trans shadow-sm bcu ${theme == 'dark' ? "ct-infoD": "ct-info"} `} >
                <div className="ct-info-title-ctn">
                    <FaLocationDot className='ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } mega-trans text-[12px] sec-f  ct-info-title`}>Address</div>
                </div>
                <div className="ct-info-title-ctn">
                    <FaPhone className='opacity-[0] ct-info-logo fontcl2 text-[10px] w-fit h-fit p-[5px] rounded-full'/>
                    <div className={`${theme == 'dark' ? 'fontcl3D' : 'fontcl3' } meag-tarns text-[12px] sec-f ct-info-value`}>19th Street Zaya Rd ,SouthOkkalapa Township ,Yangon, Myanmar</div>
                </div>
              </div>
              <div className="ct-icn-ctn mini-bar">
                <IconX type='facebook' url='/' />
                <IconX type='instagram' url='/' />
                <IconX type='viber' url='/' />
                <IconX type='telegram' url='/' />
                <IconX type='linkedin' url='/' />

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