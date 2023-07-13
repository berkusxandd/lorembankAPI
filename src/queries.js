const getUsers = "SELECT * FROM people"
const getUserById = "SELECT * FROM people WHERE id= $1"
const getIdByEmail = "SELECT id FROM people WHERE email=$1"
module.exports = {
    getUsers,
    getUserById,
    getIdByEmail,
}