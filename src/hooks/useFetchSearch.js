import { useEffect, useState } from "react"
import { getSearchArticles } from "../helpers";

export const useFetchSearch = (q) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getSearch = async() => {
        const searchResults = await getSearchArticles(q);
        setArticles(searchResults);
        setIsLoading(false);
    }

    useEffect(() => {
        getSearch();
    }, [q])
  

  return {
    articles,
    isLoading
  }
}
