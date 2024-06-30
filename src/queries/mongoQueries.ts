import { User } from "@/models/UserModel"
import { connectToMongoDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";


export async function getUserFromDb(email: string, password: string) {
   await connectToMongoDB();

   const user = await User.findOne({ email: email });

   if (!user) {
      throw new Error('[Query]: User not found');
   }

   const passwordMatch = await bcrypt.compare(password, user.password);
   if (!passwordMatch) {
      throw new Error('[Query]: Password does not match');
   }

   return user;

}