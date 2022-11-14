import { Layout } from "./components/Layout"
import { Route, Routes } from 'react-router-dom'
import { HomePage } from "./pages/HomePage"
import { VisitPage } from "./pages/VisitPage"
import { RegisterPage } from "./pages/RegisterPage"
import { LoginPage } from "./pages/LoginPage"
import { NotFound } from "./pages/NotFound"


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
