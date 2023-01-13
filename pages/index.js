import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from '../components/content/About'
import Skills from '../components/content/Skills'
import Projects from '../components/content/Projects'


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Karina Valens</title>
      </Head>

      <main className={styles.main}>


    <About/>

    <Skills/>

    <Projects/>


          
      </main>
    </>
  )
}
