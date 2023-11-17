import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Index from './component/user/Index.jsx'
import Create from './component/user/Create.jsx'
import Loader from './component/Loader.jsx'
import Detailes from './component/Detailes.jsx'
import Edit from './component/user/Edit.jsx'
export default function App() {
  return (
  <Routes>
    <Route path='/'  element={<Index />}/>
    <Route path='/user/index'  element={<Index />} />
    <Route path='/user/cteate' element={<Create/>} />
    <Route  path='*' element={<h2>bage not foun</h2>}/>
    <Route path='/user/:id'  element={<Detailes/>}/>
    <Route path='/loader'  element={<Loader />} />
    <Route path='/user/edit/:id'  element={<Edit/>}/>
  </Routes>
  )
}
