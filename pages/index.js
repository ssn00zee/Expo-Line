import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/map'
import Nav from '../components/nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  return (
    <>
      <Head>
        <title>Translink</title>
        <meta name="description" content="Expo Line Route" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TransLink_Logo.svg" />
      </Head>
      
      <Nav />

      <main className={styles.main}>
        <Map />
      </main>
    </>
  )
}
