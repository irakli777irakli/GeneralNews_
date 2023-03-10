import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from './top-stories.module.css'
import { useRouter } from 'next/router';

export default function RightTopStoriesContent({item,normalNew,about}) {
  const router = useRouter()
  const {imageUrl, title, author,date,time} = item;

 

  return (
  
 <div onClick={()=> router.push(`/${about}/${date}/${time}`)} className={normalNew ?styles.single_right_new_rw: styles.single_right_new}>
    {!normalNew && <hr className={styles.hr}/>}
    <Image style={{flex:"1"}} src={imageUrl} alt={title} width={200} height={170} quality={80} />
    {normalNew ? <div style={{flex:"1", display:'flex',flexDirection:'column'}}>
      <h1 className={`${styles.title} ${styles.rTitle}`}>{title}</h1>
      <p className={styles.author}>{author}</p>
    </div>: 
    <>
    <div>
    <h1 className={`${styles.title} ${styles.rTitle}`}>{title}</h1>
      <p className={styles.author}>{author}</p>
      </div>
    </>}
      
    
   </div>
  
  )
}
