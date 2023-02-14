import { useEffect, useState } from 'react'
import { getTechnologyArticles } from '../helpers';

export const useFetchTechnology = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getTechnology = async() => {
        const data = await getTechnologyArticles();
        setArticles(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getTechnology();
    }, [])

    return {
        articles,
        isLoading
    }
    
}
