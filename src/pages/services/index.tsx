import { FindMore } from "@/components/findMore";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Head from "next/head";
import Image from "next/image";
import bathroomImg from "../../../public/kitchen-and-bathroom.jpeg";
import pergolasImg from "../../../public/pergolas.jpeg";

const services = [
  // TODO: Two more photos here.
  {
    image: bathroomImg.src,
    service: "Kitchen & Bathroom Remodeling",
    description:
      "Transform your kitchen or bathroom into a stunning space with our full remodeling services. From design to implementation, we'll bring your dream vision to life.",
  },
  {
    image: "",
    service: "Interior/Exterior Painting & Drywall Repairs",
    description:
      "Refresh the interiors with our expert painting and drywall repair services. From walls and crown molding to cabinets and ceilings, we'll make your home look brand new. On the exterior, we handle siding replacements and painting for a polished finish.",
  },
  {
    image: pergolasImg.src,
    service: "Pergolas, Fences, and Outdoor Kitchens",
    description:
      "Create an oasis in your backyard with our custom outdoor structures. Whether it's a cozy pergola, a fence for added privacy, or a fabulous outdoor kitchen, we'll bring your outdoor dreams to reality, leaving you with lasting impressions.",
  },
  {
    // TODO: Add image here.
    image: "",
    service: "Flooring, Trim, and Much More!",
    description:
      "Upgrade your home with new flooring and exquisite trim work. We understand the challenges of home improvements, but with our transparent communication, punctual work schedule, and tidy work site, Roaring Renovations makes the entire process a breeze!",
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Roaring Renovations | Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Roaring Renovations is a home renovating company in Fort Worth, Texas. We specialize in kitchen and bathroom remodeling, interior and exterior painting, drywall repairs, pergolas, fences, outdoor kitchens, flooring, trim, and much more!"
        />
      </Head>
      <section id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-center rounded-sm py-4 text-3xl font-extrabold items-center justify-center text-roaring-renovations-yellow sm:text-4xl">
            See Our Work
          </h2>
          <div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {services.map((service) => (
                <ImageCard key={service.service} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mb-12">
        <FindMore
          href="/contact"
          message="Wanting to schedule a free quote?"
          CTA="Contact Us"
        />
      </div>
    </>
  );
};

export default Services;

type ImageCardProps = {
  service: string;
  description: string;
  image: string;
};

const ImageCard = ({ ...props }: ImageCardProps) => {
  return (
    <Card className="bg-white h-full w-full hover:cursor-pointer  hover:bg-slate-100">
      <Image
        alt={"Roaring Renovations"}
        className="w-full h-[425px] rounded-sm hover:shadow-sm"
        src={props.image}
        width={400}
        height={50}
      />
      <CardTitle className="text-center mt-6">{props.service}</CardTitle>
      <CardContent className="text-center mt-6">
        {props.description}
      </CardContent>
    </Card>
  );
};
