import { Layout } from "./components/Layout"
import { Navbar } from "./components/Navbar"
import { About } from "./components/sections/About"
import Header from "./components/sections/Header/Header"

function App() {
  return (
    <>
      <Layout>
        <Header />
        <About />
      </Layout>
    </>
  )
}

export default App
