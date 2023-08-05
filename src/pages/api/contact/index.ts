import { EmailTemplate } from "@/components/emailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailReq extends NextApiRequest {
  body: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
}

const sendEmail = async (req: EmailReq, res: NextApiResponse) => {
  //   if (req.method !== "POST") {
  //     return res.status(405).json({ error: "Method not allowed" });
  //   }
  // TODO: Add some sort of rate limiter to this.
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jpsanchez1122@gmail.com",
      reply_to: "jsanchez@forwardscience.com",
      subject: "New Contact Request!",
      react: EmailTemplate({ firstName: "John", message: req.body.message }),
      text: "Hello world",
    });

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default sendEmail;
