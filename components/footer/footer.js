import React from 'react'
import styles from './footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.fter}>
        <h2 className={styles.logo}>General News_</h2>
        <div className={styles.dateWrapper}>
            <p>all rights reserved</p>
            <span>{new Date().getFullYear()}</span>
        </div>
    </footer>
  )
}
