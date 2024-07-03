import mongoose, { Schema } from "mongoose";

const setSchema = new mongoose.Schema({
   setNumber: {
      type: Number,
      required: true
   },
   reps: {
      type: Number,
      required: true
   },
   weight: {
      type: Number,
      required: true
   }
});

const exerciseSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   sets: [setSchema]
});

const workoutSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   date: {
      type: Date,
      required: true
   },
   exercises: [exerciseSchema]
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
