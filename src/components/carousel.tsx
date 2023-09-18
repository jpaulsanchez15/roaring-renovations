import { MinusCircle, PlusCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type CardCarouselProps = {
  components: () => React.ReactNode[];
  isBlackBackground: boolean;
};

const CardCarousel = ({ components, isBlackBackground }: CardCarouselProps) => {
  const [count, setCount] = useState(0);

  const handlePrevious = () => {
    setCount(
      (prevCount) => (prevCount - 1 + components().length) % components().length
    );
  };

  const handleNext = () => {
    setCount((prevCount) => (prevCount + 1) % components().length);
  };

  return (
    <div className="flex gap-3 md:lg:gap-8">
      <button className="disabled:cursor-not-allowed" onClick={handlePrevious}>
        <MinusCircle color={isBlackBackground ? "white" : "black"} />
      </button>
      <div>{components()[count]}</div>
      <button className="disabled:cursor-not-allowed" onClick={handleNext}>
        <PlusCircle color={isBlackBackground ? "white" : "black"} />
      </button>
    </div>
  );
};

export { CardCarousel };
