
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Home } from '../pages/Home'
import { Main } from '../pages/Main'
import { navbar } from '../utils/navbar'

export const Root = () => {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route element={<Main />}>
            {navbar.map(({id, title, path, element}) => (
              <Route key={id} exact path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
