import type { NextPage } from 'next'
import Head from 'next/head'
import Left from '../components/left'
import Right from '../components/right'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full">
          <Left/>
          <Right/>
      </main>

    </div>
  )
}

export default Home
