import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"
export default function Home(){
    return(
    <div>
    <div className="bg-gradient-to-br from-[#ebcbf7] via-white to-[#fcfcf9]">
      <Navbar/>
      <Hero/>
    </div>
    <About/>
    <Footer/>
    </div>
    )
}