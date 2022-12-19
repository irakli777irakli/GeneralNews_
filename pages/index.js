import BreakingNew from "../components/home-page/breaking-new";
import Navbar from "../components/home-page/navbar";
import TopStories from "../components/home-page/top-stories/top-stories";
import { newsCategories } from "../helper/helper-lib";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";
export default function Home(props) {
  const {homepageNews} = props;
  
  const {newsCaregoryPage,setNewsCaregoryPage} = useGlobalContext();

  useEffect(()=> {
    setNewsCaregoryPage(false)
  },[])
  return (
    <>
    
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

  const response = await Promise.all(newsCategories.map((category)=> {
    return fetch(`https://inshorts.deta.dev/news?category=${category}`).then(res=> res.json());
  }))
 
  return {
    props: {
      homepageNews: response,    
    },
   revalidate: 3600,
  }
}




