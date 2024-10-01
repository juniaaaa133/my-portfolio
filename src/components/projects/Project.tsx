import TitleX from '@/ELEMENTX/Ui/Title/TitleX'
import TechX from '@/ELEMENTX/Ui/Tech/TechX';
import ButtonRr from '@/ELEMENTX/Ui/Buttons/ButtonRr';
import React, { useContext, useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';
import { ProjectType } from '@/types';
import { project_data } from '@/data';
import Link from 'next/link';
import {NextResponse} from "next/server"

const Project = ({id} : {id : string}) => {

  let {theme}  = useTheme();
  let route = useRouter();
  let [data,setData] = useState<ProjectType[]>();

  //api fetching style
  let FetchData = () => {
    setData(project_data);
  }

  useEffect(()=>{
    FetchData();
  },[])
  
  return (
    <div id={id}>
      <TitleX name='My Projects' theme={theme}/>
{
  data == undefined?
  <LoaderS />
  :
  <div className="pj-main frame">
 {
  data.map((project,index: number) => (
    <Link href={`/projects/${project.id}`} key={index} className="pj bcu">
    <div className="pj-techs">
{
  project.tech_stacks.map((data,index : number) => <TechX key={index} logo={data} /> )
}
    </div>
    <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } text-[17px]  sec-f mega-trans pj-title`}>{project.title}</div>
    <img  src={project.cover_image} alt="" className="pj-img pic" />
    <div className="pj-info-ctn">
      <div className={`pj-desc sec-f text-[14px] meage-trans ${theme == 'dark' ? 'fontclD' : 'fontcl'}`}>
        Overview
      </div>
      <div className={`pj-desc-txt text-[14px] mega-trans text-justify sec-f ${theme == 'dark' ? 'fontcl3D' : 'fontcl3'}` }>
        {project.desc.length < 150 ? project.desc: project.desc.substring(0,151) + '....'}
      </div>
<div className="pj-btn-ctn">
<ButtonRr url={project.live_url} text={'Go live'} theme={theme} wh={'pj-live-btn'} type={'live'} />
<ButtonRr url={project.repo_url} text={'Repo'} theme={theme} wh={'pj-repo-btn'} type={'repo'} />
</div>
    </div>
  </Link>
  ))
 }
</div>
}
    </div>
  )
}

export default Project