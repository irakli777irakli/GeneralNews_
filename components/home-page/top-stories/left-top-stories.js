import React from 'react'
import LeftTopStoriesContent from './left-top-stories-content'
import styles from './top-stories.module.css'

export default function LeftTopStories({leftData,normalNew,singleCategoryNew,about}) {

  return (
    <div className={styles.left}>
    {leftData.map((item,i) => {
      if(singleCategoryNew){
        return <LeftTopStoriesContent key={item.id} item={item} singleCategoryNew={singleCategoryNew} about={about}/>
      }
      if(normalNew){
        return <LeftTopStoriesContent key={item.id} item={item} normalNew={normalNew} about={about}/>
      }
      if(i % 2 === 0){
        return <LeftTopStoriesContent key={item.id} item={item} reverse={false} about={about}/>
      }else{
        return <LeftTopStoriesContent key={item.id} item={item} reverse={true} about={about}/>
      }
    
    })}
    </div>
  )
}
