import { useNavigate } from 'react-router-dom'
import Img1 from '../assets/cata1.png'
import Img2 from '../assets/manu.png'
import Img3 from '../assets/soinv.png'

export default function Services() {
  const navigate = useNavigate()
  function goHome() { navigate('/') }

  const services = [
        { id: 1, img: Img1, title: 'Coupe rasée', price: 1000 },
        { id: 2, img: Img2, title: 'Manicure et Pédicure', price: 3000 },
        { id: 3, img: Img3, title: 'Soin de visage', price: 3000 },
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6">
        <button
          className="px-4 py-2 bg-amber-600 text-white rounded-xl hover:scale-105 transition-transform"
          onClick={goHome}
        >
          Retour à l'accueil
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <p className="text-lg text-white mt-4 mb-4">
        Découvrez nos prestations et tarifs. Cette page présente une vue d'ensemble des services de coiffure disponibles.
      </p>
      <div className='flex items-center justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

                    {services.map((serv) => (
                        <div key={serv.id} className="card bg-base-100 w-70 shadow-sm">
                            <figure>
                                <img src={serv.img} alt={serv.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {serv.title}
                                    <div className="badge bg-amber-600 px-4 py-6">À partir de{serv.price}FCFA </div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
            
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
    </div>
  )
}
