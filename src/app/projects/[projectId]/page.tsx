'use client'
import Nav from '@/components/nav/Nav'
import React, { useEffect } from 'react'
import '@/style/index.css';
import '@/ELEMENTX/abstract/abstract.css';
import ProjectDetailPage from '@/components/projects/ProjectDetail';
import { ThemeProvider, useTheme } from 'next-themes';

const ProjectDetail = ({params} : {params : {projectId: number}}) => {

  return (
   <div suppressHydrationWarning >
<ThemeProvider>
<ProjectDetailPage />
</ThemeProvider>
   </div>
  )
}

export default ProjectDetail