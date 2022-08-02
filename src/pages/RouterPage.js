import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Viewdetail from './detail/Viewdetail'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/detail' element={<Viewdetail/>} />
        </Routes>
    </Router>
  )
}
