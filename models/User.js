const _db = require('../config/database')

class User{

    static async findAll(){

        let response = {}
        try {
            let q1 = `SELECT "Username", "UserID" FROM "User"`
            const res_d = await _db.query(q1)
        
            if(res_d[0].length != 0){
                response = {Status : true , Message : '', Users : res_d[0]}
            }else {
                response = {Status : false , Message : 'No Users found'}
            }    
        } catch (error) {
            response = {Status : false , Message : error.message}            
        }
        return response
    }


    static async updateUser(Username, UserID){

        let response = {}
        try {
            let q1 = `UPDATE public."User"
            SET "Username"= (:Username)
            WHERE "UserID"= (:UserID);`
            const res_d = await _db.query(q1,{
                replacements : {
                    Username, 
                    UserID
                }
            })
        
            if(res_d[0].length != 0){
                response = {Status : true , Message : '', Users : res_d[0]}
            }else {
                response = {Status : false , Message : 'No Users found'}
            }    
        } catch (error) {
            
            response = {Status : false , Message : error.message}            
        }
        return response
    }

}


module.exports = User