interface EmailTemplateProps {
  name: string;
  message: string;
  phone: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  phone,
  email,
}) => (
  <div className="flex flex-col items-center justify-center m-auto border-2 min-h-screen border-black">
    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Inquiry from: {name}
    </h1>
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>Phone: {phone}</li>
      <li>Email: {email}</li>
    </ul>
    <p className="leading-7 [&:not(:first-child)]:mt-6">Message: {message}</p>
  </div>
);
