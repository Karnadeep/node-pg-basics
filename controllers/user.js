const User = require('../models/User')
const _db = require('../config/database')
const asyn = require('async')

exports.showAllUsers = async (req,res) => {
    const response = await User.findAll()
    res.json(response)
}


exports.updateUser = async (req,res) => {

    const Username = req.body.Username
    const UserID = req.body.UserID
    const response = await User.updateUser(Username , UserID)
    res.json(response)
}


exports.insertUser = async (req,res) => {

    try {


        const user = req.body.Username
        const pass = req.body.Password

        // let a = 10
        // let b = 10
        // let c = a + b

        // println("The result of a = %d, b = %d sum is %d", a, b , c)

        // "%d"
        // "(:jksdfhskdjfh)"


        const q =  `INSERT INTO public."User"(
            "Username", "Password")
            VALUES (
                (:Username),
                (:Password)
                );`


        
        const res_d = await _db.query(q, {
            replacements : {
                Username : user,
                Password : pass
                //jksdfhskdjfh
            }
        })
    
        if(res_d[1] === 1){
            res.json({Status : true , Message : 'Inserted data successfully'})
        }else {
            res.json({Status : false , Message : 'No Authors found'})
        }
    
        
    } catch (error) {
        res.json({Status : false , Message : error.message})
    }

    
    

    
}