// This will hold details about the Post schema 
const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  body: String,
  userName: String,
  createdAt: String,
  
  comments: [
    {
      body: String,
      userName: String,
      createdAt: String
    }
  ],
  
  likes: [
    {
      userName: String,
      createdAt: String,
    }
  ],
  
  user: {
    /*this allows us to later use Mongoose to automaticly 
      populate this user felid using some Mongoose methods*/
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);