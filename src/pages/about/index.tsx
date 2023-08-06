import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { HammerIcon, Shield, HeartHandshakeIcon } from "lucide-react";
import Head from "next/head";

const aboutUs = [
  // TODO: Fix icon styling here, looks a bit weird next to the title.
  {
    reason: "Excellence and Professionalism",
    message:
      "At Roaring Renovations, we take great pride in our commitment to excellence and professionalism. Our attention to detail goes beyond just the quality of our work; we also prioritize client satisfaction. From the very first phone call, our dedicated team works tirelessly to provide you with an exceptional experience and deliver perfect results every time.",
    icon: <HammerIcon />,
  },
  {
    reason: "Licensed and Insured",
    message:
      "Rest easy when choosing us for your next project. We are fully licensed and insured to operate in the state of Texas. For added peace of mind, we only work with licensed and insured professionals for electrical, HVAC, and plumbing repairs/installations.",
    icon: <Shield />,
  },
  {
    reason: "Personalized Approach",
    message:
      "What sets Roaring Renovations apart is our personalized approach to every project. We only use time-tested, long-lasting products, ensuring a complete shower system that is both water-tight and visually stunning. Throughout the entire process, you will have the same dedicated team working on your project, leaving no room for corners to be cut. Our goal is to fulfill all of our clients' wishes, unlike some contractors who hire multiple different companies.",
    icon: <HeartHandshakeIcon />,
  },
];

const About = () => {
  return (
    <main>
      <Head>
        <title>Roaring Renovations | About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Roaring Renovations LLC is a family owned construction company specializing in bathroom & kitchen remodels, based in Fort Worth, Texas"
        />
      </Head>
      <section id="title">
        <h1 className="mx-auto mt-24 flex justify-center text-[min(60px,120vh)] font-bold text-roaring-renovations-yellow">
          About Us
        </h1>
        <h2 className="text-lg md:lg:text-base flex justify-center w-1/2 md:lg:w-1/3 m-auto text-center text-slate-400 sm:text-xl lg:text-lg xl:text-xl">
          Roaring Renovations LLC is a family owned construction company
          specializing in bathroom & kitchen remodels.
        </h2>
        <hr className="my-6 w-[320px] md:lg:w-1/2 justify-center items-center flex mx-auto border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
      </section>
      <section
        id="mission"
        className=" w-full my-12 rounded-md p-12 flex flex-col items-center justify-center m-auto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-center bg-white rounded-sm py-4 text-3xl font-extrabold items-center justify-center text-roaring-renovations-yellow sm:text-4xl">
            Our Mission
          </h2>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {aboutUs.map((about) => (
                <MissionCards
                  key={about.reason}
                  reason={about.reason}
                  message={about.message}
                  icon={about.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

type MissionCardProps = {
  reason: string;
  message: string;
  icon?: JSX.Element;
};

const MissionCards = ({ ...props }: MissionCardProps) => {
  return (
    <Card className="bg-white w-full h-full hover:cursor-pointer hover:bg-slate-100">
      <CardTitle className="text-center my-4">
        {props.icon}
        {props.reason}
      </CardTitle>
      <CardContent className="mt-6">{props.message}</CardContent>
    </Card>
  );
};
