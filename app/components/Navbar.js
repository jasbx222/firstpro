"use client"

import {motion} from 'framer-motion'
import { useState } from 'react';
import { MdMenuOpen } from "react-icons/md";
const Navbar = () => {
  const [show ,setShow] = useState(true)
  return (
<div className='' style={{
  backgroundColor:'#FCDE70'
}}>

  <MdMenuOpen className='text-5xl font-bold   icons' onClick={()=>setShow(show!=show)}/>
    
{
  show ?( 
    <nav 
   
   animate={{
     y:'0'
   }}
   transition={{ ease: "easeOut", duration: 1 }}
   initial={{
     y:'-100vh'
   }} 
   className={` hidden`} >
     <div className={''}>
       <a href="/" className="logo flex space-x-2">
         <img style={{'width':'40px',height:'40px'}} src="https://www.firstprocessor.net/assets/images/software/01.png"
       /> 
       <p>     الخازن دوت نت
       </p>
       </a>
     </div>
     <ul className={'navLinks'}>
       <li>
         <a href="/"  className="text-xl">الرئيسية</a>
       </li>
       <li>
         <a href="/about" className="text-xl">من نحن</a>
       </li>
       <li>
         <a href="/services" className="text-xl">الخدمات</a>
       </li>
       <li>
         <a href="/contact" className="text-xl">اتصل بنا</a>
       </li>
     </ul>
   </nav>):(<></>)
 }

 
<motion.nav 
 
    animate={{
      y:'0'
    }}
    transition={{ ease: "easeOut", duration: 1 }}
    initial={{
      y:'-100vh'
    }} 
    className={`navbar  hidden md:flex  `} >
      <div className={''}>
        <a href="/" className="logo flex space-x-2">
          <img style={{'width':'40px',height:'40px'}} src="https://www.firstprocessor.net/assets/images/software/01.png"
        /> 
        <p>     الخازن دوت نت
        </p>
        </a>
      </div>
      <ul className={'navLinks'}>
        <li>
          <a href="/"  className="text-xl">الرئيسية</a>
        </li>
        <li>
          <a href="/about" className="text-xl">من نحن</a>
        </li>
        <li>
          <a href="/services" className="text-xl">الخدمات</a>
        </li>
        <li>
          <a href="/contact" className="text-xl">اتصل بنا</a>
        </li>
      </ul>
    </motion.nav>
 

   
    </div>
  );
};

export default Navbar;
