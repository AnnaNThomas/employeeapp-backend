const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "name":{type:String,require:true},
        "employeeid":{type:String,require:true},
        "dept":{type:String,require:true},
        "phoneno":{type:String,require:true}
    }
)

let employeemodel=mongoose.model("employee",Schema);
module.exports={employeemodel}