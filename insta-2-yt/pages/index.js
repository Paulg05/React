import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0 Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* header */}
        <Header />
        {/* Feed */}
        {/* Modal */}
    </div>
  )
}