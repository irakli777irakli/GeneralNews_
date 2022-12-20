import React,{useEffect} from 'react'
import BreakingNew from '../components/home-page/breaking-new';
import SingleNewContent from '../components/single-new/single-new-content';
import {getSingleNew, getSIngleNew, newsCategories} from '../helper/helper-lib'
import { useGlobalContext } from '../context/context';
import Head from "next/head";
import { errorMessage } from '../helper/helper-lib';

export default function SingleNew(props) {

    const {singleArticle} = props;
    const {newsCaregoryPage,setNewsCaregoryPage} = useGlobalContext();
    useEffect(()=> {
      setNewsCaregoryPage(false)
    },[])

    if(props.error || typeof(props.singleArticle) === 'string'){
      return (
        <>
        {errorMessage(props.error || props.singleArticle)}
        </>
      )
     }
  
  return (
    <>
     <Head>
   <title>{singleArticle.title}</title>
     <meta name="description" content={`${singleArticle.title}`} />
     
   </Head>
      <BreakingNew singleBreakingNew={singleArticle} singleArticlePageImg={true}/>
      <SingleNewContent singleArticleContent={singleArticle}/>
    </>
  )
}


export async function getServerSideProps(context){
 
    const slug = context.params.singleNew;

    if(slug.length !== 3){
      return {
        props: {
          error: "Invalid New Path detected"
        }
      }
    }
   
    const [category, date, time] = slug;
    if(!newsCategories.includes(category) && category !== 'Top Stories'){
      return {
        props: {
          error: "Invalid Category detected"
        }
      }
    }

    try{
      const singleArticle = await getSingleNew(category,date,time)
      if(singleArticle === undefined){
        return {
          props: {
            error: "No such News was found"
          }
        }
      }


      return {
        props: {
            singleArticle
        }
    }
    }
   
    catch(e){
      return {
        props: {
            error: e,
        }
    } 
    }
  
   
}
