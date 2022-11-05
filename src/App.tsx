import { Layout } from "./components/Layout"
import { About } from "./components/sections/About"
import Header from "./components/sections/Header/Header"

function App() {
  return (
    <>
      <Layout>
        <Header />
        <About />
        <div style={{ height: '100vh' }}></div>
      </Layout>
    </>
  )
}

export default App
