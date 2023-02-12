const {Router}=require('express')

const router=Router()

const USERS=require('../models/USERS')

router.post('/signin', async (req,res)=>{
    const umail=req.body.userMail
    const pass=req.body.userPassword
    try {
        let result=await USERS.findOne({userMail:umail})
        if (result) {
            if (pass===result.password) {
                res.send(result)
            }
            else {
                res.send('Mot de passe incorrect')
            }
        } else {
            res.send(`ce nom d'utilisateur n'existe pas`)
        }
    } catch (err) {
       console.log(err.message)
    }

})
router.post(':user/budget',async (req,res)=>{
    const b=req.body.budget
    const user=req.params.user
    try {
        let result = await USERS.findOne({_id:user._id})
        if (result) {
            await USERS.updateOne(result,{budget:b})
            res.send(result)
        } else {
            res.send(err)
        }
        
    } catch (err) {
        console.log(err.message)
    }
})
router.post('/register', async (req,res)=>{
    const umail=req.body.email 
    const upas=req.body.password
    const supas=req.body.spassword
    console.log({umail,upas,supas})
    if (upas!==supas) {res.send('Veuillez confirmer le mot de passe correctement!!')} else {
    try {
        const result1=await USERS.findOne({userMail:umail})
        if (result1) {res.send('cet identifiant existe déjà!!!')} 
        else {
            const newUser=new USERS({userMail:umail,password:upas})
            const saved=await newUser.save()
            if (saved) {
                res.send('Vous avez été enregistré avec succès!!')
            } else {
                res.send(err)
            }
        }
    } catch (err) {
        res.send(err)
    }

}
})

module.exports=router