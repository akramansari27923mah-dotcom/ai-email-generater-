import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./features/pages/Login"
import Sign from "./features/pages/Sign"
import Home from './Home'

const App = () => {

  const token = localStorage.getItem('token')

  return (
    <div className=''>
      <Routes>
        <Route
          path="/"
          element=
          {
            token ?
              <Home /> :
              <Navigate to={'/login'}
              />
          }
        />

        <Route
          path="/login"
          element=
          {
            token ?
              <Navigate to={'/'} /> :
              <Login
              />
          }
        />

        <Route
          path="/sign"
          element=
          {
            token ?
              <Navigate to={'/login'} /> :
              <Sign />
          }
        />

        <Route
          path="*"
          element={'Not | Found'}
        />
      </Routes>
    </div>
  )
}

export default App