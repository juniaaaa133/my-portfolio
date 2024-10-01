'use client'
import React, { useContext, useEffect, useState } from 'react'
import Typed from 'typed.js';
import { Cursor , useTypewriter } from 'react-simple-typewriter';
import IconX from '@/ELEMENTX/Ui/Icons/IconX';
import ButtonR from '@/ELEMENTX/Ui/Buttons/ButtonR'
import { useTheme } from 'next-themes';
import { Link } from 'react-scroll';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS'
import { HeroType, SocialType } from '@/types';
import { hero_data, social_data } from '@/data';

const HomePage = ({id } : {id: string}) => {

  let {theme} = useTheme();
  let [data,setData] = useState<HeroType>();
  let [socialData,setSocialData] = useState<SocialType>();

  //api fetching style
  let FetchData = () => {
    setData(hero_data);
    setSocialData(social_data);
  }

  useEffect(()=>{
    FetchData();
  },[])
  
  let [text] = useTypewriter({
    words : data?.mega_text !== undefined ? data.mega_text : ['',''],
    loop : true ,
    typeSpeed : 100,
    delaySpeed:  6000,
    deleteSpeed : 100,
  })

  return (
    data == undefined || socialData == undefined? 
    <LoaderS />
    :
    <div id={id} className="hm-main frame">
      <div className="hm-sec hmsec1">
       <div className="hm-icn-main">
       <div className="hm-icn-ctn">
          <IconX url={socialData.fb_social} type={data.social_name.social1}/>
          <IconX url={socialData.github_social} type={data.social_name.social2}/>
          <IconX url={socialData.telegram_social} type={data.social_name.social3}/>
        </div>
        <div className="hm-line bg-sec"></div>
       </div>
<div className={`${theme == 'dark' ? 'fontclD':'fontcl'} displaylp-tb mega-trans hm-sub  sec-f `}>{data.mini_text}</div>
<div className="hm-mega-ctn flex gap-[1px] items-center displaylp-tb">
  <div className="hm-mega fontcl2 sec-f"> {text}</div>
  <div className="hm-mega fontcl2 sec-f">
    <Cursor cursorStyle='|'/>
  </div>
</div>
<div className={`hm-desc-ctn sec-f text-[15px] mega-trans ${theme == 'dark' ? 'fontcl3D':'fontcl3'}`}>{data.desc}</div>
<div className="mini-bar"></div>
<Link to='#contact'  smooth={true} offset={200} duration={1000}>
<ButtonR theme={theme} text={'Hire me'} width='w-[100px]' />

</Link>
      </div>
      <div className="hm-sec hmsec2">
<div className="hm-ring1"></div>
<img src={data.image} alt="" className='bg-sec pic hm-img' />
      </div>
      <div className="hm-sec displaymb hmsec3">
      
<div className={`${theme == 'dark' ? 'fontclD':'fontcl'} mega-trans hm-sub  sec-f `}>{data.mini_text}</div>
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