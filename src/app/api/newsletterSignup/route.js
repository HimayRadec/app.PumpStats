import { connectToMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import EmailList from "@/models/EmailList";

export async function POST(request) {
   try {
      const { email } = await request.json();
      await connectToMongoDB();
      const existingEmail = await EmailList.findOne({ email });

      if (existingEmail) {
         return NextResponse.json({ message: "User already exists." }, { status: 409 });
      }
      else {
         // Gets What User Signup Number The User Is
         const count = await EmailList.countDocuments();
         await EmailList.create({ email, userNumber: count + 1 });

         return NextResponse.json({ message: "User Added To Email List." }, { status: 201 });

      }

   }
   catch (error) {
      return NextResponse.json(
         { message: "[ROUTE]: An error occurred while addded the user." },
         { status: 500 },
         { error: error }
      );
   }
}
