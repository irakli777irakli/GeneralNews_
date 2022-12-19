import React, { useState } from 'react'
import styles from './layout.module.css'
import {FaBars,FaWindowClose} from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useGlobalContext } from '../../context/context'

export default function Navigate({isSidebarOpen,setIsSidebarOpen}) {
  
  const {newsCaregoryPage} = useGlobalContext()

  const router = useRouter()
  const openClose = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
   
    <div className={newsCaregoryPage ? `${styles.navigator} ${styles.singleNew_navigator}` : styles.navigator}>
      {!isSidebarOpen && <FaBars className={styles.open_sidebar} onClick={()=> openClose()}/>}
      <h1 className={styles.logo_name} onClick={()=>router.push('/')} >General News_</h1>
    </div>
    
  
  )
}
