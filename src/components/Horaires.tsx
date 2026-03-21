import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Horaires() {
const [ref, inview]=useInView({
    triggerOnce: true,
    threshold: 0.5
})
  return (
    <div>
        
            <motion.h1 className="text-2xl font-semibold text-center pb-10"
            ref={ref}
            initial={{opacity:0, y:10}}
            animate={inview ? {opacity:1, y:0} : {}}
            transition={{duration: 0.3}}
            >Nos horaires d'ouverture</motion.h1>
        
        <div>
            <motion.div className="flex gap-20 font-semibold text-xl pb-20 items-center justify-center"

            ref={ref}
            initial={{opacity:0, x: -30}}
            animate={inview ? {opacity:1, x:0} : {}}
            transition={{duration: 0.3}}
            >
                <div>
                    <ul>
                        <li>Lundi</li>
                        
                        <li>Mardi</li>
                        
                        <li>Mercredi</li>
                        
                        <li>Jeudi</li>
                        
                        <li>Vendredi</li>
                        
                        <li>Samedi</li>
                       
                        <li>Dimanche</li>
                        
                        </ul>
                    
                </div>
                <div>
                    <ul className="text-amber-600">
                        <li>9h00--21h00</li>
                        <hr/>
                        <li>9h00--21h00</li>
                        <hr/>
                        <li>9h00--21h00</li>
                        <hr/>
                        <li>9h00--21h00</li>
                        <hr/>
                        <li>9h00--21h00</li>
                        <hr/>
                        <li>9h00--21h00</li>
                        <hr/>
                        <li>9h00--21h00</li>
                    </ul>
                    
                </div>
            </motion.div>
        </div>
    </div>
  )
}
