import React from 'react'
import one from "../assets/categories/one.jpg"
import two from "../assets/categories/two.jpg"
import three from "../assets/categories/three.jpg"
const Categories = () => {
  return (
    <div className='img-category'>
        <div>
            <img src={one} />
        </div>
        <div>
            <img src={two} />
        </div>
        <div>
            <img src={three} />
        </div>
        <div>
            <img src={one} />
        </div>
        <div>
            <img src={two} />
        </div>
        <div>
            <img src={three} />
        </div>
        <div>
            <img src={one} />
        </div>
        <div>
            <img src={two} />
        </div>
        <div>
            <img src={three} />
        </div>
    </div>
  )
}

export default Categories