import { useNavigate } from "react-router-dom"

export default function Buttons() {

    const navigate = useNavigate()

    function goToPremium(){
        navigate('/PremiumServices')
    }

  return (
    <div className="flex gap-10 mt-4 z-30 text-xl">
        <div>
        <button className="px-4 py-3 border border-white cursor-pointer hover:scale-105 transition-all duration-300 rounded-3xl" onClick={goToPremium}>Nos services premium</button>
        </div>
        <div>
    <   button className="px-4 py-3  border border-white cursor-pointer hover:scale-105 transition-all duration-300 bg-amber-700 rounded-3xl">Réserver maintenant</button>
        </div>
    </div>
  )
}
