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
      <header>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-8">
        <article className="prose">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p>
          <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
        </article>
      </main>
    </>
  )
}
