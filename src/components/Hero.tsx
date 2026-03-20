import Himg from '../assets/baber.png'
import Buttons from './Buttons'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div>
        <div className='relative h-screen inset-0 z-0' style={{
            backgroundImage: `url(${Himg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%'
        }}>
            
            <div className='bg-black opacity-40 inset-0 absolute '>
            </div>
            <motion.div className='flex flex-col items-center justify-center min-h-screen'
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}}
            >
                    <h1 className='text-6xl font-bold opacity-100 max-w-300 z-10'>Le Salon de coiffure le plus innovant de la capitale</h1>
                    <Buttons/>
                </motion.div>
                
        </div>
    </div>
  )
}
