'use client'
import React, { useEffect } from 'react'
import '@/style/index.css';
import '@/ELEMENTX/abstract/abstract.css';
import ProjectDetailPage from '@/components/projects/ProjectDetail';
import { ThemeProvider, useTheme } from 'next-themes';

const ProjectDetail = ({params} : {params : {projectId: string}}) => {

  const { theme } = useTheme()

  useEffect(()=>{
    if(theme == 'dark'){
      document.body.classList.add('bg-mainD');
    }else {
      document.body.classList.remove('bg-mainD');
      document.body.classList.add('bg-main');
    }
  },[theme])

  return (
   <div suppressHydrationWarning >
<ThemeProvider>
<ProjectDetailPage id={params.projectId} />
</ThemeProvider>
   </div>
  )
}

export default ProjectDetail