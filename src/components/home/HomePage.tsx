'use client'
import { txt, txt_h } from '@/data';
import React, { useContext, useState } from 'react'
import Typed from 'typed.js';
import { Cursor , useTypewriter } from 'react-simple-typewriter';
import IconX from '@/ELEMENTX/Ui/Icons/IconX';
import ButtonR from '@/ELEMENTX/Ui/Buttons/ButtonR'
import { useTheme } from 'next-themes';
import { Link } from 'react-scroll';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS'
const HomePage = ({id } : {id: string}) => {

  let [data,setData] = useState([]);
  let {theme} = useTheme();
  let [text] = useTypewriter({
  words : ['Rein Ogga Myo','Front-end Developer'],
  loop : true ,
  typeSpeed : 100,
  delaySpeed:  6000,
  deleteSpeed : 100,
})

  return (
    data.length == 0 ? 
    <LoaderS />
    :
    <div id={id} className="hm-main frame">
      <div className="hm-sec hmsec1">
       <div className="hm-icn-main">
       <div className="hm-icn-ctn">
          <IconX url='/' type='facebook'/>
          <IconX url='/' type='instagram'/>
          <IconX url='/' type='telegram'/>

        </div>
        <div className="hm-line bg-sec"></div>
       </div>
<div className={`${theme == 'dark' ? 'fontclD':'fontcl'} displaylp-tb mega-trans hm-sub  sec-f `}>Hello , I am</div>
<div className="hm-mega-ctn flex gap-[1px] items-center displaylp-tb">
  <div className="hm-mega fontcl2 sec-f"> {text}</div>
  <div className="hm-mega fontcl2 sec-f">
    <Cursor cursorStyle='|'/>
  </div>
</div>
<div className={`hm-desc-ctn sec-f text-[15px] mega-trans ${theme == 'dark' ? 'fontcl3D':'fontcl3'}`}>
  I am a frontend developer and my tech stacks are HTML, CSS, Javascript, ReactJS, NextJS, Typescript and Laravel.  
</div>
<div className="mini-bar"></div>
<Link to='#contact'  smooth={true} offset={200} duration={1000}>
<ButtonR theme={theme} text={'Hire me'} width='w-[150px]' />

</Link>
      </div>
      <div className="hm-sec hmsec2">
<div className="hm-ring1"></div>
<img src="https://i.pinimg.com/564x/19/b4/8b/19b48b405daf99ac712b9d5d0be4dbf5.jpg" alt="" className='bg-sec hm-img' />
      </div>
      <div className="hm-sec displaymb hmsec3">
      
<div className={`${theme == 'dark' ? 'fontclD':'fontcl'} mega-trans hm-sub  sec-f `}>Hello , I am</div>
<div className="hm-mega-ctn flex gap-[1px] items-center">
  <div className="hm-mega fontcl2 sec-f"> {text}</div>
  <div className="hm-mega fontcl2 sec-f">
    <Cursor cursorStyle='|'/>
  </div>
</div>
      </div>
    </div>
    )
}

export default HomePage