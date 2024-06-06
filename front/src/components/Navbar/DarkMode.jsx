import React from 'react'
import LightButton from '../../assets/website/lightmode.png'
import DarkButton from '../../assets/website/darkmode.png'
import { RiSunFill } from "react-icons/ri";


const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem
        ('theme') : 'light'
        )
    const element = document.documentElement;
    React.useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
        else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } 
    },[theme])

  return (
    <div className='relative'>
        <RiSunFill alt='Light Mode'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={`text-2xl text-accent w-12 
        cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all
        duration-300 absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
        />

        <RiSunFill alt='Light Mode'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className='text-2xl text-accent w-12 
        cursor-pointer drop-shadow-
        [1px_1px_1px_rgba(0,0,0,0,1)] transition-all
        duration-300' 
                />

    </div>
  )
}

export default DarkMode