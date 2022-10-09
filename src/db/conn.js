const mongoose = require("mongoose");

const mongoPath ='mongodb+srv://weather123:weather321@cluster0.pbuyglb.mongodb.net/?retryWrites=true&w=majority'

module.exports= async ()=>{
    await mongoose.connect(mongoPath ,{
    useNewUrlParser: true,
    // useUnifiedTopology: true,
        // useCreateIndex: true,
    // useFindAndModify:false

    }).then(()=>{
        console.log('Successfull')
    })
    return mongoose
}