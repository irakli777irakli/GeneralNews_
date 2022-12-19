import React, { useEffect } from 'react'
import { useGlobalContext } from '../../../context/context'
import Hero from '../../hero'
import LeftTopStories from './left-top-stories'
import RightTopStories from './right-top-stories'
import styles from './top-stories.module.css'

export default function TopStories({topStories,about,normalNew,singleCategoryNew}) {
  const {newsCaregoryPage,setNewsCaregoryPage} = useGlobalContext()
  const determindeLeftCategory = () => {
    if(normalNew){
      return topStories.slice(0,1);
    }else if(singleCategoryNew){
      return topStories.slice(0,15)
    }
    else{
      return topStories.slice(0,3)
    }
  }

  useEffect(()=> {
    setNewsCaregoryPage(true)
  },[])
    
  return (
    <section className={newsCaregoryPage ? `${styles.center} ${styles.down}` : styles.center}>
      {singleCategoryNew && <hr className={styles.category_hr}/>}
        <Hero>
            {about}
        </Hero>
        <div className={styles.left_right}>
            <LeftTopStories leftData={determindeLeftCategory()} normalNew={normalNew} singleCategoryNew={singleCategoryNew} about={about}/>
            {!singleCategoryNew && <RightTopStories rightData={normalNew ? topStories.slice(1,4) : topStories.slice(5,9)} normalNew={normalNew} about={about}/>}
        
        </div>
        
    </section>
  )
}
