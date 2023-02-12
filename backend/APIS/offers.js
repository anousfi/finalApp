const {Router}=require('express')

const router=Router()

const OFFERS=require('../models/OFFERS')


router.get('/getoffers',async (req,res)=>{
    try {
        let result=await OFFERS.find()
        if (result) {
            res.send(result)
        } else {
            res.send('Aucune offre disponible!')
        }
    } catch (err) {
        console.log(err.message)
    }
})

module.exports=router 