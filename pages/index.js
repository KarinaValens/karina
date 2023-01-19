import Head from 'next/head'
import { useContext } from 'react'
import About from '../components/content/About'
import Projects from '../components/content/Projects'
import SkillsIcons from '../components/content/SkillsIcons'
import { AppContext } from '../components/context/AppContext'
import Header from '../components/navigation/Header'

export default function Home() {

const {show}= useContext(AppContext)
  return (
    <>
      <Head>
        <title>Portfolio Karina Valens</title>
        <meta name="description" content="Karina Valens Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords'content='portfolio frontend developer design '/>
      </Head>
    <Header/>
    { show ?" ":  <main className='flex'>
        <SkillsIcons/>
        <About/>
        <Projects/>         
      </main>}
    </>
  )
}
