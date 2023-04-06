import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/header/Header'
import Description from '@/components/description/Description'
import Generator from '@/components/generator/Generator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Delta 13</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className={styles.main}>
          <div />
          <Header />
          <Description />
        </header >
        <main className={styles.content}>
          <Generator />
        </main>
      </main>
    </>
  )
}
