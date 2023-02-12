import { Presentation } from './presentation';
import { Navbar } from './navbar';
import { Article } from './article';
import {Article1} from './article1';
import { Card } from './card';
import { Calque } from './calquenoir';
import { Footer } from './footer';
import './App.css';
export const Home=()=>{
    const offres=[
        {
          title:'Emprunt',
          text:"Simulez vos mensualités:Vous voulez connaître le montant que vous aurez à rembourser chaque mois pour votre prêt immobilier ? Calculez le montant de vos mensualités !",
          prom:'Evaluez vos mensualités',
          logo:<i class="fa-sharp fa-solid fa-envelope-open"></i>
        },
        {
          title:'Financement',
          text:"Combien emprunter pour investir dans le locatif ? Combien d'apport vous faut-il ?Simulez votre capacité de financement pour connaître votre budget !",
          prom:'Estimez votre budget',
          logo:<i class="fa-sharp fa-solid fa-building"></i>
        },
        {
          title:'Localisation',
          text:"Accès instantané à des projets exclusifs vérifiés par des experts,Nous proposons uniquement des projets rentables et intelligents,Accompagnement",
          prom:'Trouvez une offre',
          logo:<i class="fa-solid fa-magnifying-glass"></i>
        },
        {
          title:'Finalisation',
          text:"Négociation du prix auprès du vendeur,Gestion de l’administratif : rédaction de l’offre, accompagnement chez le notaire, gestion de la location",
          prom:'Meilleur gestionnaire',
          logo:<i class="fa-solid fa-people-arrows"></i>
        }
        ]
    return (
      <div className="App">
      <Navbar/>
      <div className="main">   
          <Presentation/> 
          <div className='underpresentation'>
              <div className='options'>
                {offres.map(element=><Card item={element}/>)}
              </div>
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