import React from 'react'
import   "./Footer.css"

function Footer() {
  return (
    <div className='footer'><div className="top">
      <div className="item">
      <h1>Categries</h1>
      <span>Cakes</span>
      <span>Biscuits</span>
      <span>Desserts</span>
      <span>Pattiseries</span>
      <span>Smoothies</span>
      <span>Tarts</span>
      </div>
      <div className="item">
      <h1>Links</h1>
      <span>FAQ</span>
      <span>Pages</span>
      <span>Shops</span>
      <span>Marketplace</span>
      <span>Cookies</span>
      <span>Policies</span>
      </div>
      <div className="item">
      <h1>About</h1>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis tempora fugit distinctio, nesciunt neque cumque ea obcaecati voluptatum explicabo quisquam esse corporis ex minus accusamus cupiditate veritatis optio excepturi.</span>
      </div>
      <div className="item">
      <h1>Contact</h1>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis tempora fugit distinctio, nesciunt neque cumque ea obcaecati voluptatum explicabo quisquam esse corporis ex minus accusamus cupiditate veritatis optio excepturi.</span>
      </div>
      </div>

      <div className="bottom">
      <div className="left">
         <span className="logo">Cake Store</span>
         <span className="copyright">
          Copyight 2023. All Rights Reserved
         </span>
         </div>
         <div className="right"> 
         <img src="payment.png" alt="" />
          </div>

      </div>
      
      </div>
  )
}

export default Footer