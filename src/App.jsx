import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './global.css'
import { Login } from './Pages/Login'
import { UserStorageLogin } from './Context/useContextLogin'

function App() {
  return (
    
    <BrowserRouter>
      <UserStorageLogin>
        <Routes>
          <Route path='/' element={<Login />}/>
        </Routes>
      </UserStorageLogin>
    </BrowserRouter>
  )
}

export default App
