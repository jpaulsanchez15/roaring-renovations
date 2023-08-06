import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Head from "next/head";

type ServiceCardProps = {
  img: string;
  service: string;
  action: string;
  href: string;
};

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

const services = [
  // Static.
  {
    service: "Kitchen & Bathroom Remodeling",
    action:
      "Transform your kitchen or bathroom into a stunning space with our full remodeling services. From design to implementation, we'll bring your dream vision to life.",
  },
  {
    service: "Interior/Exterior Painting & Drywall Repairs",
    action:
      "Refresh the interiors with our expert painting and drywall repair services. From walls and crown molding to cabinets and ceilings, we'll make your home look brand new. On the exterior, we handle siding replacements and painting for a polished finish.",
  },
  {
    service: "Pergolas, Fences, and Outdoor Kitchens",
    action:
      "Create an oasis in your backyard with our custom outdoor structures. Whether it's a cozy pergola, a fence for added privacy, or a fabulous outdoor kitchen, we'll bring your outdoor dreams to reality, leaving you with lasting impressions.",
  },
  {
    service: "Flooring, Trim, and Much More!",
    action:
      "Upgrade your home with new flooring and exquisite trim work. We understand the challenges of home improvements, but with our transparent communication, punctual work schedule, and tidy work site, Roaring Renovations makes the entire process a breeze!",
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
      <div>
        <section
          id="services"
          className="bg-black w-full my-12 p-12 flex flex-col items-center justify-center m-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className="text-center rounded-sm py-4 text-3xl font-extrabold items-center justify-center text-roaring-renovations-yellow sm:text-4xl">
              Services
            </h2>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                {/* TODO: Add image to this */}
                {services.map((service) => (
                  <ServiceCards
                    key={service.service}
                    href="/services"
                    img=""
                    service={service.service}
                    action={service.action}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full my-12 rounded-md p-12 flex flex-col items-center justify-center m-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className="text-center bg-white rounded-sm py-4 text-3xl font-extrabold items-center justify-center text-roaring-renovations-yellow sm:text-4xl">
              Testimonials // Reviews?
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
      </div>
    </main>
  );
};

export default Home;

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-10 sm:pt-16 lg:pt-0 lg:pb-14 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:pl-0 lg:text-left">
            <div className="lg:py-24">
              <h1 className="text-4xl font-extrabold tracking-tight text-roaring-renovations-yellow sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Roaring Renovations</span>
              </h1>
              <p className="text-base text-slate-400 sm:text-xl lg:text-lg xl:text-xl">
                Trustworthy. Fast. Affordable.
              </p>
              <div className="mt-6 sm:mt-8">
                <div className="sm:mx-auto sm:max-w-xl lg:mx-0">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-center lg:justify-start">
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
          <div className="mt-12 lg:relative lg:m-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <div className="w-full lg:absolute lg:inset-y-0 lg:top-1/2 lg:left-0 lg:h-4/5 lg:w-auto lg:max-w-none lg:-translate-y-1/2">
                <div className="h-full w-full">
                  <div className="h-full w-full">
                    <div className="group flex  flex-col overflow lg:w-auto">
                      <div className="flex flex-1 flex-col">
                        <div className="flex flex-1">
                          <div className="relative flex-1">
                            {/* TODO: Find a better image or fix the sizing here */}
                            <img
                              className="object-contain"
                              src="https://static.wixstatic.com/media/0108b2_369f4807a6c24651bdd9344e319b60b3~mv2.png/v1/fill/w_619,h_512,al_c,lg_1,q_85,enc_auto/8000176E-896B-4547-B4DE-3192A60F4742_edited_edited_edited.png"
                              alt="Roaring Renovations Logo - A renovating company near you in Fort Worth, Texas"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

const ServiceCards = ({ ...props }: ServiceCardProps) => {
  return (
    <Link href={props.href ?? "/"}>
      <Card className="bg-white m-auto h-full hover:cursor-pointer hover:bg-slate-100">
        <CardTitle className="text-center my-4">{props.service}</CardTitle>
        <CardContent className="">{props.action}</CardContent>
      </Card>
    </Link>
  );
};
