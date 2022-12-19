import React from 'react'
import styles from './single-new-content.module.css'


export default function SingleNewContent({singleArticleContent}) {
    const {title, author, content, date} = singleArticleContent;
  return (
    <div className={styles.main_article_content_wrapper}>
        <div className={styles.main_article_content}>
            <h1 className={styles.main_title}>{title}</h1>
            <div className={styles.main_article_author_date_wrapper}>
                <p className={styles.main_article_author}>{author}</p>
                <p className={styles.main_article_date}>{date}</p>
            </div>
            <p className={styles.main_article_text}>{content}</p>
        </div>

    </div>
  )
}



