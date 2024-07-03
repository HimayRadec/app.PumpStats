import mongoose, { Schema } from "mongoose";

const dietSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   date: {
      type: Date,
      required: true
   },
   macros: {
      calories: {
         type: Number,
         required: true
      },
      protein: {
         type: Number,
         required: true
      },
      carbohydrates: {
         type: Number,
         required: true
      },
      fats: {
         type: Number,
         required: true
      }
   },
   micros: {
      vitaminC: {
         type: Number,
         required: true
      },
      iron: {
         type: Number,
         required: true
      },
      calcium: {
         type: Number,
         required: true
      }
      // Add other micronutrients as needed
   }
}, { timestamps: true });

const Diet = mongoose.model('Diet', dietSchema);

module.exports = Diet;
