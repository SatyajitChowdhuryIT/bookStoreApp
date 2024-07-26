import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
    <>
    <div className="flex h-screen items-center justify-center">
    <div  className="w-[600px]">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      < Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
        </Link>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>
    <div  className="mt-4 space-y-2">
      <span>Name</span>
      <br />
      <input type="text" placeholder="Enter your Fullname" className="w-80 px-3 py-1 border rounded-md outline-none"/>
    </div>
    {/* Email */}
    <div  className="mt-4 space-y-2">
      <span>Email</span>
      <br />
      <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"/>
    </div>
    {/* Password */}
    <div  className="mt-4 space-y-2">
      <span>Password</span>
      <br />
      <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"/>
    </div>
    {/* Button */}
    <div className="flex justify-around mt-4">
      <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">Signup</button>
      <p>Have account?{" "}
         <Link to="/" className="underline text-blue-500 cursor-pointer" 
         onClick={() => document.getElementById("my-modal-3").showModal()
         }
         >
        Login
        </Link>{" "}
        <Login />
        </p> 
        
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
