import BreakingNew from "../components/home-page/breaking-new";
import Navbar from "../components/home-page/navbar";
import TopStories from "../components/home-page/top-stories/top-stories";
import { newsCategories } from "../helper/helper-lib";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";
import { errorMessage } from "../helper/helper-lib";
import Head from "next/head";

export default function Home(props) {
  const {homepageNews} = props;
  
  const {newsCaregoryPage,setNewsCaregoryPage} = useGlobalContext();


  if(props.error){
   errorMessage()
  }

  useEffect(()=> {
    setNewsCaregoryPage(false)
  },[])
  return (
    <>
    <Head>
      <title>General News_</title>
      <meta name="description" content="find news, about different topics such as, technology, politics, science, world ..." />
    </Head>
    <BreakingNew singleBreakingNew={homepageNews[0].data[10]}/>
    <Navbar />
      <TopStories topStories={homepageNews[0].data} about={"Top Stories"}/>
      {homepageNews && homepageNews.map((item,i)=> {
        if(i !== 0){
          return <TopStories key={item.category} topStories={item.data} about={`${item.category}`} normalNew={true}/>
        }
      })}
   
    </>
  )
}

export async function getStaticProps(){
  try{
    const response = await Promise.all(newsCategories.map((category)=> {
      return fetch(`https://inshorts.deta.dev/news?category=${category}`).then(res=> res.json());
    }))

    return {
      props: {
        homepageNews: response,    
      },
     revalidate: 1800,
    }

  }catch(e){
    return {
      props: {
        error: e
      }
    }
  }
 
 
 
}




