import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: false,
      unique: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   profile: {
      age: {
         type: Number,
         required: false
      },
      gender: {
         type: String,
         required: false
      },
      height: {
         type: Number,
         required: false
      },
      weight: {
         type: Number,
         required: false
      }
   },
   diet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Diet'
   },
   workouts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workout'
   }]
}, { timestamps: true });

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);
