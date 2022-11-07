import { Layout } from "./components/Layout"
import { About } from "./components/sections/About"
import { Achievements } from "./components/sections/Achievements"
import { Contact } from "./components/sections/Contact"
import Header from "./components/sections/Header/Header"
import { Information } from "./components/sections/Information"
import { Services } from "./components/sections/Services"

function App() {
  return (
    <>
      <Layout>
        <Header/>
        <About/>
        <Services/>
        <Achievements/>
        <Information/>
        <Contact/>
      </Layout>
    </>
  )
}

export default App
