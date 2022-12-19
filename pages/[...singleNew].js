import React,{useEffect} from 'react'
import BreakingNew from '../components/home-page/breaking-new';
import SingleNewContent from '../components/single-new/single-new-content';
import {getSingleNew, getSIngleNew} from '../helper/helper-lib'
import { useGlobalContext } from '../context/context';

export default function SingleNew(props) {

    const {singleArticle} = props;
    const {newsCaregoryPage,setNewsCaregoryPage} = useGlobalContext();

useEffect(()=> {
  setNewsCaregoryPage(false)
},[])
  return (
    <>
      <BreakingNew singleBreakingNew={singleArticle} singleArticlePageImg={true}/>
      <SingleNewContent singleArticleContent={singleArticle}/>
    </>
  )
}


export async function getServerSideProps(context){
    const slug = context.params.singleNew;
    const [category, date, title] = slug;
    const singleArticle = await getSingleNew(category,date,title)
  
    return {
        props: {
            singleArticle
        }
    }
}
