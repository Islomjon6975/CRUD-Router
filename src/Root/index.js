
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Main } from '../pages/Main'
import { navbar } from '../utils/navbar'

export const Root = () => {
  return (
    <Router>
      <div>
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
