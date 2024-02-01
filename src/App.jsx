import './App.css'
import NavBar from './components/NavBar'
import CustomCarousel from './components/CustomCarousel'
import Footer from './components/Footer'
import Slider from './components/Slider'
import { data } from './products/shoes'

function App() {

  return (
    <main>
      <NavBar/>
      <div className="content">
      <CustomCarousel/>
      </div>
      <Slider data={data}/>
      <Footer/>
    </main>
  )
}

export default App
