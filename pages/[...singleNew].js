import React,{useCallback, useEffect, useMemo, useState} from 'react'
import BreakingNew from '../components/home-page/breaking-new';
import SingleNewContent from '../components/single-new/single-new-content';
import {getSingleNew, newsCategories} from '../helper/helper-lib'
import { useGlobalContext } from '../context/context';
import Head from "next/head";
import {useRouter} from 'next/router'
import ErrorMessage from '../components/errorpage/ErrorMessage';




export default function SingleNew(props) {

    const router = useRouter();
    const slug = router.query.singleNew;


  const [article,setArticle] = useState();
  const [loading,setLoading] = useState(false);


    const {newsCaregoryPage,setNewsCaregoryPage} = useGlobalContext();
    useEffect(()=> {
      setNewsCaregoryPage(false);
      differentFetch();
      
    },[slug]);

    const getFromLocalStorage = async () => {
      try{
        const localStorageSlug = localStorage.getItem("newSlug");
        return localStorageSlug;
      }catch (e){
        return "";
      }

    }

    const getMeomoizedArticleFromLocalStorage = async () => {
      try{
        const memArticle = localStorage.getItem("currentArticle");
        const parsedMemArticle = await JSON.parse(memArticle);
        return parsedMemArticle;
      }catch (e){
        console.log(e);
        return fetchSpecificNew(slug);
      }
    }

   const differentFetch = async () => {
    if(slug){
      
        const currentSlug = JSON.stringify(slug);
        const parsedSlug = await getFromLocalStorage();
        
        if(currentSlug !== parsedSlug){
          localStorage.setItem("newSlug",JSON.stringify(slug));
          await fetchSpecificNew(slug);
          
        }else{
          const memArticle = await getMeomoizedArticleFromLocalStorage();
          if(memArticle){
            setArticle(memArticle);
          }
         
          
        }

    }
  
   }
    
    const fetchSpecificNew =  useCallback( async (newSlug) => {
      setLoading(true);
      
      if(newSlug?.length !== 3){
        return (
          <>
          {ErrorMessage("Invalid New Path detected")}
          </>
        )
      }

    const [category, date, time] = newSlug;


    if(!newsCategories.includes(category) && category !== 'Top Stories'){

      return (
        <>
        {ErrorMessage("Invalid Category detected")}
        </>
      )

    }

    try{

      const singleArticle = await getSingleNew(category,date,time)
      if(singleArticle === undefined || !singleArticle){
        return (
          <>
          {ErrorMessage("No such News was found")}
          </>
        )
      }
      setArticle(singleArticle);
      localStorage.setItem("currentArticle",JSON.stringify(singleArticle));
        
    
    }
   
    catch(e){
      return (
        <>
        {ErrorMessage(e.message)}
        </>
      )
    }
    setLoading(false);
  },[])


    // if(props.error || typeof(props.singleArticle) === 'string'){
      // return (
      //   <>
      //   {errorMessage(props.error || props.singleArticle)}
      //   </>
      // )
    //  }


     // const {singleArticle} = props;
    
  
  return (
    <>
     <Head>
   <title>{article?.title}</title>
     <meta name="description" content={`${article?.title}`} />
   </Head>
      {loading && <div id="preloader">
          <div id="loader"></div>
      </div>
      }
      
      {article && <BreakingNew singleBreakingNew={article} singleArticlePageImg={true}/>}
      {article && <SingleNewContent singleArticleContent={article}/>}
    </>
  )
}


// export async function getServerSideProps(context){
 
    // const slug = context.params.singleNew;

    // if(slug.length !== 3){
    //   return {
    //     props: {
    //       error: "Invalid New Path detected"
    //     }
    //   }
    // }
   
//     const [category, date, time] = slug;
    // if(!newsCategories.includes(category) && category !== 'Top Stories'){
    //   return {
    //     props: {
    //       error: "Invalid Category detected"
    //     }
    //   }
    // }

    // try{

    //   const singleArticle = await getSingleNew(category,date,time)
    //   if(singleArticle === undefined){
    //     return {
    //       props: {
    //         error: "No such News was found"
    //       }
    //     }
    //   }


    //   return {
    //     props: {
    //         singleArticle
    //     }
    // }
    // }
   
    // catch(e){
    //   return {
    //     props: {
    //         error: e,
    //     }
    // } 
    // }
  
   
// }
