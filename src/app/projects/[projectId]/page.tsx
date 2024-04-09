'use client'
import Nav from '@/components/nav/Nav'
import React, { useEffect } from 'react'
import '@/style/index.css';
import '@/ELEMENTX/abstract/abstract.css';
import ProjectDetailPage from '@/components/projects/ProjectDetail';
import { ThemeProvider, useTheme } from 'next-themes';

const ProjectDetail = ({params} : {params : {projectId: string}}) => {


  console.log(params.projectId)
  return (
   <div suppressHydrationWarning >
<ThemeProvider>
<ProjectDetailPage id={params.projectId} />
</ThemeProvider>
   </div>
  )
}

export default ProjectDetail