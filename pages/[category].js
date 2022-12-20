import React from 'react'
import TopStories from '../components/home-page/top-stories/top-stories';
import { newsCategories } from '../helper/helper-lib'
import { errorMessage } from '../helper/helper-lib';
import Head from "next/head";

export default function index(props) {
    const {singleCategoryData} = props;
    

    if(props.error){
       errorMessage(props.error)
      }

    return (
    <>
     <Head>
        <title>{singleCategoryData.category}</title>
        <meta name="description" content={`find ongoing news in ${singleCategoryData.category}`} />
      </Head>
    <TopStories topStories={singleCategoryData.data} about={`${singleCategoryData.category}`} singleCategoryNew={true}/>
        </>
  )
}


export async function getStaticProps(context){

    const selectedCategory = context.params.category;
    try{
        const res = await fetch(`https://inshorts.deta.dev/news?category=${selectedCategory}`);
        const data = await res.json();
           
        
        return {
            props: {
                singleCategoryData: data,
            }
        }
    }catch(e){
        return {
            props: {
                error: e,
            }
        } 
    }
   
}


export async function getStaticPaths(){
    const paths =  newsCategories.map(path => ({params: {category: path}}))

    return {
        paths,
        fallback: false,
    }
}
