const mongoose = require('../db/conn')
const {schema} = mongoose
const User = mongoose.model(
    'Pet',
    new Schema({
       name:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true

        },
        weight:{
            type: Number,
            required: true
        },
         color :{
            type: Number,
            required: true
        },
        imagens: {
            type: Array,
            required: true
        },
        available:{
            type: Boolean
        },
        user: Object,
        adopter: Object
        
        
    }, {timestamps: true}, 
 ),
)
module.exports = User