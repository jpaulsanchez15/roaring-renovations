import { Card } from "@/components/ui/card";
import Image from "next/image";
import bathroomImg from "../../../public/bathroom-1.jpeg";

const images = [bathroomImg.src, bathroomImg.src, bathroomImg.src];

const Gallery = () => {
  return (
    <section id="gallery">
      <h1 className="text-center rounded-sm py-4 text-3xl font-extrabold items-center justify-center text-roaring-renovations-yellow sm:text-4xl">
        Gallery
      </h1>
      <hr className="w-[320px] md:lg:mt-0 md:lg:w-1/2 justify-center items-center flex mx-auto border-black sm:mx-auto dark:border-gray-700" />
      <div className="flex flex-col my-3 px-3 items-center md:lg:w-1/3 md:lg:justify-center m-auto justify-between gap-4">
        {images.map((image) => (
          <ImageCard key={image} img={image} />
        ))}
      </div>
    </section>
  );
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
