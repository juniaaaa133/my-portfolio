'use client'
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import '@/ELEMENTX/abstract/abstract.css';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import {  bg, txt, txt_h } from '@/data';
import useTheme from '@/feature/hooks/useTheme';
import useHover from '@/feature/hooks/useHover';
import ThemeContext from '@/feature/themeContext/ThemeContext';
import {Link} from 'react-scroll/modules';

const Nav = ({SwitchTheme} : {
  SwitchTheme : (string: string)=> void
}) => {

let Theme = useContext(ThemeContext);
let [show,setShow] = useState(false);
let [isOpened,setIsOpened] = useState(false);


let ToggleThemeMode = () => {
  if(Theme == 'dark'){
    SwitchTheme('light');
  }else {
    SwitchTheme('dark');
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
        <div className={`${Theme == 'dark' ? 'fontclD': 'fontcl'} trans nav-logo sec-fontcl main-f`}>Rein</div>
        {/* Andriod Initial Code*/}
        <div onClick={()=>setIsOpened(!isOpened)} className={`nicn_rpsive2 bcu nicn-mb flex flex-col items-center w-fit h-fit gap-[5px]`}>
          <div className={` ${Theme == 'dark' ? 'bg-slate-200': 'bg-slate-800'} w-[16px] h-[1.1px]  mega-trans ${isOpened == true ?'nicnmbop1' : 'nicnmb1'}` }></div>
          <div className={` ${Theme == 'dark' ? 'bg-slate-200': 'bg-slate-800'} w-[16px] h-[1.1px]  mega-trans ${isOpened == true ?'nicnmbop2' : 'nicnmb2'}` }></div>
          <div className={` ${Theme == 'dark' ? 'bg-slate-200': 'bg-slate-800'} w-[16px] h-[1.1px]  mega-trans ${isOpened == true ?'nicnmbop3' : 'nicnmb3'}` }></div>
        </div>
  <div className={`mega-trans nicn_rpsive2 ${isOpened == true ? Theme == 'dark' ? 'nmenumbopD' : "nmenumbop": Theme == 'dark' ? 'nmenumbD':"nmenumb"}`}>
    <div className={`  mega-trans ${isOpened == true ? 'nmenudivop' :  'nmenudiv' }`}>
<div className="navmb">
<Link  onClick={()=>setIsOpened(false)} className={`bcu ${Theme == 'dark' ? 'fontclDH': 'fontclH'} sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to='/'>Home</Link>
<div className={`mega-trans nav-bar bg-sec`}></div>
</div>
<div className="navmb">
<Link  onClick={()=>setIsOpened(false)} className={`bcu ${Theme == 'dark' ? 'fontclDH': 'fontclH'} sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to='#about'>About</Link>
<div className={`nav-bar bg-sec mega-trans`}></div>
</div>
<div className="navmb">
<Link  onClick={()=>setIsOpened(false)} className={`bcu ${Theme == 'dark' ? 'fontclDH': 'fontclH'} sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to='#projects'>Projects</Link>
<div className={`nav-bar bg-sec mega-trans`}></div>
</div>
<div className="navmb">
<Link  onClick={()=>setIsOpened(false)} className={`bcu ${Theme == 'dark' ? 'fontclDH': 'fontclH'} sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to='#contact'>Contact</Link>
<div className={`nav-bar bg-sec mega-trans`}></div>
</div>

{
Theme !== 'dark' ?
<CiDark onClick={ToggleThemeMode} className={` fontclH bcu font-[600] trans text-[18px] `}/>
          :
<CiLight onClick={ToggleThemeMode} className={`fontclDH  bcu font-[600] trans text-[18px] `}/>

}  
    </div>
  </div>
        {/* Andriod End Code*/}

        <div className="nav-info-ctn nicn_rpsive" >
            <Link  className={`sys-f bcu nav-a trans ${Theme == 'dark' ? 'fontclDH':'fontclH'}`} smooth={true} offset={200} duration={300} to='/'>Home</Link>
            <Link  className={`sys-f bcu nav-a trans ${Theme == 'dark' ? 'fontclDH':'fontclH'}`} smooth={true} offset={200} duration={300} to='#about' >About</Link>
            <Link   className={`sys-f bcu nav-a trans ${Theme == 'dark' ? 'fontclDH':'fontclH'}`} smooth={true} offset={200} duration={300} to='#projects'>Projects</Link>
            <Link className={`sys-f bcu nav-a trans ${Theme == 'dark' ? 'fontclDH':'fontclH'}`} smooth={true} offset={200} duration={300} to='#contact'>Contact</Link>
        </div>
        {
Theme !== 'dark' ?
<CiDark onClick={()=>SwitchTheme('dark')} className={`nicn_rpsive fontclH bcu font-[600] trans text-[18px] fontclH`}/>
          :
<CiLight onClick={()=>SwitchTheme('light')} className={`nicn_rpsive  fontclDH  bcu font-[600] trans text-[18px] fontclDH`}/>
    }
        </div>

{/* Scrolldown Nav */}
<div className={`nav-mainS trans ${show == false ? 'top-[-1000px]' : 'top-[0px]'}`}>
<div className={`${Theme == 'dark' ? 'fontclD': 'fontcl'} trans nav-logo sec-fontcl main-f`}>Rein</div>
<div className="nav-info-ctn nicn_rpsive" >
    <Link  className={`${Theme == 'dark' ? 'fontclDH':'fontclH'} bcu sys-f nav-a trans `} to='/' smooth={true} offset={200} duration={1000} >Home</Link>
    <Link  className={`${Theme == 'dark' ? 'fontclDH':'fontclH'} bcu sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to='#about'>About</Link>
    <Link  className={`${Theme == 'dark' ? 'fontclDH':'fontclH'} bcu sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to='#projects'>Projects</Link>
    <Link  className={`${Theme == 'dark' ? 'fontclDH':'fontclH'} bcu sys-f nav-a trans `} smooth={true} offset={200} duration={1000} to='#contact'>Contact</Link>

</div>
{/* Andriod Initial Code*/}
<div onClick={()=>setIsOpened(!isOpened)} className={`nicn_rpsive2 bcu nicn-mb flex flex-col items-center w-fit h-fit gap-[5px]`}>
          <div className={`${Theme == 'dark' ? 'bg-slate-200' : 'bg-slate-800'}  w-[16px] h-[1.1px] mega-trans ${isOpened == true ?'nicnmbop1' : 'nicnmb1'}` }></div>
          <div className={`${Theme == 'dark' ? 'bg-slate-200' : 'bg-slate-800'}  w-[16px] h-[1.1px] mega-trans ${isOpened == true ?'nicnmbop2' : 'nicnmb2'}` }></div>
          <div className={`${Theme == 'dark' ? 'bg-slate-200' : 'bg-slate-800'}  w-[16px] h-[1.1px] mega-trans ${isOpened == true ?'nicnmbop3' : 'nicnmb3'}` }></div>
        </div>
{/* Andriod End Code*/}

{
Theme !== 'dark' ?
<CiDark onClick={()=>SwitchTheme('dark')} className={` fontclH nicn_rpsive bcu font-[600] trans text-[18px] `}/>
          :
<CiLight onClick={()=>SwitchTheme('light')} className={`fontclDH nicn_rpsive bcu font-[600] trans text-[18px] `}/>
}
  </div>

</>

  )
}

export default Nav