import { useEffect, useState } from 'react'
import { getSportArticles } from '../helpers';

export const useFetchSport = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getSports = async() => {
        const data = await getSportArticles();
        setArticles(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getSports();
    }, [])

    return {
        articles,
        isLoading
    }
    
}
