const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/utn",{useNewUrlParser: true}, err=>{
    if(err) throw err
    else console.log("Coneccion con mongo->utn establecida")
})


module.exports = mongoose