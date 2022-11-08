import { Footer } from "../Footer"
import { Navbar } from "../Navbar"
import { Wrapper } from "./Layout.styles"

export type ChildrenType = {
  children: React.ReactNode
}

export const Layout = ({ children }: ChildrenType) => {

  return (
    <>
      <Navbar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}