const express=require('express')

const cors=require('cors')

const app=express()

app.use(cors())

app.use(express.json())

const UserRouter=require('./APIS/users')

const OffersRouter=require('./APIS/offers')

const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/project',()=>{console.log('connected to project database successfully!!')}) 

app.use('/users',UserRouter)

app.use('/offers',OffersRouter)

app.listen(9000,()=>console.log("server 9000 is running"))