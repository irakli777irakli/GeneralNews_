import styles from './helper.module.css'
import { useRouter } from 'next/router';



import React from 'react'

function ErrorMessage(e) {

    const router = useRouter();


    return(
        <div className={styles.errorWrapper}>
        {e.message ? <h1 className={styles.header1}>{e.message}</h1> :
         e ? <h1 className={styles.header1}>{e}</h1> : <h1 className={styles.header1}>Problem with api endpoint</h1>}

        <button onClick={()=> router.push('/')} className={styles.errbtn}>Return to Home</button>
        </div>
      )
}

export default ErrorMessage