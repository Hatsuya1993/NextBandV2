import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Description from '../components/Description'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BandV2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Banner />
      <Description />
    </div>
  )
}

export default Home
