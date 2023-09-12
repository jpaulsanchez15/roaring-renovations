import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Head from "next/head";
import img from "../../public/roaringlogo.png";
import Image from "next/image";
import { ContactForm } from "@/components/contactForm";

type TestimonialCardProps = {
  name: string;
  quote: string;
  href?: string;
};

const testimonials = [
  // Prob pulled from an API and loaded on server side.
  {
    name: "Conner Doe",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nisl nunc aliquet nunc, vitae aliquam nisl nunc a nunc. Sed euismod, diam quis aliquam faucibus, nisl nunc aliquet nunc, vitae aliquam nisl nunc a nunc.",
  },
  {
    name: "John Doe",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nisl nunc aliquet nunc, vitae aliquam nisl nunc a nunc. Sed euismod, diam quis aliquam faucibus, nisl nunc aliquet nunc, vitae aliquam nisl nunc a nunc.",
  },
  {
    name: "Spencer Doe",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nisl nunc aliquet nunc, vitae aliquam nisl nunc a nunc. Sed euismod, diam quis aliquam faucibus, nisl nunc aliquet nunc, vitae aliquam nisl nunc a nunc.",
  },
];

const Home = () => {
  return (
    <main>
      <Head>
        <title>Roaring Renovations | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Roaring Renovations LLC is a family owned construction company specializing in bathroom & kitchen remodels, based in Fort Worth, Texas"
        />
      </Head>
      <Hero />
      <hr className="my-6 w-[320px] md:lg:w-1/2 justify-center items-center flex mx-auto border-black sm:mx-auto dark:border-gray-700" />
      <div>
        <section
          id="see-our-work"
          className="w-full p-12 flex flex-col items-center justify-center m-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className="text-center rounded-sm py-4 text-3xl font-extrabold items-center justify-center text-roaring-renovations-yellow sm:text-4xl">
              See Our Work
            </h2>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <TestimonialCards
                    key={testimonial.name}
                    name={testimonial.name}
                    quote={testimonial.quote}
                  />
                ))}
              </div>
            </div>
          </div>
          <Link href="/gallery">
            <Button className="mt-4">View Gallery</Button>
          </Link>
        </section>
        <section
          id="testimonials"
          className="w-full bg-black p-12 flex flex-col items-center justify-center m-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className="text-center rounded-sm py-4 text-3xl font-extrabold items-center justify-center text-roaring-renovations-yellow sm:text-4xl">
              Reviews
            </h2>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <TestimonialCards
                    key={testimonial.name}
                    name={testimonial.name}
                    quote={testimonial.quote}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div>
            <h1 className="mx-auto mt-24 flex justify-center text-[min(60px,120vh)] font-bold text-roaring-renovations-yellow text-center">
              Schedule a Free Quote!
            </h1>
            <hr className="my-6 w-[320px] md:lg:w-1/2 justify-center items-center flex mx-auto border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>
          <div className="flex flex-col items-center justify-center m-auto">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

const Hero = () => {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-10 sm:pt-16 lg:pt-0 lg:pb-14 ">
        <div className="mx-auto max-w-md sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:text-left">
          <div className="lg:py-24">
            <Image
              className="object-contain"
              width={600}
              height={600}
              src={img}
              alt="Roaring Renovations Logo - A renovating company near you in Fort Worth, Texas"
            />
            <p className="text-base text-center mt-4 text-slate-400 sm:text-xl lg:text-lg xl:text-xl">
              Trustworthy. Fast. Affordable.
            </p>
            <div className="mt-6 sm:mt-8">
              <div className="sm:mx-auto sm:max-w-xl lg:mx-0">
                <div className="flex flex-wrap items-center m-auto gap-x-4 gap-y-2 sm:justify-center lg:justify-center">
                  <Link href="/contact">
                    <Button
                      className="hover:bg-blackhawksRed/90"
                      variant="default"
                      size="lg"
                    >
                      Get a Free Quote
                    </Button>
                  </Link>

                  <Link href="/about">
                    <Button variant="outline" size="lg">
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCards = ({ ...props }: TestimonialCardProps) => {
  return (
    <Link href={props.href ?? "/"}>
      <Card className="bg-white hover:cursor-pointer hover:bg-slate-100">
        <CardTitle className="text-center my-4">{props.name}</CardTitle>
        <CardContent className="mt-6 italic">{props.quote}</CardContent>
      </Card>
    </Link>
  );
};
