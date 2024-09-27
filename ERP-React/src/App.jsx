import './App.css'

import { useState } from 'react'
import HomePage from './pages/HomePage'
import Navigation from './components/navigation/Navigation'
import ProtectedRoute from './components/ProtectedRoute'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const[isLogged, log] = useState(true)

  return (
    <>
      <Router>
        <Navigation isLoggedIn={isLogged}/>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute isLoggedIn={isLogged}>
              <HomePage/>
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
    </>
  )
}

export default App

/*
[{
  nome: "nome",
  desc: "desc"
},
{
  nome: "nome",
  desc: "desc"
}]
obj.map(() => {

})

// usar firstChield
// context api / useZustends
*/
