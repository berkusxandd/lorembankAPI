const pool = require("../db")
const queries = require("./queries")

const getUsers = (req,res) => {
    console.log("getting users...")
    pool.query(queries.getUsers, (error,result) =>{
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const getUserById = (req,res) => {
    console.log("getting user by id")
    const id = parseInt(req.params.id)
    const query = pool.query(queries.getUserById, [id], (error,result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })

    console.log(query)

}

const getIdByEmail = (req,res) => {
    console.log("getting id by email")
    const {email} = req.body;

    pool.query(queries.getIdByEmail, [email], (error,result) => {
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

module.exports = {
    getUsers,
    getUserById,
    getIdByEmail,
}