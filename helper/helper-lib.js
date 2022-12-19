export const newsCategories = [
    
    "technology",
    "politics",
    "world",
    "business",
    "science",
]

async function fetchSingleNew(category,date,title){
    const res = await fetch(`https://inshorts.deta.dev/news?category=${category}`);
    const data = await res.json();

    const singleNew = await data.data.find(el => (el.title === title) && (el.date === date));
    return singleNew;
}

export async function getSingleNew(category,date,title){
    if(category === "Top Stories"){
        const data = await fetchSingleNew("technology",date,title);
        return data;
    }else{
        const data = await fetchSingleNew(category,date,title);
        return data;
    }
}

