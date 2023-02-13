import { useState } from 'react';
import { getNewArticles } from '../helpers/getNewArticles';
import { useFetchArticles } from '../hooks/useFetchArticles';

export const Carousel = () => {
    
    const { articles, isLoading} = useFetchArticles();
    console.log(articles, isLoading);

    const [active, setActive] = useState(0);

    const articleNext = () => {
        active < 4 ? setActive(active + 1) : setActive(0);
    }

    const articlePrevius = () => {
        active > 0 ? setActive(active - 1) : setActive(4);
    }

  return (
    <>
    
        <h1 className='mb-4 text-center font-bold'>Noticias Recientes </h1>
        {
            isLoading && ( <h2 className='text-center'>Cagando...</h2> )
        }

        <div id="default-carousel" className="relative" data-carousel="static">
            
            <div className="relative h-56 overflow-hidden rounded-lg md:h-screen">     
                {
                    articles.map((art) => (
                        <div key={ art.index } className={ art.index === active ? "duration-700 ease-in-out" : "hidden duration-700 ease-in-out" } data-carousel-item>
                            <img src={ art.urlToImage || "../src/assets/carousel-1.svg" } className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={ art.title } />
                            <a href={ art.url } target="_blank"><h2 className="absolute absolute inset-x-8 bottom-10 text-2xl font-bold hover:underline">{ art.title }</h2></a>
                        </div>
                    ))
                }
            </div>
            
            <button type="button" onClick={ articlePrevius }  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button type="button" onClick={ articleNext } className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
        
    </>
  )
}
