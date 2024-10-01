import React, { useContext } from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useTheme } from 'next-themes';

const Infos = ({skillData} : {
  skillData : {id : number ,logo :string,percentage : number}[]
}) => {

  let {theme}  = useTheme()  

  return (
   <div className="info-main frame">
    <div className={`info-tech-ctn`}>
        {
          skillData.map(({logo , percentage} , idx :number) => (
            <div key={idx} className={`mega-trans ${theme == 'dark' ? 'infoD' : 'info'}`}>
         <div className="info-desc-ctn">
         <div className="info-tag-ctn">
          {
            logo == 'JavaScript' ? 
            <IoLogoJavascript className='info-tag text-[#EDD61C]'/>
            : logo == 'HTML' || logo == 'HTML5' ?
            <FaHtml5 className='info-tag text-[#DA4B25]'/>
            : logo == 'CSS' || logo == 'CSS3' ?
            <FaCss3Alt className='info-tag text-[#3593CE]'/>
            : logo == 'ReactJS' || logo == 'React.JS' ?
            <FaReact className='info-tag text-[#00CFF5]'/>
            : logo == 'NextJS' || logo == 'Next.JS' ?
            <TbBrandNextjs className='info-tag text-[#101010]'/>
            : logo == 'PHP' ?
            <FaPhp className='info-tag text-[#101010]'/>  
            : logo == 'TypeScript' || logo == 'Typescript' ?
            <SiTypescript className='info-tag text-[#0075C5]'/>
            : logo == 'Laravel' ?
            <FaLaravel className='info-tag text-[#ED2B18]'/>
            : logo == 'Node.js' || logo == 'NodeJs' ?
            <FaNodeJs className='info-tag text-[#86C04A]'/>
            : logo == 'Tailwind.css' || logo == 'Tailwind' ?
            <SiTailwindcss className='info-tag text-[#06AFC6]'/>
            :
            <FaFigma className='info-tag text-[#2C2F38]'/>
          }
            <div className={` ${theme == 'dark'  ? 'info-tag-lineD' : 'info-tag-line'} mega-trans`}></div>
          </div>
          <div className={`sec-f text-[14px] info-title ${theme == 'dark' ? 'fontclD' : 'fontcl'}`}>{logo}</div>
         </div>
         <div className="info-progress-bar-ctn">
          <div className="infoprogress bg-sec"></div>
          <div className={`sec-f text-[11px]  info-lvl ${theme == 'dark' ? 'fontcl3D' : 'fontcl3'}`}>{
           percentage >= 0 && percentage <= 30 ? 'Beginner' : percentage >= 31 && percentage <= 50 ? 'Intermediate' : percentage >= 51 && percentage <= 70 ? 'Advanced' : percentage >= 71 && percentage <= 99 ? 'Proficient' : 'Expert' 
          }</div>
          <div className="infoprogress bg-sec"></div>
         </div>
        </div>
          ))
        }

    </div>
   </div>
  )
}

export default Infos