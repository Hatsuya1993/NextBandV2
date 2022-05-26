import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Bottom from '../components/Bottom'
import Contact from '../components/Contact'
import Description from '../components/Description'
import NavBar from '../components/NavBar'
import Social from '../components/Social'
import TourDates from '../components/TourDates'

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
      <TourDates />
      <Contact />
      <Bottom />
      <Social />
    </div>
  )
}

export default Home
