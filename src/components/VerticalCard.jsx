import { useFetchTechnology } from '../hooks';
import { Spinner } from './Spinner';

export const VerticalCard = () => {

    const { articles, isLoading } = useFetchTechnology();

  return (
    <>
        <h1 className="mb-4 font-bold text-2xl text-center uppercase">Technology</h1>
        {
            isLoading && ( <Spinner /> )
        }

        <div className="grid grid-cols-4 gap-4">
            {
                articles.map((art) => (
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg h-44 w-full" src={ art.urlToImage || "../src/assets/no-image.png" } alt={ art.title } />
                        <div className="p-5">
                            <h5 className="h-32 overflow-hidden mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ art.title }</h5>
                            <p className="h-24 overflow-hidden mb-3 font-normal text-gray-700 dark:text-gray-400">{ art.description }</p>
                            <a href={ art.url } target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Más Info
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}
