'use client'
import Nav from '@/components/nav/Nav'
import useTheme from '@/feature/hooks/useTheme';
import React, { useEffect } from 'react'
import '@/style/index.css';
import '@/ELEMENTX/abstract/abstract.css';
import ThemeContext from '@/feature/themeContext/ThemeContext';
import ProjectDetailPage from '@/components/projects/ProjectDetail';

const ProjectDetail = ({params} : {params : {projectId: number}}) => {

    let {theme,SwitchTheme} = useTheme();

    useEffect(()=>{
      if(theme == 'dark'){
        document.body.classList.add('bg-mainD');
      }else {
        document.body.classList.remove('bg-mainD');
        document.body.classList.add('bg-main');
      }
    },[theme])

  return (
   <>
<ThemeContext.Provider value={theme}>
<Nav SwitchTheme={SwitchTheme} />
<ProjectDetailPage />
</ThemeContext.Provider>
   </>
  )
}

export default ProjectDetail