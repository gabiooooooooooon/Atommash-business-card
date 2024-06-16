import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Production from './Production'
import History from './History'
import Contacts from './Contacts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <BrowserRouter>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/production' element={<Production />} />
          <Route path='/history' element={<History />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>

      {/* <Header OpenSidebar={OpenSidebar}/> */}
      
    </div>
  )
}

export default App

