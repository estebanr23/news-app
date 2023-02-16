import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
// import { NewsApp } from './NewsApp'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <NewsApp /> */}
      <AppRoutes/>
    </React.StrictMode>
  </BrowserRouter>
)
