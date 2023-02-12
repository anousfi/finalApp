const mongoose=require('mongoose')

const OFFERS=mongoose.Schema({
    images:{
        type:Array,
        required:true,
        unique:true
    },
    prix:{
        type:Number,
        required:true,
    },
    prixLocation:{
        type:Number,
        required:true
    },
    quartier:{
        type:String,
        required:true
    },
    surface:{
        type:Number,
        required:true
    }
})

const OffersModel=mongoose.model('offers',OFFERS)

module.exports=OffersModel