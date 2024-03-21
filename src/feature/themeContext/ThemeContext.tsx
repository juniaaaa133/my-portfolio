'use client'
import { createContext } from "react";

const ThemeContext = createContext<string | null>('light');
export default ThemeContext