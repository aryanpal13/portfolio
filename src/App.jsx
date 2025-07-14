import React from "react"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Skills from "./components/Skills/Skills"
import Work from "./components/Work/Work"
import BlurBlob from "./components/BlurBlob"

const App = () => {
  return (
    <div className="bg-[#050414]">

      <BlurBlob position={{ top: '30%', left: '20%'}} size={{width: '30%', height: '40%'}}></BlurBlob>

            <div className="absolute top-0 left-0 right-0 h-[60vh] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>


      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
        {/* <Experience /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
