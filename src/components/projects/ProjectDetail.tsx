'use client'
import ButtonRr from '@/ELEMENTX/Ui/Buttons/ButtonRr';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';
import TechX from '@/ELEMENTX/Ui/Tech/TechX';
import { project_data } from '@/data';
import { ProjectType } from '@/types';
import { useTheme } from 'next-themes';
import React, { useContext, useEffect, useState } from 'react'

const ProjectDetailPage = ({id} : {
    id : string,
}) => {


  let {theme} = useTheme();
  let [data,setData] = useState<ProjectType>();

  //api fetching style
  let FetchData = () => {
    let filteredProject = project_data.filter((data) => (data.id === parseInt(id)))
    console.log(typeof id)
    setData(filteredProject[0])
  }

  useEffect(()=>{
    FetchData();
  },[])

  return (
 data == undefined ?
 <LoaderS />
 : 
 <div className='pjd-main frame bar'>
 <div className="pjd-div1">
 <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } trans sec-f pjd-title-def`}>{data.title}</div>
     <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } trans sec-f pjd-title`}>{data.title}</div>
     <div className={`${theme == 'dark' ? 'pjd-img-ctn1D' : 'pjd-img-ctn1'} trans  bg-sec`}>
         <img src={data.mockup_images.laptop_image} alt="" className="pic pjd-img1" />
     </div>
 </div>
 <div className="pjd-div2 bar">
     <div className="pjd-tech-ctn">
         <div className="pjd-tech-title-ctn">
             <div className="pjd-tech-title fontcl2 sec-f text-[13px]">Tech Stacks</div>
             <div className="pjd-line bg-sec"></div>
         </div>
         <div className="pjd-techs">
             {
                data.tech_stacks.map((stack,index: number) => <TechX key={index} logo={stack} />)
             }
         </div>
     </div>
 <div className='pjd-img-ctn2 trans bg-sec'>
         <img src={data.mockup_images.tablet_image} alt="" className="pic pjd-img2" />
     </div>
 </div>
 <div className="pjd-div3 big-bar">
    
    <div className="pjd-desc-main">
    <div className="pjd-desc-ctn">
         <div className="pjd-desc-title fontcl2 text-[16px] sec-f">Project Description</div>
         <div className={`pjd-desc sec-f mega-trans text-[13px] ${theme == 'dark' ? 'fontcl3D' : 'fontcl3'}`}>{data.desc}</div>
     </div>
     <div className="pjd-btn-ctn">
<ButtonRr url={data.live_url} text={'Go live'} theme={theme} wh={'pj-live-btn'} type={'live'} />
<ButtonRr url={data.repo_url} text={'Repo'} theme={theme} wh={'pjd-repo-btn'} type={'repo'} />

</div>
    </div>
     <div className='pjd-img-ctn3 trans bg-sec'>
         <img src={data.mockup_images.mobile_image} alt="" className="pic pjd-img3" />
     </div>
 </div>

</div>
  )
}

export default ProjectDetailPage