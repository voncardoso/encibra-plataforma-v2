import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './global.css'
import { Login } from './Pages/Login'
import { UserStorageLogin } from './Context/useContextLogin'
import { DefaultLayout } from './components/DefaultLayout'
import { Dashboard } from './Pages/Rodovia/Dashboard'
import { PrivateRoutes } from './components/PrivateRoutes'

function App() {
  return (
    
    <BrowserRouter>
      <UserStorageLogin>
        <Routes>
          <Route path='/' element={<Login />}/>

          <Route path="/rodovias" element={<DefaultLayout />}>
            <Route path='/rodovias' element={
              <PrivateRoutes>
                <Dashboard/>
              </PrivateRoutes>
            }/>
          </Route>
        </Routes>
      </UserStorageLogin>
    </BrowserRouter>
  )
}

export default App
