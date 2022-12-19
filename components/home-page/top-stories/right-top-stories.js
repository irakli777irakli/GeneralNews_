import React from 'react'
import RightTopStoriesContent from './right-top-stories-content';
import styles from './top-stories.module.css'



export default function RightTopStories({rightData,normalNew,about}) {
 
  return (
    <div className={styles.right}>
      {rightData.map((item)=> {
        return <RightTopStoriesContent key={item.id} item={item} normalNew={normalNew} about={about}/>
      })}
    </div>
  )
}
