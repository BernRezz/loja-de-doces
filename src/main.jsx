import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Vitrine from './pages/Vitrine/Vitrine.jsx'
import Detalhes from './pages/Vitrine/Detalhes.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'

import NotFound from '../error/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='vitrine' element={<Vitrine />} >
          <Route path=':id' element={<Detalhes />} />
        </Route>

        <Route path='sobre-o-projeto' element={<Sobre />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
