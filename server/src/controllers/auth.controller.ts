import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import {
  generateVerificationToken,
  verificationTokenExpiresAt,
} from "../utils";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
import { sendVerificationEmail } from "../mailtrap/emails";

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required!",
      });
    }

    // Check if user already exists
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Generate verification token
    const verificationToken = generateVerificationToken();
    const verificationExpires = verificationTokenExpiresAt();

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        verificationToken,
        verificationTokenExpiresAt: verificationExpires,
      },
    });

    // Generate JWT and set it in a cookie
    generateTokenAndSetCookie(res, user.userId);

    sendVerificationEmail(user.email, verificationToken);

    // Respond with the created user (without sensitive fields)
    res.status(201).json({
      success: true,
      message: "User created!",
      user: {
        id: user.userId,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
    });
  } catch (error: any) {
    // Handle errors
    res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  // const { email, password } = req.body;
  // try {
  //   if (!email || !password) {
  //     return res
  //       .status(400)
  //       .json({ success: false, message: "Email and password are required!" });
  //   }
  //   const user = await prisma.user.findUnique({
  //     where: { email },
  //   });
  //   if (!user) {
  //     return res
  //       .status(400)
  //       .json({ success: false, message: "Invalid email or password!" });
  //   }
  //   const isPasswordValid = await bcryptjs.compare(
  //     password,
  //     user.hashedPassword
  //   );
  //   if (!isPasswordValid) {
  //     return res
  //       .status(400)
  //       .json({ success: false, message: "Invalid email or password!" });
  //   }
  //   const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET!, {
  //     expiresIn: "1h",
  //   });
  //   res.status(200).json({
  //     success: true,
  //     token,
  //     user: { id: user.userId, email: user.email, name: user.name },
  //   });
  // } catch (error: any) {
  //   res.status(500).json({ success: false, message: error.message });
  // }
};

export const logout = async (req: Request, res: Response) => {
  // try {
  //   // Logout can be as simple as clearing the token on the client-side.
  //   // If you're using a blacklist, you might add the token to the blacklist here.
  //   res
  //     .status(200)
  //     .json({ success: true, message: "Logged out successfully!" });
  // } catch (error: any) {
  //   res.status(500).json({ success: false, message: error.message });
  // }
};
