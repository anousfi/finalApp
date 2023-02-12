import im1 from './m1.jpg';
import im2 from './t1.jpg';
import im3 from './ch1.jpg';
import im4 from './t2.jpg';
export const Presentation=()=>{
    return (
        <div className="presentation">
                        <p className="text">
                            La plateforme idéale pour localiser,acquérir et gérer votre investissement locatif au Maroc!
                        </p>
                        <div className=" base">
                            <img src={im1} className="pr" alt=''/>
                            <img src={im2} className="pr" alt=''/>
                            <img src={im3} className="pr" alt=''/>
                            <img src={im4} className="pr" alt=''/>
                        </div>
                        <div id="title1">
                            <p className="head">
                                moreal-estate
                            </p>
                            <p className="titles">
                                ©
                            </p>
                        </div>
                </div>
    )
}