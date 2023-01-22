import React from 'react'
import Image from 'next/image'
import styles from './braking-news.module.css'
import { useRouter } from 'next/router';

export default function BreakingNew({ singleBreakingNew, singleArticlePageImg }) {
  const router = useRouter()
  const { imageUrl, title, author, date, time } = singleBreakingNew;

  return (
    <div className={styles.breaking_News_Container} onClick={singleBreakingNew ? () => router.push(`/technology/${date}/${time}`) : null}>
      <div className={styles.img_wrapper}>
      <Image src={imageUrl} alt={title} fill={true} className={!singleArticlePageImg ? `${styles.image} ${styles.filter}` : `${styles.image}`} quality={85} />
      </div>
      {!singleArticlePageImg && <h2 className={styles.breaking_News_Tittle}>{title}</h2>}
      {!singleArticlePageImg && <p className={styles.breaking_News_Author}>{author}</p>}
    </div>
  )
}
