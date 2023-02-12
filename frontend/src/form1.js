import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { displayOffers } from "./redux/reducers/redOffers"
import axios from "axios"

export const Form1=()=>{
const user=localStorage.getItem('user')

const [offers,setOffers]=useState([])

useEffect(()=>{
    axios.
    get('http://localhost:9000/offers/getoffers')
    .then(res=>setOffers(res.data))
    .catch(err=>console.log(err))
},[])

     const [infosUser,setInfos]=useState({
        offre:0,
        tauxIG:0,
        duree:0,
        apport:0
})
    const calculMensualites=(p,j,n)=>{
    const numb =p*(j/(1-Math.pow(1+j,-n)))
    return Math.round(numb)
}
    const [st,setSt]=useState (false)
    const [sy,setSy]=useState(false)

    const showOffers=()=>{
        setSy(!sy)
        localStorage.setItem("budget",infosUser.offre)
    }


    return (
        <div>
            <p className="art3">
                Le simulateur fournit à titre indicatif une estimation de vos mensualités de pret bancaire
                 , le taux d'interet dépendant de paramètres telles que
                votre espérance de vie ,
                votre état de santé , votre patrimoine ...La banque accorderait potentiellemnt un emprunt après
                examen de votre situation financière , si le montant de vos mensualités de pret s'élevent à hauteur 
                d'environ un tier de vos revenus mensuels , il y'a de fortes chances que votre dossier soit rejeté ,c'est
                pourquoi nous recommandons vivement à nos clients de se focaliser sur la gamme d'offres que nous proposons 
                qui leur permettrait de tirer davantage de revenus locatifs avec des prix à l'achat convenables.
            </p>
            <div className="form">
            <div className="form1">
            <div className="form2">
            <p className="art8">Le montant de l'offre:</p>
            <input type='text' style={{width:"80px",height:"18px"}} placeholder="Estimation de l'offre" onChange={(e)=>setInfos({...infosUser,offre:e.target.value})}/>
            </div>
            <div className="form2">
            <p className="art8">Estimation du taux d'interet:</p>
            <input type='text' style={{width:"80px",height:"18px"}} placeholder="taux d'interet" onChange={(e)=>setInfos({...infosUser,tauxIG:e.target.value})}/>
            </div>
            <div className="form2">
            <p className="art8">Durée en année de l'emprunt:</p>
            <input type='text' style={{width:"80px",height:"18px"}} placeholder="Durée de crédit (en années)" onChange={(e)=>setInfos({...infosUser,duree:e.target.value})}/>
            </div>
            <div className="form2">
            <p className="art8">Votre apport personnel:</p>
            <input type='text' style={{width:"80px",height:"18px"}} placeholder="Votre apport" onChange={(e)=>setInfos({...infosUser,apport:e.target.value})}/>
            </div>
            <button className="btn btn-warning art9" style={{width:"140px"}}
            onClick={()=>setSt(!st)}>
                Evaluez Maintenant!
            </button>
            </div>
            </div>
            <div className="form">
            {
            st&&
            (<p className="art3">
                Vos mensualités seront de :{calculMensualites(infosUser.offre-infosUser.apport,infosUser.tauxIG/1200,infosUser.duree*12)} $
            </p>)
            }
            </div>
            <div className="form">
            {console.log(calculMensualites(infosUser.offre-infosUser.apport,infosUser.tauxIG/1200,infosUser.duree*12))}
            <button className="btn btn-warning art9" style={{width:"120px"}}
            onClick={()=>()=>showOffers()}
            >
                Voir mes offres
            </button>
            {
            sy&&
            (<div>
                {offers.map(item=><div>
                    <img src={item.images[0]}/>
                    <p>{item.quartier}</p>
                    </div>)}
            </div>)
            }
            </div>

        </div>
    )
            }
