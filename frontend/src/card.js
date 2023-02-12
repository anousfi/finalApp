export const Card=(props)=>{
    return (
        <div className='card'>
           <div className='announce1'>
             <div className="announce2">
                {props.item.logo}
                <h4>
                   {props.item.title}
                </h4>
             </div>
           </div>
           <p className='art5'>
             {props.item.text}
            </p>
           <button type="button" className="btn btn-warning">
             {props.item.prom}
           </button>
        </div>
    )
}