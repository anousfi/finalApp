import Navbar2 from './navbarconnected'
import { Presentation } from './presentation';
import { Article } from './article';
import {Article1} from './article1';
import { Card } from './card';
import { Calque } from './calquenoir';
import { Footer } from './footer';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { ConnectUser } from './redux/reducers/redUser';
import './App.css';
const Main =()=>{
   return (
    <div className="App">
            <Navbar2/>
            <div className="main">   
                <Presentation/> 
                <div className='underpresentation'>
                    <div>
                       <Article1/>
                       <Article/>   
                    </div>  
                </div>
                <Calque/>
                <Footer/>
            </div>
        </div>
   )
}
export default Main;