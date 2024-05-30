import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiverId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message:{
	type: String,
	required: true,
  }
  //Responsible for letting us know what time a message was sent
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;