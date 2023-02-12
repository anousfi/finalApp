import Navbar2 from './navbarconnected'
import { Form1 } from './form1'
import { Presentation } from './presentation';
import { Footer } from './footer';
import './App.css';
export const Services=()=>{
    return (
        <div className='App'>
            <Navbar2/>
            <div className="main">   
                <Presentation/>
                <div className='form'>
                  <Form1/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}