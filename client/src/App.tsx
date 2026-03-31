import Header from "./common/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Tools from "./components/Tools"

export default function App() {

  return (<>
    <div className="mx-5">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      
    </div>
  </>
  )
}
