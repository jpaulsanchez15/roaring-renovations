import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Head from "next/head";
import Image from "next/image";

const services = [
  // Static.
  {
    image:
      "https://static.wixstatic.com/media/0108b2_5d9bb34b9326472390da1f8e05043ab5~mv2.png/v1/fill/w_300,h_219,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_2001_HEIC.png",
    service: "Kitchen & Bathroom Remodeling",
    description:
      "Transform your kitchen or bathroom into a stunning space with our full remodeling services. From design to implementation, we'll bring your dream vision to life.",
  },
  {
    image:
      "https://static.wixstatic.com/media/0108b2_4fc8c75b8e1b4ca0a61418c828da0192~mv2.png/v1/fill/w_262,h_219,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_3422_HEIC.png",
    service: "Interior/Exterior Painting & Drywall Repairs",
    description:
      "Refresh the interiors with our expert painting and drywall repair services. From walls and crown molding to cabinets and ceilings, we'll make your home look brand new. On the exterior, we handle siding replacements and painting for a polished finish.",
  },
  {
    image:
      "https://static.wixstatic.com/media/0108b2_7272ced95ab0483eb1790b9e7f9a6efa~mv2.png/v1/fill/w_258,h_219,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_3504_HEIC.png",
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
      <section
        id="services"
        className="w-full my-12 p-12 flex flex-col items-center justify-center m-auto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-center rounded-sm py-4 text-3xl font-extrabold items-center justify-center text-roaring-renovations-yellow sm:text-4xl">
            Services
          </h1>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {services.map((service) => (
                <ServiceCards
                  key={service.service}
                  image={service.image}
                  service={service.service}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

type ServiceCardProps = {
  service: string;
  description: string;
  image: string;
};

const ServiceCards = ({ ...props }: ServiceCardProps) => {
  return (
    <Card className="bg-white w-full h-full hover:cursor-pointer hover:bg-slate-100">
      <Image
        src={props.image}
        width={400}
        height={50}
        alt={`Roaring Renovations ${props.service} - A renovating company near you in Fort Worth, Texas`}
        // TODO: Need to add mobile formatting.
        className="w-full h-[425px] rounded-t-md"
      />
      <CardTitle className="text-center my-4">{props.service}</CardTitle>
      <CardContent className="mt-6 text-center">
        {props.description}
      </CardContent>
    </Card>
  );
};
