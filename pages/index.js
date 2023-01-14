import Head from 'next/head'
import About from '../components/content/About'
import Projects from '../components/content/Projects'
import SkillsIcons from '../components/content/SkillsIcons'

export default function Home() {


  return (
    <>
      <Head>
        <title>Portfolio Karina Valens</title>
        <meta name="description" content="Karina Valens Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords'content='portfolio frontend developer design '/>
      </Head>

      <main>
        <SkillsIcons/>
        <About/>
        <Projects/>


    


          
      </main>
    </>
  )
}
