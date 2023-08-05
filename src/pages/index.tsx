import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  img: string;
  name: string;
  quote: string;
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
    name: "Kitchen & Bathroom Remodeling",
    quote:
      "We offer full kitchen and bathroom remodeling services. We can help you design your dream kitchen or bathroom and make it a reality.",
  },
  {
    name: "Interior/Exterior Painting & Drywall Repairs",
    quote:
      "We offer interior updating & panting for walls, crown molding, baseboards, door trim/casing, cabinets, and ceilings. Outside, we offer brick, wood, or vinyl siding replacement and panting.",
  },
  {
    name: "Pergolas, Fences, and Outdoor Kitchens",
    quote:
      "Want a cozy place to relax outside, maybe a little more privacy, or a fabulous outdoor kitchen? Let us make your backyard dreams come true. We design custom outdoor structures made to impress and last.",
  },
  {
    name: "Flooring, Trim, and Much More!",
    quote:
      "Getting new flooring or any work inside the home is tough for the customer, but with our clear communication, on-time work schedule and clean work site, Roaring Renovations makes it so much easier!",
  },
];

const Home = () => {
  return (
    <main>
      <Hero />
      <div>
        <section
          id="services"
          className=" w-full my-12 rounded-md p-12 border-b-2 flex flex-col items-center justify-center m-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className="text-center bg-white rounded-sm py-4 text-3xl font-extrabold items-center justify-center text-roaring-renovations-yellow sm:text-4xl">
              Services
            </h2>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* TODO: Add image to this */}
                {services.map((service) => (
                  <ServiceCards
                    key={service.name}
                    href="/services"
                    img=""
                    name={service.name}
                    quote={service.quote}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className=" w-full my-12 rounded-md p-12 border-b-2 flex flex-col items-center justify-center m-auto"
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
        <CardTitle className="text-center my-4">{props.name}</CardTitle>
        <CardContent className="">{props.quote}</CardContent>
      </Card>
    </Link>
  );
};
