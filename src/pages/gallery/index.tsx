import { Card } from "@/components/ui/card";
import Image from "next/image";

const Gallery = () => {
  return <div></div>;
};

export default Gallery;

type ImageCardProps = {
  img: string;
};

const ImageCard = ({ ...props }: ImageCardProps) => {
  return (
    <Card className="bg-white h-full w-full hover:cursor-pointer  hover:bg-slate-100">
      <Image
        alt={"Roaring Renovations"}
        className="w-full h-[425px] rounded-sm hover:shadow-sm"
        src={props.img}
        width={400}
        height={50}
      />
    </Card>
  );
};
