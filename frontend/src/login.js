import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { ConnectUser } from "./redux/reducers/redUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Login=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [userLog,setUserLog]=useState({
        userMail:"",
        userPassword:""
    })

    const verify=(obj)=>{
        typeof(dispatch(ConnectUser(obj)))==='object'?
        navigate('/main')
         : 
        navigate ('/')
    }
    
    return (
            <div className="login">
            <input type='text' style={{size:'5px'}} placeholder="Votre email :" onChange={(e)=>setUserLog({...userLog,userMail:e.target.value})}/>
            <input type='password' style={{size:'5px'}} placeholder="Votre mot de passe :" onChange={(e)=>setUserLog({...userLog,userPassword:e.target.value})}/>
            <button type="button"  className="btn btn-warning art9" onClick={
                ()=>verify(userLog)
            }>GO</button>
            </div>
    )
}