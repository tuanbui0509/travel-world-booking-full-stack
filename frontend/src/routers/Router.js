import Home from 'pages/Home'
import Login from 'pages/Login'
import Register from 'pages/Register'
import SearchResultList from 'pages/SearchResultList'
import TourDetail from 'pages/TourDetail'
import Tours from 'pages/Tours'
import { Navigate, Route, Routes } from 'react-router-dom'
function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/tours' element={<Tours/>} />
      <Route path='/tours/:id' element={<TourDetail/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/tours/search' element={<SearchResultList/>} />
    </Routes>
  )
}

export default Router