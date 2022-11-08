import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { VisitPage } from "./pages/VisitPage"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/visit" element={<VisitPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
