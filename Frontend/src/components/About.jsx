import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl text-green-500 font-bold">
                WELCOME TO BOOKSTORE
            </h1>
            <p className="mt-12">
            Welcome to [BOOKSTORE APP], your go-to destination for a diverse selection of books, from timeless classics to the latest bestsellers. Our app offers an intuitive and seamless browsing experience, personalized recommendations, and exclusive deals to help you find your next great read. Dive into the world of literature and discover stories that inspire, educate, and entertain. Happy reading!
            </p>
           <Link to="/">
           <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300">Back</button>
           </Link>
        </div>
        
    </div>
    </>
  )
}

export default About
