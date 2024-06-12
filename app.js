const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { employeemodel } = require("./models/employee")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://annant2003:annant2003anna@cluster0.ncbl8ds.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let employee = new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({ "status": "success" })
})

app.post(
    "/search", (req, res) => {
        let input = req.body
        employeemodel.find(input).then(
            (data)=> {
            res.json(data)
        }
    ).catch(
            (error) => {
                res.json(error)
            }
        )
}
)

app.get("/view", (req, res) => {
    employeemodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )

})


app.listen(8083, () => {
    console.log("server started")
})

