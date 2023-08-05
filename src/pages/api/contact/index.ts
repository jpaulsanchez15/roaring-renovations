import { EmailTemplate } from "@/components/emailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

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
  //   if (req.method !== "POST") {
  //     return res.status(405).json({ error: "Method not allowed" });
  //   }
  // TODO: Add some sort of rate limiter to this.
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // From self
      to: "jpsanchez1122@gmail.com", // Self
      reply_to: `${req.body.email}`,
      subject: "New Contact Request!",
      react: EmailTemplate({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
      }),
      text: `${req.body.message}`, // required for some reason? Not really srue why.
    });

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default sendEmail;
