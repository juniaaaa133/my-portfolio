'use client'
import React, { ChangeEvent, Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import '@/ELEMENTX/abstract/abstract.css';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import useHover from '@/feature/hooks/useHover';
import {Link} from 'react-scroll/modules' ;
import { useTheme } from 'next-themes';

const Nav = ({url1, url2, url3, url4} : {

  url1 : string , 
  url2 : string, 
  url3 : string,
  url4 :string 
}) => {

let [show,setShow] = useState(false);
let [isOpened,setIsOpened] = useState(false);
const { theme, setTheme } = useTheme()



let ToggleThemeMode = () => {
  if(theme == 'dark'){
    setTheme('light');
    console.log('yayyy ')
  }else {
    setTheme('dark');
    console.log(theme)
  }
    setIsOpened(false);
}

useEffect(()=>{
  if(typeof window !== undefined){
window.addEventListener<'scroll'>('scroll',() =>
 {
    if(window.scrollY > 200){
      setShow(true);
    }else{
      setShow(false)
    }
    console.log(window.scrollY)
});
  }
},[])

  return (
<>

<div className='nav-main'>
    <div className="nav-name-ctn">
      <p className="styled-f fontcl2">Mr.</p>
      <p className={`${theme == 'dark' ? 'fontclD': 'fontcl'} trans nav-logo sec-fontcl sec-f`}>Rein</p>
    </div>
        {/* Andriod Initial Code*/}
        <div onClick={()=>setIsOpened(!isOpened)} className={`nicn_rpsive2 bcu nicn-mb flex flex-col items-center w-fit h-fit gap-[5px]`}>
          <div className={` ${theme == 'dark' ? 'bg-slate-200': 'bg-slate-800'} w-[16px] h-[1.1px]  mega-trans ${isOpened == true ?'nicnmbop1' : 'nicnmb1'}` }></div>
          <div className={` ${theme == 'dark' ? 'bg-slate-200': 'bg-slate-800'} w-[16px] h-[1.1px]  mega-trans ${isOpened == true ?'nicnmbop2' : 'nicnmb2'}` }></div>
          <div className={` ${theme == 'dark' ? 'bg-slate-200': 'bg-slate-800'} w-[16px] h-[1.1px]  mega-trans ${isOpened == true ?'nicnmbop3' : 'nicnmb3'}` }></div>
        </div>
  <div className={`mega-trans nicn_rpsive2 ${isOpened == true ? theme == 'dark' ? 'nmenumbopD' : "nmenumbop": theme == 'dark' ? 'nmenumbD':"nmenumb"}`}>
    <div className={`  mega-trans ${isOpened == true ? 'nmenudivop' :  'nmenudiv' }`}>
<div className="navmb">
<Link  onClick={()=>setIsOpened(false)} className={`bcu ${theme == 'dark' ? 'fontclDH': 'fontclH'} sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to={url1}>Home</Link>
<div className={`mega-trans nav-bar bg-sec`}></div>
</div>
<div className="navmb">
<Link  onClick={()=>setIsOpened(false)} className={`bcu ${theme == 'dark' ? 'fontclDH': 'fontclH'} sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to={url2}>About</Link>
<div className={`nav-bar bg-sec mega-trans`}></div>
</div>
<div className="navmb">
<Link  onClick={()=>setIsOpened(false)} className={`bcu ${theme == 'dark' ? 'fontclDH': 'fontclH'} sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to={url3}>Projects</Link>
<div className={`nav-bar bg-sec mega-trans`}></div>
</div>
<div className="navmb">
<Link  onClick={()=>setIsOpened(false)} className={`bcu ${theme == 'dark' ? 'fontclDH': 'fontclH'} sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to={url4}>Contact</Link>
<div className={`nav-bar bg-sec mega-trans`}></div>
</div>

{
theme !== 'dark' ?
<CiDark onClick={ToggleThemeMode} className={` fontclH bcu font-[600] trans text-[18px] `}/>
          :
<CiLight onClick={ToggleThemeMode} className={`fontclDH  bcu font-[600] trans text-[18px] `}/>

}  
    </div>
  </div>
        {/* Andriod End Code*/}

        <div className="nav-info-ctn nicn_rpsive" >
            <Link  className={`sys-f bcu nav-a trans ${theme == 'dark' ? 'fontclDH':'fontclH'}`} smooth={true} offset={200} duration={1000} to={url1}>Home</Link>
            <Link  className={`sys-f bcu nav-a trans ${theme == 'dark' ? 'fontclDH':'fontclH'}`} smooth={true} offset={200} duration={1000} to={url2} >About</Link>
            <Link   className={`sys-f bcu nav-a trans ${theme == 'dark' ? 'fontclDH':'fontclH'}`} smooth={true} offset={200} duration={1000} to={url3}>Projects</Link>
            <Link className={`sys-f bcu nav-a trans ${theme == 'dark' ? 'fontclDH':'fontclH'}`} smooth={true} offset={200} duration={1000} to={url4}>Contact</Link>
        </div>
        {
theme !== 'dark' ?
<CiDark onClick={()=>setTheme('dark')} className={`nicn_rpsive fontclH bcu font-[600] trans text-[18px] fontclH`}/>
          :
<CiLight onClick={()=>setTheme('light')} className={`nicn_rpsive  fontclDH  bcu font-[600] trans text-[18px] fontclDH`}/>
    }
        </div>

{/* Scrolldown Nav */}
<div className={`nav-mainS trans ${show == false ? 'top-[-1000px]' : 'top-[0px]'}`}>
<div className="nav-name-ctn">
      <p className="styled-f fontcl2">Mr.</p>
      <p className={`${theme == 'dark' ? 'fontclD': 'fontcl'} trans nav-logo sec-fontcl sec-f`}>Rein</p>
    </div>
    <div className="nav-info-ctn nicn_rpsive" >
    <Link  className={`${theme == 'dark' ? 'fontclDH':'fontclH'} bcu sys-f nav-a trans `} to={url1} smooth={true} offset={200} duration={1000} >Home</Link>
    <Link  className={`${theme == 'dark' ? 'fontclDH':'fontclH'} bcu sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to={url2}>About</Link>
    <Link  className={`${theme == 'dark' ? 'fontclDH':'fontclH'} bcu sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to={url3}>Projects</Link>
    <Link  className={`${theme == 'dark' ? 'fontclDH':'fontclH'} bcu sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to={url4}>Contact</Link>

</div>
{/* Andriod Initial Code*/}
<div onClick={()=>setIsOpened(!isOpened)} className={`nicn_rpsive2 bcu nicn-mb flex flex-col items-center w-fit h-fit gap-[5px]`}>
          <div className={`${theme == 'dark' ? 'bg-slate-200' : 'bg-slate-800'}  w-[16px] h-[1.1px] mega-trans ${isOpened == true ?'nicnmbop1' : 'nicnmb1'}` }></div>
          <div className={`${theme == 'dark' ? 'bg-slate-200' : 'bg-slate-800'}  w-[16px] h-[1.1px] mega-trans ${isOpened == true ?'nicnmbop2' : 'nicnmb2'}` }></div>
          <div className={`${theme == 'dark' ? 'bg-slate-200' : 'bg-slate-800'}  w-[16px] h-[1.1px] mega-trans ${isOpened == true ?'nicnmbop3' : 'nicnmb3'}` }></div>
        </div>
{/* Andriod End Code*/}

{
theme !== 'dark' ?
<CiDark onClick={()=>setTheme('dark')} className={` fontclH nicn_rpsive bcu font-[600] trans text-[18px] `}/>
          :
<CiLight onClick={()=>setTheme('light')} className={`fontclDH nicn_rpsive bcu font-[600] trans text-[18px] `}/>
}
  </div>

</>

  )
}

export default Nav