import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBar, Footer, SearchResults } from '../components';

export const SearchPage = () => {

  const { state: { query } } = useLocation();
  const [searchText, setSearchText] = useState(query);

  useEffect(() => {
    setSearchText(query)
  }, [query])
  

  return (
    <div>
        <NavBar />

        <SearchResults q={ searchText } />

        <Footer />
    </div>
  )
}
