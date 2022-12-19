import React from 'react'
import Navigate from './navigate'
import styles from './layout.module.css'
import Sidebar from './sidebar'
import { useState } from 'react'
import Footer from '../footer/footer'
import {AppProvider} from '../../context/context'
export default function Layout(props) {

  const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  return (
    <AppProvider >
    <div className={styles.overWrapper}>
    {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>}
        <Navigate isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        {props.children}
      <Footer />  
    
    </div>
    </AppProvider>
  )
}
