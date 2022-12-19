import React from 'react'
import styles from './layout.module.css'
import {FaWindowClose} from 'react-icons/fa'
import Navbar from '../home-page/navbar'
import { useRouter } from 'next/router';

export default function Sidebar({isSidebarOpen,setIsSidebarOpen}) {
  const router = useRouter()

  return (
   
    <div className={styles.sidebar_wrapper}>
        <div className={styles.sidebar}>
            <div className={styles.sidebar_logo_close_wrapper}>
                <FaWindowClose className={styles.close_sidebar} onClick={()=> setIsSidebarOpen(false)}/>
                <h1 className={styles.close_sidebar_logo} onClick={()=>{router.push('/');setIsSidebarOpen(false)}}>General News_</h1>
            </div>
            
                <Navbar direction={true} setIsSidebarOpen={setIsSidebarOpen}/>
            
        </div>
    </div>
   
  )
}
