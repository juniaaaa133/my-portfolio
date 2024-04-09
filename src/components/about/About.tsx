import React, { useContext, useEffect, useState } from 'react'
import TitleX from '@/ELEMENTX/Ui/Title/TitleX';
import Infos from './Infos';
import { useTheme } from 'next-themes';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';
import { AboutType } from '@/types';
import { about_data } from '@/data';

const About = ({id} : {id: string}) => {

  let {theme}  = useTheme();
  let [data,setData] = useState<AboutType>();

  //api fetching style
  let FetchData = () => {
    setData(about_data);
  }

  useEffect(()=>{
    FetchData();
  },[])

  return (
    <div id={id}>
      <TitleX name={'About Me'} theme={theme}/>
   {
    data == undefined ?
    <LoaderS />
    :
 <>
    <div className="abt-main frame">
    <img src={data.about_image} alt="" className="bg-sec abt-img" />
    <div className="abt-detail-ctn">
    <div className="abt-profile-ctn">
    <div className="abt-profile">
        <div className={`fontcl2 text-[32px] font-[600] abt-title`}>{data.exp_data}</div>
        <div className={`${theme == 'dark' ? 'fontclD': ' fontcl'} font-[600] mega-trans  text-[10px] abt-desc1`}>Years of </div>
        <div className={`${theme == 'dark' ? ' fontclD' : 'fontcl'} font-[600] mega-trans text-[10px] abt-desc2`}>Experience</div>
      </div>
      <div className="abt-profile">
        <div className={`fontcl2 text-[32px] font-[600] abt-title`}>{data.proj_data}</div>
        <div className={`${theme == 'dark' ? 'fontclD': ' fontcl'} font-[600] mega-trans  text-[10px] abt-desc1`}>Total </div>
        <div className={`${theme == 'dark' ? ' fontclD' : 'fontcl'} font-[600] mega-trans text-[10px] abt-desc2`}>Projects</div>
      </div>
      <div className="abt-profile">
        <div className={`fontcl2 text-[32px] font-[600] abt-title`}>{data.language_data}</div>
        <div className={`${theme == 'dark' ? 'fontclD': ' fontcl'} font-[600] mega-trans  text-[10px] abt-desc1`}>Total </div>
        <div className={`${theme == 'dark' ? ' fontclD' : 'fontcl'} font-[600] mega-trans text-[10px] abt-desc2`}>Languages</div>
      </div>
    
</div>
   <div className="abt-detail-parent">
    <div className="abt-detail-bar bg-sec"></div>
   <div className={`${theme == 'dark' ? 'fontcl3D':'fontcl3' } mega-trans sec-f text-[14px] abt-detail`}>{data.about_text}</div>
   </div>
   
    </div>
    </div>
        <div className="bar"></div>
        <Infos skillData={data.skills}/>
 </>
   }
    </div>
  )
}

export default About