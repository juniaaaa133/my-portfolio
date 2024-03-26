import TitleX from '@/ELEMENTX/Ui/Title/TitleX'
import TechX from '@/ELEMENTX/Ui/Tech/TechX';
import ButtonRr from '@/ELEMENTX/Ui/Buttons/ButtonRr';
import React, { useContext, useState } from 'react'
import {Link}  from 'react-scroll'
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';

const Project = ({id} : {id : string}) => {

  let [data,setData] = useState([]);
  let {theme}  = useTheme();
  let route = useRouter();

  let desc = `
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
`
  return (
    <div id={id}>
      <TitleX name='My Projects' theme={theme}/>
{
  data.length == 0 ?
  <LoaderS />
  :
  <div className="pj-main frame">
  <div onClick={()=>route.push('/projects/1')} className="pj bcu">
    <div className="pj-techs">
      <TechX logo='NextJS' />
      <TechX logo='TypeScript' />
      <TechX logo='CSS' />
    </div>
    <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } text-[15px]  sec-f mega-trans pj-title`}>Melodious, Random Music App </div>
    <img  src="https://i.pinimg.com/736x/b0/4a/d7/b04ad77c207dbc4de31a3196074c03d8.jpg" alt="" className="pj-img pic" />
    <div className="pj-info-ctn">
      <div className={`pj-desc sec-f text-[13px] meage-trans ${theme == 'dark' ? 'fontclD' : 'fontcl'}`}>
        Description
      </div>
      <div className={`pj-desc-txt text-[13px] mega-trans text-justify sec-f ${theme == 'dark' ? 'fontcl3D' : 'fontcl3'}` }>
        {desc.length < 150 ? desc: desc.substring(0,151) + '...Read More.'}
      </div>
<div className="pj-btn-ctn">
<ButtonRr url='/' text={'Go live'} theme={theme} wh={'pj-live-btn'} type={'live'} />
<ButtonRr url='/' text={'Repo'} theme={theme} wh={'pj-repo-btn'} type={'repo'} />

</div>
    </div>
  </div>
</div>
}
    </div>
  )
}

export default Project