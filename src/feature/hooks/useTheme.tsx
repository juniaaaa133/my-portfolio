'use client'
import React, { useState } from 'react'

const useTheme = () => {
let [theme,setTheme] = useState(localStorage.getItem('theme'));

let  SwitchTheme = (theme: string) => {
localStorage.setItem('theme' , theme);
setTheme(localStorage.getItem('theme'))
}

return {theme,SwitchTheme}
}

export default useTheme