'use client'
import HomePage from '@/components/home/HomePage';
import '@/style/index.css';
import '@/ELEMENTX/abstract/abstract.css';
import Nav from '@/components/nav/Nav';
import ThemeContext from '@/feature/themeContext/ThemeContext';
import useTheme from '@/feature/hooks/useTheme';
import { useEffect, useState } from 'react';
import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Project from '@/components/projects/Project';

export default function Home() {

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
 <HomePage id='/' />
 <About id='#about' />
 <Project id='#projects' />
 <Contact id='#contact' />
</ThemeContext.Provider>

 </>
  );
}
