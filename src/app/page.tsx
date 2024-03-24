'use client'
import HomePage from '@/components/home/HomePage';
import '@/style/index.css';
import '@/ELEMENTX/abstract/abstract.css';
import Nav from '@/components/nav/Nav';
import { useEffect, useState } from 'react';
import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Project from '@/components/projects/Project';
import { useTheme } from 'next-themes';

export default function Home() {

  const { theme, setTheme } = useTheme()

  useEffect(()=>{
    if(theme == 'dark'){
      document.body.classList.add('bg-mainD');
    }else {
      document.body.classList.remove('bg-mainD');
      document.body.classList.add('bg-main');
    }
  },[theme])

  return (
 <div >
<Nav url1={'/'} url2='#about' url3='#projects' url4='#contact' />
 <HomePage id='/' />
 <About id='#about' />
 <Project id='#projects' />
 <Contact id='#contact' />
 </div >
  );
}
