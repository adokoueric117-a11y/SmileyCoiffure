import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Servicestext() {

    const [ref, inview] = useInView({
        triggerOnce: true,
        threshold: 0.
    })
   

  return (
    <div>
        <motion.div ref={ref} className="flex flex-col items-center justify-around mt-12"
        initial={{opacity:0, y:20}}
        animate={inview? {opacity:1, y:0}: {}}
        transition={{duration:0.5}}
        
        >
            <h1 className="text-2xl text-amber-600 font-bold">Nos Services Premium à Lomé</h1>
            <p className="max-w-190 text-center mt-6 font-thin text-lg mb-12">Nous nous engageons à vous offrir la meilleure expérience coiffure à Lomé. Notre équipe d'experts est là pour vous accompagner à chaque étape, du choix du bon service jusqu'à la fin.</p>
        </motion.div>
    </div>
  )
}
