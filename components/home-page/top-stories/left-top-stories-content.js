import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from './top-stories.module.css'
import { useRouter } from 'next/router';
import { useWindowSize } from '../../../custom-hook/UseWindowSize';

export default function LeftTopStoriesContent({item,reverse,normalNew,singleCategoryNew,about}) {
    const {imageUrl, title, author, content, id, date,time} = item;
    const router = useRouter()
    const size = useWindowSize();

    
    const determineImageSize = (wh) => {
      if(singleCategoryNew){
        if(wh === 'w'){
          return 900
        }else{
          return 220
        }
        
      }else if(normalNew){
        if(wh === 'h'){
          return 630
        }else{
          return 1260
        }
      }
      else{
        if(wh === 'h'){
          // custom hook for tracking width
          return size?.width < 768 ? 220 : 420
        }else{
          return 400

        }
      }
    }

   
  return (
    <>
     <div onClick={() => router.push(`/${about}/${date}/${time}`)} key={title} className={normalNew ? styles.single_left_new_col : styles.single_left_new}>
       {!reverse && <Image src={imageUrl} alt={title} width={determineImageSize("w")} height={determineImageSize('h')} quality={90} />}
       <div className={styles.single_left_new_info}>
         {(!normalNew && !singleCategoryNew) && <hr className={styles.hr}/>}
         <h1 className={styles.title}>{title}</h1>
         <div>
         <p className={styles.author}>{author}</p>
         {singleCategoryNew && <p>- {date}</p>}
         </div>
         
         {(!normalNew && !singleCategoryNew) && <p className={styles.content}>{content.substring(content.length - 100, content.length)}</p>}
       </div>

       {singleCategoryNew && <p className={styles.content}>{content.substring(content.length - 250, content.length)}</p>}
       {reverse && <Image src={imageUrl} alt={title} width={determineImageSize("w")} height={determineImageSize('h')} quality={90}/>}

     </div>
   </>
  )
}
