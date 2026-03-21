import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Menu, X} from 'lucide-react'
import {motion} from 'framer-motion'


export default function Navbar() {

    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(()=>{
        function handleScroll(){
            setIsScrolled(window.scrollY>0)
        }
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    })

    const [isOpen, setIsOpen]=useState(false)

    const Menux = [
        {id:1 , label: 'Acceuil', link: '/'},
        {id:2 , label: 'Services', link: '/Services'},
        {id:3 , label: 'À propos', link: '/About'},
        {id:4 , label: 'Contact', link: '/Contact'}
    ]
  return (
    <div className="h-20 border-b flex text-white">
        
        <nav className={`  ${isScrolled ? 'z-40 bg-base-100/90 h-20 w-full transition-all duration-200 fixed' : 'fixed z-50 bg-base-100 h-20 w-full transition-all duration-200' }`}>
            <div className="text-2xl font-bold px-4 pt-5">
                <motion.h1 className=""
                initial={{opacity:0, x:-80}}
                animate={{opacity:1, x:0}}
                transition={{duration: 0.8}}
                >Smiley <span className="text-amber-600">Coiffure</span>
                </motion.h1>
            <motion.ul
            className="md:items-center md:justify-center gap-7 font-thin text-lg text-white/60 hidden md:flex cursor-pointer -mt-7"
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.8}}
                >
                    {Menux.map((m)=>(
                        <li key={m.id} className="hover:scale-105 transition-all duration-300 hover:text-white">
                          <button onClick={() => {navigate(m.link); setIsOpen(false)}} className="text-inherit">
                            <i>{m.label}</i>
                          </button>
                        </li>
                    ))}
                </motion.ul>
            
            
            </div>
            {/*Affichage mobile */}
            <div className="  w-full z-40 pt-7 fixed h-50">
            <button onClick={()=>setIsOpen(!isOpen)} className="absolute right-0 -mt-13  mr-4 cursor-pointer md:hidden" >
                {isOpen ? <X/> : <Menu/>}
            </button>
            {isOpen&& (
                <motion.ul className={`flex flex-col px-4 gap-1 pb-3 border-b z-40 border-gray-400 bg-base-100 ${isScrolled ? 'bg-base-100/90' : ''}`}
                initial={{opacity:0, y:-5}}
                animate={{opacity:1, y:0}}
                transition={{duration: 0.2}}
                >
                    {Menux.map((m)=>(
                        <li key={m.id} className="hover:scale-102 transition-all duration-300 hover:bg-white/10 p-2 rounded-2xl cursor-pointer font-semibold text-white">
                          <button onClick={() => {navigate(m.link); setIsOpen(false)}} className="w-full text-left">
                            <i>{m.label}</i>
                          </button>
                        </li>
                    ))}
                </motion.ul>
            )}

                

            </div>

        </nav>
        
    </div>
  )
}
