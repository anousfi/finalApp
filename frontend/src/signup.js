import { useState } from "react";
import axios from "axios";

export const Signup=()=>{
    const [userData,setUserData]=useState({
        email:"",
        password:"",
        spassword:""
    })
    return (
        <div className='signup'>
            <div className="signup2">
            <div>
               <p className="art6">Votre e-mail:</p>
               <input type='text' placeholder="Votre email :" onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
            </div>
            <div>
               <p></p>
               <p className="art6">Votre mot de passe:</p>
               <input type='password' placeholder="Votre mot de passe :" onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
            </div>
            <div>
                <p></p>
               <p className="art6">Confirmez votre mot de passe:</p>
               <input type='password' placeholder="confirmer le mot de passe :" onChange={(e)=>setUserData({...userData,spassword:e.target.value})}/>
               <p></p>
               <p></p>
               <button type="button" className="btn btn-warning art6" onClick={
                ()=>axios.
                post('http://localhost:9000/users/register',userData)
                .then(res=>{
                    console.log(res.data)
                    return res.data
                })
                .catch(err=>{
                    return err.data.message
                })
               }>Valider</button>
            </div>
            </div>
        </div>
    )
}