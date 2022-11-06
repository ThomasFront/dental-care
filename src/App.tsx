import { Layout } from "./components/Layout"
import { About } from "./components/sections/About"
import { Achievements } from "./components/sections/Achievements"
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
        <div style={{ height: '100vh' }}></div>
      </Layout>
    </>
  )
}

export default App
