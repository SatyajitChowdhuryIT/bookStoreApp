import React, { useEffect, useState } from 'react'
import Cards from './Cards'

import axios from "axios"
import {Link} from 'react-router-dom'
function Course() {
  const [book,setBook]=useState([])
  useEffect(() =>{
    const getBook=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)

      }
    }
    getBook();
  },[]);
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">
                We're delighted to have you{""}<span className="text-green-500"> Here! :)</span>
            </h1>
            <p className="mt-12">
            Our course is designed to provide you with a comprehensive and engaging learning experience. With expert instructors, interactive content, and practical exercises, you'll gain valuable skills and knowledge that can be applied in real-world situations. We emphasize hands-on learning and encourage active participation to ensure that you fully grasp the material. We’re committed to supporting your educational journey and helping you achieve your goals.
            </p>
           <Link to="/">
           <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300">Back</button>
           </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                book.map((item)=>(
                  <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
