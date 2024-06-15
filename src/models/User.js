import mongoose, { Schema, models } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const userSchema = new Schema(
   {
      userId: {
         type: String,
         unique: true,
         default: uuidv4, // Use UUID v4 to generate a unique ID
      },
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

export const getUserFromDb = async (email, password) => {
   try {
      const user = await User.findOne({ email });
      if (!user) {
         return null; // User not found
      }

      const isMatch = user.password === password;
      if (!isMatch) {
         return null; // Password does not match
      }

      return user; // User authenticated
   } catch (error) {
      console.error("Error fetching user from database:", error);
      return null; // Error occurred
   }
};