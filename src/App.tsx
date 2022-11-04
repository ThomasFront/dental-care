import { Layout } from "./components/Layout"
import { Navbar } from "./components/Navbar"
import Header from "./components/sections/Header/Header"

function App() {
  return (
    <>
      <Layout>
          <Header/>
          {/* <div style={{height: '200vh'}}></div> */}
      </Layout>
    </>
  )
}

export default App
