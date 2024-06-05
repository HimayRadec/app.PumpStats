import { connectToMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

import User from "@/models/User";

export const POST = async (request: Request) => {
   try {
      const { name, email, password } = await request.json();

      // Check if all fields are filled
      if (!name || !email || !password) return NextResponse.json({ message: "Please fill in all fields." }, { status: 400 });

      await connectToMongoDB();

      // Check if user already exists
      const userAlreadyExists = await User.findOne({ email });
      if (userAlreadyExists) return NextResponse.json({ message: "User already exists." }, { status: 409 });

      // Create new user
      const newUser = new User({ name, email, password });
      await newUser.save();

      return NextResponse.json({ message: "User registered." }, { status: 201 });
   }
   catch (error) {
      return NextResponse.json(
         { message: "Server error." },
         { status: 500 }
      );
   }
}
