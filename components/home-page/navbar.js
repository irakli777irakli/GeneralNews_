import React from 'react'
import { newsCategories } from '../../helper/helper-lib'
import styles from './navbar.module.css'
import Link from 'next/link'



export default function Navbar({direction, setIsSidebarOpen}) {


  return (
    <nav className={styles.nav}>
        <div className={styles.nav_Center}>
            <ul className={direction ? styles.sedebar_nav : null} >
                {newsCategories.map((singleNew,i) => <li onClick={direction ? ()=> setIsSidebarOpen(false) : null} key={i}><Link href={`/${singleNew}`} className={styles.singleCategoryLink}>{singleNew}</Link></li>)}
            </ul>
        </div>
    </nav>
  )
}
