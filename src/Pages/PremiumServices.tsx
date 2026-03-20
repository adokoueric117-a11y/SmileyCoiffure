import { useState } from 'react'
import cata1 from '../assets/cata1.png'
import cata2 from '../assets/cata2.png'
import cata3 from '../assets/cata3.png'
import cata4 from '../assets/cata4.png'
import cata5 from '../assets/cata5.png'
import cata6 from '../assets/cata6.png'
import cata7 from '../assets/cata7.png'
import { useForm } from 'react-hook-form'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Type pour TypeScript
type FormData = {
    nom: string;
    date: string;
    choix: string;
    tel: string;
}

export default function Catalogue() {

    const [isOpen, setIsOpen] = useState(false)

    // Initialisation de React Hook Form
    const { register, handleSubmit } = useForm<FormData>()

    const catalog = [
        { id: 1, img: cata1, title: 'Coupe soigné professionnelle', price: 1500 },
        { id: 2, img: cata2, title: 'Coupe design personnalisé', price: 3000 },
        { id: 3, img: cata3, title: 'Coupe dame professionnelle', price: 3000 },
        { id: 4, img: cata4, title: 'Coupe enfant (-15ans)', price: 1000 },
        { id: 5, img: cata5, title: 'Teinte dame professionnelle', price: 3000 },
        { id: 6, img: cata6, title: 'Coupe VIP heavy beauty', price: 5000 },
        { id: 7, img: cata7, title: 'Gel pour fillette', price: 1000 },
    ]

    // la fonction qui permet au client d'envoyer le message du soumission via whatsapp
    const sendToWhatsapp = (data: FormData) => {
        const numDestinataire = "22871757964"
        // maintenant le message
        const Message = `Bonjour, mon nom est ${data.nom}.
Je prends un rendez-vous le ${data.date}.
Je veux qu'on me fasse la coupe : ${data.choix}.
Contact : ${data.tel}`

        // mais encodons le texto
        const MessageEncoded = encodeURIComponent(Message)
        
        // maintenant l'ouverture dans un nouvel onglet
        window.open(`https://wa.me/${numDestinataire}?text=${MessageEncoded}`, '_blank')
        setIsOpen(false)

       
    }

     const navigate = useNavigate()
        
        function Rhome(){
            navigate('/')
        }

    return (
        <div>
            <div className='pt-5 px-4 text-amber-500'>
                <button className='flex gap-1 cursor-pointer hover:scale-105 transition-all duration-300' onClick={Rhome}><ArrowLeft/> Retour à l'acceuil </button>
            </div>
            <div className='mt-8 mb-15 flex items-center justify-center'>
                <h1 className='text-2xl text-green-600 font-semibold outline-1 p-2 rounded-md'>Nos services premiums</h1>
            </div>
            <div className='flex items-center justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

                    {catalog.map((cata) => (
                        <div key={cata.id} className="card bg-base-100 w-70 shadow-sm">
                            <figure>
                                <img src={cata.img} alt={cata.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {cata.title}
                                    <div className="badge bg-amber-600 px-4 py-6">{cata.price}FCFA </div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline bg-green-700 cursor-pointer hover:bg-green-700/70">
                                        <button onClick={() => setIsOpen(true)}>Réserver</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* La modale de formulaire */}
                    {isOpen && (
                        // le parent
                        <div className='fixed inset-0 z-50 flex items-center justify-center'>
                            {/* Le overlay flou derrière le truk */}
                            <div className='bg-black/40 absolute inset-0 backdrop-blur' onClick={() => setIsOpen(false)}></div>
                            
                            {/* La fenetre meme sort  */}
                            <div className='bg-black p-5 w-full max-w-80 fixed rounded-2xl text-white transform transition-all duration-500'>
                                {/* le formulaire */}
                                <h1 className='text-xl text-center font-bold text-amber-700'>Réservation en Ligne</h1>
                                
                                <form onSubmit={handleSubmit(sendToWhatsapp)}>
                                    <div className='flex flex-col items-center justify-center mt-5 gap-5'>
                                        <input {...register("nom")} type="text" className='w-70 border border-gray-700 rounded-2xl text-center py-1 bg-transparent text-white' placeholder='Nom et prénom' required />
                                        
                                        <select {...register("choix")} className='w-70 text-center border border-gray-700 rounded-2xl py-1 bg-black text-white' required>
                                            <option value="">Choisir un modèle...</option>
                                            {catalog.map((val) => (
                                                <option key={val.id} value={val.title}>{val.title}</option>
                                            ))}
                                        </select>
                                        
                                        <input {...register("tel")} type="tel" className='w-70 border border-gray-700 rounded-2xl text-center py-1 bg-transparent text-white' placeholder='Numéro de téléphone' required />
                                        
                                        <input {...register("date")} type="date" className='w-70 border border-gray-700 rounded-2xl py-1 text-gray-500 bg-transparent' required />

                                        <div className='flex gap-12'>
                                            <button type="button" onClick={() => setIsOpen(false)} className='border px-5 cursor-pointer py-1 rounded-3xl'>Annuler</button>
                                            <button type='submit' className='px-4 py-1 bg-amber-600 text-white cursor-pointer rounded-3xl'>Soumettre</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
