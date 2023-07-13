const {Router} = require("express")
const controller = require("./controller");

const expressRouter = Router()

expressRouter.get("/all_users" , controller.getUsers)
expressRouter.get("/user/:id" , controller.getUserById)
expressRouter.get("/getUserByEmail" , controller.getIdByEmail)

module.exports = expressRouter