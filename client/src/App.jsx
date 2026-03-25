import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {

  const issellerPath = useLocation().pathname.includes("seller");
  return (
    <div>
      {issellerPath ? null : <Navbar/>}
      <div className={`${issellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
