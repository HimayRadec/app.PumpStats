import mongoose, { Schema, models } from "mongoose";


const emailListSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: true // Ensures each email is unique
   },
   addedAt: {
      type: Date,
      default: Date.now // Default value is the current date and time
   },
   userNumber: {
      type: Number,
      required: true,
      unique: true // Ensures each user has a unique number
   }
});

const EmailList = models.EmailList || mongoose.model('EmailList', emailListSchema);

export default EmailList;
