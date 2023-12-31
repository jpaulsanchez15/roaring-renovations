import { EmailTemplate } from "@/components/emailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

interface EmailReq extends NextApiRequest {
  body: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
}

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: EmailReq, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { name, phone, email, message } = req.body;
    const data = await resend.emails.send({
      from: "roaring-renovations@jpswebdesign.dev",
      to: "Roaring.Renovations7@gmail.com",
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
