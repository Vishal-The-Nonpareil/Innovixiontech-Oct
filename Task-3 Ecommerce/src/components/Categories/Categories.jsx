import React from 'react'
import "./Categories.css"
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
       <div className='col col-1'>
       <div className='row'>
       <div className='col'>
       <div className='row'>
       <img src="https://plus.unsplash.com/premium_photo-1692912808109-e02afcf3999d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
       <button>
       <Link to="/products/9" className='link'>Pasteries</Link>
       </button>
      </div>
      </div>
      <div className='col'> 
      <div className='row'>
      <img src="https://plus.unsplash.com/premium_photo-1692912808093-92fa140d4dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
      <button>
       <Link to="/products/7" className='link'>Smoothies</Link>
       </button>
      </div>
      </div>
      </div>
      <div className='row'>
      <img src="https://images.unsplash.com/photo-1675411790227-387038b83516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
      <button>
       <Link to="/products/8" className='link'>Tarts</Link>
       </button>
      </div>
      </div>
      <div className='col'>
      <div className='row'>
      <img src="https://images.unsplash.com/photo-1686400095883-e95c9cfaf464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
      <button>
       <Link to="/products/5" className='link'>Desserts</Link>
       </button>
        </div>
      </div>
      <div className='col'>
      <div className='row'>
      <img src="https://images.unsplash.com/photo-1682377634519-96afd22f3b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
      <button>
       <Link to="/products/3" className='link'>Cakes</Link>
       </button>
        </div>
      <div className='row'>
      <img src="https://images.unsplash.com/photo-1625806867194-92473e59ded4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt="" />
      <button>
       <Link to="/products/4" className='link'>Biscuits</Link>
       </button>
        </div>
      </div>
    </div>
  )
}

export default Categories


