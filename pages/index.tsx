import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>VinRank</title>
        <meta name="description" content="VinRank app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h2 className={inter.className}>VinRank</h2>
          <p className={inter.className}>
            Current player rankings
          </p>
        </div>
      </main>
    </>
  )
}
