import { User } from "@/models/UserModel"
import { connectToMongoDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function getUserFromDb(email: string, password: string) {
   await connectToMongoDB();

   const user = await User.findOne({ email: email });

   if (!user) {
      console.log('[Query]: User not found');
      return null;
   }

   const passwordMatch = await bcrypt.compare(password, user.password);
   if (!passwordMatch) {
      console.log('[Query]: Password does not match');
      return null;
   }

   return user;

}