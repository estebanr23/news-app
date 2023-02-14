import { useState, useEffect } from 'react'
import { getNewArticles } from '../helpers';

export const useFetchArticles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getArticles = async() => {
        const newArticles = await getNewArticles();
        setArticles(newArticles);
        setIsLoading(false);
    }

    useEffect(() => {
      getArticles();
    }, [])

    return {
        articles,
        isLoading
    }
    
}
