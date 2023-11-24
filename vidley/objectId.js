// _id: 655f3f3371be7b89b7220ef8

// 12 bytes
// 4 bytes : timestamp
// 3 bytes: machine identifier
//2 bytes : process identifier
//3 bytes: counter


// 1 byte = 8 bits
  //_id is genarated by mongodb driver
   // driver generate  almost unique identifier

const  mongoose = require("mongoose");
const id = new mongoose.Types.ObjectId;
console.log(id.getTimestamp());

const isValid = mongoose.Types.ObjectId.isValid('1234'); //false
console.log(isValid);