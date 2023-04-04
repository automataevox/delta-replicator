import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header/Header'
import Description from '@/components/description/Description'

export default function Home() {
  return (
    <>
      <Head>
        <title>Delta 13</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div />
        <Header />
        <Description />
      </main>
    </>
  )
}
