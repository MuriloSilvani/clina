const mongoose = require('mongoose');

const connectToDatabase = async () => {
  await mongoose.connect('mongodb+srv://admin:admin@javascrip.bnd4p.mongodb.net/clina?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true
  })
}

module.exports = connectToDatabase
