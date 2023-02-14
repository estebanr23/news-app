import { useFetchSport } from '../hooks'
import { Spinner } from './Spinner';

export const HorizontalCard = () => {

  const { articles, isLoading } = useFetchSport();

  return (
    <>
      <h2 className="mb-4 font-bold text-2xl text-center uppercase">Sports</h2>
      {
        isLoading && ( <Spinner />)
      }
      
      <div className='grid grid-cols-3 gap-2'>
        {
          articles.map((art) => (
            <div>
              <a href={ art.url } className="inline-flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img className="object-cover h-56 w-full rounded-t-lg md:h-56 md:w-52 md:rounded-none md:rounded-l-lg" src={ art.urlToImage } alt={ art.title } />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="h-40 mb-2 overflow-hidden text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ art.title }</h5>
                  </div>
              </a>
            </div>
          ))
        }  
      </div>
    </>
  )
}
