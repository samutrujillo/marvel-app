import Head from 'next/head'
import { Inter } from 'next/font/google'
import Homeview from '../components/home'
import Container from 'react-bootstrap/Container';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Marvel</title>
        <meta name="description" content="aplicacion de peliculas de marvel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="marvel-favicon.png" />
      </Head>
      
        <Homeview/>
      
    </>
  )
}
