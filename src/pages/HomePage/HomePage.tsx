import React from 'react'
import { About } from '../../components/sections/About'
import { Achievements } from '../../components/sections/Achievements'
import { Contact } from '../../components/sections/Contact'
import { Header } from '../../components/sections/Header'
import { Information } from '../../components/sections/Information'
import { Services } from '../../components/sections/Services'

export const HomePage = () => {
  return (
    <>
        <Header/>
        <About/>
        <Services/>
        <Achievements/>
        <Information/>
        <Contact/>
    </>
  )
}
