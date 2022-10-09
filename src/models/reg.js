const mongoose = require("mongoose");
console.log("reg is connected")

const yarrSchema = new mongoose.Schema({

    fullname: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
        // unique: true
    },
    extra:{
        type: String

    }
  

})


// now we need to createthe collections

const Register =new mongoose.model("done",yarrSchema);

module.exports=Register;