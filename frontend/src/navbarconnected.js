import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { ConnectUser } from './redux/reducers/redUser';
const Navbar2=()=>{
    const navigate=useNavigate()

    const signOut=()=>{
       localStorage.clear()
       navigate('/')
    }
    const test=useSelector(state=>state.Users.status)


    return (
        <div className='navbar'>
             <div className="navbar2">
             <a href="#" className='art7'>Home</a>
             <a href="#" className='art7'>Contact</a>
             <a href="#" className='art7'>About</a>
             <button className="btn btn-warning art9" onClick={()=>navigate('/services')}>Services</button>
             </div>
             ({test=='loading....' &&
             <div>
                <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40">via GIPHY</a></p>
             </div>})
             ({test=='Connected with success!!' && 
             <div className="navbar1" style={{animation:"slideInFromRight 1s"}}>
             <div className='upleft'>
             <p className='art6'>connecté en tant que <u><b>{JSON.parse(window.localStorage.getItem('user')).userMail.slice(0,JSON.parse(window.localStorage.getItem('user')).userMail.indexOf('@'))}</b></u></p>
             </div>
             <button className="btn btn-warning art6" onClick={()=>signOut()}>Se déconnecter</button>
             </div>})
             {console.log(test)}
             
             </div>
       
    )
}
export default Navbar2;