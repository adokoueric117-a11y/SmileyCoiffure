import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  function goHome() { navigate('/') }

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
      <div className='flex flex-col items-center justify-center'>
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-gray-700 mb-2">Téléphone: +228 71 75 79 64</p>
      <p className="text-lg text-gray-700">Email: smileycoiffure@example.com</p>
      </div>
      
    </div>
  )
}
