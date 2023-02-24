
export const getSearchArticles = async(q = '') => {
    if( q.length === 0 ) return [];
    
    const url = `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&pageSize=30&apiKey=0c6c876345d9482a8fcd58d34f3ccae5`;
    const resp = await fetch(url);
    const { articles } = await resp.json(); 

    const data = articles.map( (art, index) => ({
        title: art.title,
        description: art.description,
        url: art.url,
        urlToImage: art.urlToImage,
        index: index
    }))

    return data;
}
