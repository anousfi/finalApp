import { Login } from "./login"
import { Signup } from "./signup"
import { useState } from "react"
export const Navbar=()=>{
    const [authentification,setAuth]=useState(false)
    const [inscription,setIn]=useState(false)
   return (
       <div>
        <div className='navbar'>
             <div className="navbar2">
             <a href="#" className='art7'>Home</a>
             <a href="#" className='art7'>Services</a>
             <a href="#" className='art7'>Contact</a>
             <a href="#" className='art7'>About</a>
             </div>
             
             <div className="navbar1">
             {authentification
             &&
             (<Login/>)}
             <button className="btn btn-warning art9" onClick={()=>setAuth(!authentification)}>S'authentifier</button>
             <button className="btn btn-warning art9" onClick={()=>setIn(!inscription)}>S'inscrire</button>
             </div>
       </div>
       {inscription
        &&
        (<Signup/>)}
       </div>
        
   )
}