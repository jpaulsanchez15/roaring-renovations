import { ContactForm } from "@/components/contactForm";
import Head from "next/head";

const Contact = () => {
  return (
    <main>
      <Head>
        <title>Roaring Renovations | Contact Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Roaring Renovations LLC is a family owned construction company specializing in bathroom & kitchen remodels, based in Fort Worth, Texas"
        />
      </Head>
      <section id="title">
        <h1 className="mx-auto mt-24 flex justify-center text-[min(60px,120vh)] font-bold text-roaring-renovations-yellow">
          Contact Us!
        </h1>
        <hr className="mx-auto flex w-[min(120vw,120vh)] items-center justify-center border-b-2 border-gray-400" />
      </section>
      <div className="flex flex-col items-center justify-center m-auto">
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
