import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
   const {user} = useContext(UserContext)

   if (!user) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700 text-lg">
      Please login to continue.
    </div>
  );
}

return (
  <div className="min-h-screen flex items-center justify-center bg-green-100">
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-2">Welcome 👋</h2>
      <p className="text-xl text-gray-800">Hello, <span className="font-semibold">{user.username}</span>!</p>
    </div>
  </div>
);

}

export default Profile
