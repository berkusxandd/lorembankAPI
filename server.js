const express = require("express")
const app = express()
const port = 3000

const apiRoutes = require("./src/routes")

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Hello Woeld")
})

app.use("/api",apiRoutes)

app.listen(port , ()=> console.log(`app listening on port, ${port}`))