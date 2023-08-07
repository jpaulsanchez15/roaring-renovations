import { EmailTemplate } from "@/components/emailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailReq extends NextApiRequest {
  body: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
}

const sendEmail = async (req: EmailReq, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  // TODO: Add some sort of rate limiter to this.
  try {
    const { name, phone, email, message } = req.body;
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // From self
      to: "jpsanchez1122@gmail.com", // Self
      reply_to: `${email}`,
      subject: `New Contact Request: ${name}`,
      react: EmailTemplate({
        name: name,
        phone: phone,
        email: email,
        message: message,
      }),
      // Required for some reason? Not really sure why.
      text: `${message}`,
    });

    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default sendEmail;
