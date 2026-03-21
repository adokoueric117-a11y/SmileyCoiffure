import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Story() {

    const [ref, inview]=useInView({
        triggerOnce: true,
        threshold:0.5
    })

  return (
    <motion.div className="pt-25 pb-25"
    ref={ref}
    initial={{opacity:0, y:25}}
    animate={inview ? {opacity:1, y:0} : {}}
    transition={{duration: 0.5}}
    >
        <div>
            <h1 className="text-center text-2xl font-semibold">Notre histoire</h1>
        </div>
        <div className="mt-5">
            <p className=" text-center mx-4">
                <i>
                    Fondé en 2025, SMILEY COIFFURE s' impose en tant que la référence absolue dans le domaine de la coiffure à Lomé. Notre salon allie tradition africaine et innovation internationale pour offrir à chaque client une expérience unique.

Notre équipe de professionnels passionnés se forme continuellement aux dernières techniques et tendances pour vous proposer des services de qualité supérieure, adaptés spécifiquement aux cheveux africains dans le climat de Lomé.
            
                </i>
                </p>
        </div>
    </motion.div>
  )
}
