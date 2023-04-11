const {Schema, model} = require("mongoose");

const linkSchema = new Schema({
     originalLink: String,
     shortLink: String,
     createdAt: {
      type: Date, expires: '1s', 
      default: Date.now 
     }
});

const linkModel = model("links", linkSchema);
module.exports = linkModel;