import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { HammerIcon, Shield, HeartHandshakeIcon } from "lucide-react";

const aboutUs = [
  {
    reason: "Excellence and Professionalism",
    message:
      "At Roaring Renovations we pride ourselves on attention to detail, not only with our work, But also Ensuring client satisfaction. From the first phone call we work Hard to provide you with a unequivocal experience and perfect results every time.",
    icon: <HammerIcon />,
  },
  {
    reason: "Licensed and Insured",
    message:
      "Rest easy when considering us for your next project. We are fully licensed & insured to Operate in the state of Texas. We only sub-contract licensed/insured professional for electrical, HVAC, plumbing Repairs/installations.",
    icon: <Shield />,
  },
  {
    reason: "Personalized Approach",
    message:
      "Why Roaring renovations is different. We only use time tested, long lasting products, To ensure a complete shower system that will be water tight and stunning to see. From start to finish You get the Same team. ensuring no corners were skipped and all the clients wishes are fulfilled. unlike some contractors who hire multiple different companies. ",
    icon: <HeartHandshakeIcon />,
  },
];

const About = () => {
  return (
    <main>
      <section id="title">
        <h1 className="mx-auto mt-24 flex justify-center text-[min(60px,120vh)] font-bold text-roaring-renovations-yellow">
          About Us
        </h1>
        <h2 className="text-base flex justify-center w-1/3 m-auto text-center text-slate-400 sm:text-xl lg:text-lg xl:text-xl">
          Roaring Renovations LLC is a family owned construction company
          specializing in bathroom & kitchen remodels.
        </h2>
        <hr className="mx-auto flex w-[min(120vw,120vh)] items-center justify-center border-b-2 border-gray-400" />
      </section>
      <section
        id="mission"
        className=" w-full my-12 rounded-md p-12 border-b-2 flex flex-col items-center justify-center m-auto"
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
