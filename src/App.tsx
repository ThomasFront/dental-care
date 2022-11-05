import { Layout } from "./components/Layout"
import { About } from "./components/sections/About"
import Header from "./components/sections/Header/Header"
import { Services } from "./components/sections/Services"

function App() {
  return (
    <>
      <Layout>
        <Header />
        <About />
        <Services/>
        <div style={{ height: '100vh' }}></div>
      </Layout>
    </>
  )
}

export default App
