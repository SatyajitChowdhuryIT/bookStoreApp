import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-md">
       
        <h2 className="font-bold text-lg">Contact Us</h2>
        <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input type="text"
            placeholder="Enter your name" className="w-80 px-3 py-1 border rounded outline-none"
            />
        </div>
        {/*email*/}
        <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input type="email"
            placeholder="Email address" className="w-80 px-3 py-1 border rounded outline-none"
            />
        </div>
        {/*Message*/}
        <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <input type="text"
            placeholder="Type your message" className="w-80 px-3 py-8 border rounded outline-none"
            />
        </div>
        <div>
            {/*Button*/}
            <div className="mt-4">
                <button className="btn bg-blue-500 text-white rounded px-3 py-1">Submit</button>

            </div>
            
            <Link to="/">
           <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300">Back</button>
           </Link>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default Contact
