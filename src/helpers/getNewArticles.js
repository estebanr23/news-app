export const getNewArticles = async() => {
    // const url = `https://newsapi.org/v2/top-headlines?country=ar&pageSize=6&apiKey=0c6c876345d9482a8fcd58d34f3ccae5`;
    const url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&pageSize=6&apiKey=0c6c876345d9482a8fcd58d34f3ccae5`;
    const resp = await fetch(url);
    const { articles } = await resp.json();

    const data = articles.map( (art, index) => ({
        title: art.title,
        description: art.description,
        url: art.url,
        urlToImage: art.urlToImage,
        publishedAt: art.publishedAt,
        index: index,
    }));

    return data;
}