import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
    return (
        <div className={inter.className}>
            <Head>
                <title>VinRank</title>
                <meta name="description" content="VinRank app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Image
                            priority
                            src="/images/shuttlecock.png"
                            height={30}
                            width={30}
                            alt="shuttlecock"
                        />
                        <a className="btn btn-ghost normal-case text-xl text-green-500">VinRank</a>
                    </div>
                    <div className="flex-none">
                        <a className="btn btn-ghost normal-case">Start match day</a>
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-8">{children}</main>
        </div>
    )
}