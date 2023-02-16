import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { SearchPage } from '../pages/SearchPage'

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='home' element={ <HomePage/> } />
            <Route path='search' element={ <SearchPage/> } />

            <Route path='/*' element={ <Navigate to={ "/home" } /> } />
        </Routes>
    </>
  )
}
