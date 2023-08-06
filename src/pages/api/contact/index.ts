import { EmailTemplate } from "@/components/emailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(1, "60 s"),
});

export const config = {
  runtime: "edge",
};

type ReqBody = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const sendEmail = async (req: NextRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const body: ReqBody = await req.json();

    // const ip = req.ip ?? "127.0.0.1";
    // const { limit, reset, remaining } = await ratelimit.limit(ip);
    const { name, phone, email, message } = body;

    await resend.emails.send({
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

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      //   headers: {
      //     "X-RateLimit-Limit": limit.toString(),
      //     "X-RateLimit-Remaining": remaining.toString(),
      //     "X-RateLimit-Reset": reset.toString(),
      //   },
    });
  } catch (error) {
    // return res.status(500).json({ error });
    console.error(error);
  }
};

export default sendEmail;
