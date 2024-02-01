import { Button } from 'react-bootstrap'
import './App.css'
import NavBar from './components/NavBar'
import CustomCarousel from './components/CustomCarousel'
import Footer from './components/Footer'

function App() {

  return (
    <main>
      <NavBar/>
      <div className="content">
      <CustomCarousel/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
