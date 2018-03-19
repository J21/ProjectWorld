const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  author: {type: String},
  description: {type: String},
  publishedAt: {type: String},
  source: {type: String},
  title: {type: String},
  url: { type: String, required: true },
  urlToImage:{type: Object},
}, { _id: false });



const Article = mongoose.model("Article", articleSchema);

module.exports = articles;