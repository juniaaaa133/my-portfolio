import React, { useContext, useState } from 'react'
import TitleX from '@/ELEMENTX/Ui/Title/TitleX';
import Infos from './Infos';
import { useTheme } from 'next-themes';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';

const About = ({id} : {id: string}) => {

  let [data,setData] = useState([]);
  let {theme}  = useTheme();

  return (
    <div id={id}>
      <TitleX name={'About Me'} theme={theme}/>
   {
    data.length == 0 ?
    <LoaderS />
    :
 <>
    <div className="abt-main frame">
    <img src="https://i.pinimg.com/564x/c7/cc/11/c7cc119cffc5fa2aab85538e0171d8d4.jpg" alt="" className="bg-sec abt-img" />
    <div className="abt-detail-ctn">
    <div className="abt-profile-ctn">
    <div className="abt-profile">
        <div className={`fontcl2 text-[32px] font-[600] abt-title`}>7</div>
        <div className={`${theme == 'dark' ? 'fontclD': ' fontcl'} font-[600] mega-trans  text-[10px] abt-desc1`}>Years of </div>
        <div className={`${theme == 'dark' ? ' fontclD' : 'fontcl'} font-[600] mega-trans text-[10px] abt-desc2`}>Experience</div>
      </div>
      <div className="abt-profile">
        <div className={`fontcl2 text-[32px] font-[600] abt-title`}>7</div>
        <div className={`${theme == 'dark' ? 'fontclD': ' fontcl'} font-[600] mega-trans  text-[10px] abt-desc1`}>Years of </div>
        <div className={`${theme == 'dark' ? ' fontclD' : 'fontcl'} font-[600] mega-trans text-[10px] abt-desc2`}>Experience</div>
      </div>
      <div className="abt-profile">
        <div className={`fontcl2 text-[32px] font-[600] abt-title`}>7</div>
        <div className={`${theme == 'dark' ? 'fontclD': ' fontcl'} font-[600] mega-trans  text-[10px] abt-desc1`}>Years of </div>
        <div className={`${theme == 'dark' ? ' fontclD' : 'fontcl'} font-[600] mega-trans text-[10px] abt-desc2`}>Experience</div>
      </div>
    
</div>
   <div className="abt-detail-parent">
    <div className="abt-detail-bar bg-sec"></div>
   <div className={`${theme == 'dark' ? 'fontcl3D':'fontcl3' } mega-trans sec-f text-[14px] abt-detail`}>
        {
          `
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            
          `
        }
      </div>
   </div>
   
    </div>
    </div>
        <div className="bar"></div>
        <Infos />
 </>
   }
    </div>
  )
}

export default About