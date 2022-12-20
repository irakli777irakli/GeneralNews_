import styles from './helper.module.css'
import Router, { useRouter } from 'next/router';
export const newsCategories = [
    
    "technology",
    "politics",
    "world",
    "business",
    "science",
]

async function fetchSingleNew(category,date, time){
    const res = await fetch(`https://inshorts.deta.dev/news?category=${category}`);
    
    const data = await res.json();

    const singleNew = await data.data.find((el)=> {
        if((el.date === date) && (el. time ===  time)){
           
            return el;
        }
    });
    
    return singleNew;
}

export async function getSingleNew(category,date, time){
    if(category === "Top Stories"){
        const data = await fetchSingleNew("technology",date, time);
        return data;
    }else{
        const data = await fetchSingleNew(category,date, time);
        return data;
    }
}

export function errorMessage(e){
    const router = useRouter()
    return(
        <div className={styles.errorWrapper}>
        {e.message ? <h1 className={styles.header1}>{e.message}</h1> :
         e ? <h1 className={styles.header1}>{e}</h1> : <h1 className={styles.header1}>Problem with api endpoint</h1>}

        <button onClick={()=> router.push('/')} className={styles.errbtn}>Return to Home</button>
        </div>
      )
}
