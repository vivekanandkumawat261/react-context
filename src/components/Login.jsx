import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'



function Login() {
 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 to-yellow-400">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
    
    <input 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      type="text" 
      placeholder="Username" 
      className="w-full px-4 py-3 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
    />
    
    <input 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password" 
      placeholder="Password" 
      className="w-full px-4 py-3 mb-6 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
    />
    
    <button 
      onClick={handleSubmit}
      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition duration-300"
    >
      Submit
    </button>
  </div>
</div>

  )
}
 
export default Login