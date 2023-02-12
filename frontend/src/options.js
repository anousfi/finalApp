export const Options=()=>{
    return (
        <div className="options">
                                    <div className="card border-danger mb-3" style={{maxWidth:'18rem'}}>
                                             <div class="card-header">
                                                Financement
                                             </div>
                                             <div class="card-body text-danger">
                                                <h5 class="card-title">Estimez votre budget</h5>
                                                <p class="card-text">
                                                    Combien emprunter pour investir dans le locatif ? Combien d'apport vous faut-il ?
                                                    Simulez votre capacité de financement pour connaître votre budget !</p>
                                                    <button type="button" className="btn btn-danger btn1" data-bs-toggle="offcanvas"
                                                     data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                                                      Tester en 5 minutes!
                                                   </button>
                                                   <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                                      <div class="offcanvas-header">
                                                         <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                                                         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                      </div>
                                                      <div class="offcanvas-body">
                                                         <p>Try scrolling the rest of the page to see this option in action.</p>
                                                      </div>
                                                   </div>
                                             </div>
                                    </div>
                                    <div className="card border-info mb-3" style={{maxWidth:'18rem'}}>
                                             <div class="card-header">
                                                Emprunt
                                             </div>
                                             <div class="card-body text-info">
                                                <h5 class="card-title">Simulez vos mensualités </h5>
                                                <p class="card-text">Vous voulez connaître le montant que vous aurez à rembourser
                                                 chaque mois pour votre prêt immobilier ? Calculez le montant de vos mensualités ! </p>
                                                 <button type="button" className="btn btn-info btn1">Evaluez vos mensualités</button>
                                             </div>
                                    </div>
                                    <div className="card border-success mb-3" style={{maxWidth:'18rem'}}>
                                             <div class="card-header">
                                                Localisation
                                             </div>
                                             <div class="card-body text-success">
                                                <h5 class="card-title">Recherche du bien</h5>
                                                <p class="card-text">
                                                   Accès instantané à des projets exclusifs vérifiés par des experts
                                                   Accompagnement par un conseiller dédié</p>
                                             </div>
                                    </div>
                                    <div className="card border-warning mb-3" style={{maxWidth:'18rem'}}>
                                             <div class="card-header">
                                                Finalisation
                                             </div>
                                             <div class="card-body text-warning">
                                                <h5 class="card-title">Acquisition</h5>
                                                <p class="card-text">
                                                   Négociation du prix auprès du vendeur
                                                   Gestion de l’administratif : rédaction de l’offre, accompagnement chez le notaire</p>
                                             </div>
                                    </div>
                </div>

    )
}