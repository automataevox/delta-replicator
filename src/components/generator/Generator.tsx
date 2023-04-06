/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from '@/styles/Home.module.scss'
import { Inter } from 'next/font/google'
import { Image, Maximize, Minimize, Monitor, Move, PenTool, Sliders, Type } from 'react-feather'

const inter = Inter({ subsets: ['latin'] })

const Generator = () => {
  return (
    <div className={styles.generator}>
      <header className={inter.className}>
        <div className={styles.settingChoice}>
          <Type />
          <Monitor />
          <Sliders />
          <Move />
          <Minimize />
          <Maximize />
        </div>
        <div className={styles.settingOptions}>
        </div>
      </header>
    </div>
  )
}

export default Generator