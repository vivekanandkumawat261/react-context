 
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
   
  

  return (
    <UserContextProvider>
      <div className='bg-amber-400'>
          yellow
      </div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
