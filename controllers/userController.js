
const {readFileSync, writeFileSync} = require('fs');
const path= require('path');

/**
 * 
 * @ desc  get all user data 
 * @name  Get route /api/vi/user
 * @access public
 */

const getAlluser=(req, res)=>{
    //get user json data from json db
    const users=JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')))

    //
    res.status(200).json(users)
}


/**
 * 
 * @ desc  create a user data
 * @name  Get route /api/vi/user
 * @access public
 */

 const createUser=(req, res)=>{

    //get user json data from json db
    const users=JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    const {name, skill}=req.body;

    if(!name || !skill){
        res.status(400).json({
            message: "Name & skill is required"
        });
    } else{
        users.push({
            id: Math.floor(Math.random()* 10000000  ).toString(),
            name:name,
            skill:skill

        });

        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(201).json({
            message:"user created successfull"
        })
    }
 }
    

module.exports={
    getAlluser,
    createUser
}