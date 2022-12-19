import React from 'react'
import styles from './hero.module.css'

export default function Hero(props) {
  return (
    <div className={styles.hero}>
    {props.children}
    </div>
  )
}
