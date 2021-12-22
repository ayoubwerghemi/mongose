const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema(
{
    name:{
    type: String,
    required : true,
},

age:{
    type: Number,
},

favoriteFoods:{
    type: [String],

}  
}
);

const Person=mongoose.model('contact',userSchema)
module.exports = Person;