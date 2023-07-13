const Pool = require("pg").Pool
const dbConfig = require("./dbConfig")

const pool = new Pool(dbConfig)

module.exports = pool