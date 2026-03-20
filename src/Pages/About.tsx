import { useNavigate } from 'react-router-dom'

export default function About() {
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
      <h1 className="text-3xl font-bold mb-4">À propos</h1>
      <p className="text-lg text-gray-700">
        Smiley Coiffure : une expérience professionnelle à Lomé. Notre équipe dédiée accompagne chaque client(e) pour un résultat personnalisé.
      </p>
    </div>
  )
}
