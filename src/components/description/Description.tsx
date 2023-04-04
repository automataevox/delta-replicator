import React from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Description = () => {
  return (
        <div className={styles.grid}>
          <a
            href="https://github.com/suishounohibiki/delta-replicator"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Code <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information using source code from GitHub.
            </p>
          </a>

          <a
            href="https://github.com/suishounohibiki/delta-replicator"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Delta Replicator v13!
            </p>
          </a>

          <a
            href="https://github.com/suishounohibiki/delta-replicator"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Customize <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Using Delta Replicator you can customize generated elements.
            </p>
          </a>

          <a
            href="https://github.com/suishounohibiki/delta-replicator"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Export <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly get a code of the elements you want to export!
            </p>
          </a>
        </div>
  )
}

export default Description