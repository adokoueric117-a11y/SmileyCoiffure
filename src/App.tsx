import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PremiumServices from './Pages/PremiumServices'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PremiumServices' element={<PremiumServices />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}
