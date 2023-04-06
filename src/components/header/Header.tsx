import React from 'react'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Header = () => {
  return (
    <div className={styles.center}>

        <h1 className={inter.className} style={{zIndex: 2, fontSize: "2.5rem"}}>
        DELTA
        </h1>

        <div className={styles.thirteen}>
          <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
              draggable={false}
          />
        </div>
        
    </div>
  )
}

export default Header