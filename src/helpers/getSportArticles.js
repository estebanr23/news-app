export const getSportArticles = async() => {
    const url = 'https://newsapi.org/v2/top-headlines?category=sports&pageSize=6&apiKey=0c6c876345d9482a8fcd58d34f3ccae5';
    const resp = await fetch(url);
    const { articles } = await resp.json();
    
    const data = articles.map((art, index) => ({
        title: art.title,
        url: art.url,
        urlToImage: art.urlToImage,
        index: index
    }))

    return data;
}
