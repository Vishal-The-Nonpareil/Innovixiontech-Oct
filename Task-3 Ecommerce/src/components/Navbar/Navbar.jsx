import React, {useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import Cart from "../Cart/Cart";
import  { useSelector } from "react-redux"; 

function Navbar() {
  const [open, setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products); 
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return ()  => {
    window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const navData  = [
    {
      id: 1,
      title: "Cakes",
      link: 3,
    },
    {
      id: 2,
      title: "Desserts",
      link: 5,
    },
    {
      id: 3,
      title: "Biscuits",
      link: 4,
    },
    {
      id: 4,
      title: "About",
      link: "/",
    },
    {
      id: 5,
      title: "Contact",
      link: "/",
    },
  ]
  return (
    <div className="navbar">
      {(screenWidth > 900) && (
        <div className="wrapper">
           <div className="left"> 
           <div className="item"> 
           <select>
           <option value="GBP">GBP</option>
           <option value="USD">USD</option>
           </select>
           </div>
           <div className="item"> 
           <Link className="link" to="/products/3">Cakes</Link> 
           </div>
           <div className="item"> 
           <Link className="link" to="/products/5">Desserts</Link> 
           </div>
           <div className="item"> 
           <Link className="link" to="/products/4">Biscuits</Link> 
           </div>
           </div>
           <div className="center"> 
           <Link className="link" to="/">CAKE STORE</Link> 
           </div>
           <div className="right"> 
           <div className="item"> 
           <Link className="link" to="/">About</Link> 
           </div>
           <div className="item"> 
           <Link className="link" to="/">Contact</Link> 
           </div>
           <div className="icons">  
            <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span> 
            </div>  
            </div>  
         </div>
         </div>  
      )}
      {(screenWidth < 901) && (
        <div className="mobielWrapper">
           <Link className="link" to="/">CAKE STORE</Link>   
            <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span> 
            </div>  
            <div className="menuIcon">
              {toggleMenu
               ? <closeIcon onClick={() => setToggleMenu(false)} />
               : <MenuIcon onClick={() => setToggleMenu(true)} />
              } 
            </div>
            {toggleMenu && (
              <div className="mobileItem">
                {navData.map((nav) => 
                 <Link className="link" to={`/products/${nav.link}`}
                 onClick={() => setToggleMenu(false)} key={nav.id}>{nav.title}</Link>  
                  )} 
               </div> 
            )}  

            {open && <Cart/>}  
            
       
         </div>  
      )}
    </div>
  )
}
export default Navbar