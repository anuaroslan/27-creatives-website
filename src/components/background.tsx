import bgPink from "../assets/background/bg-pink.png";
import bgYellow from "../assets/background/bg-yellow.png";

type BackgroundImageProps = {
  position?: "center" | "left" | "right" | "left-center";
  verticalPosition?: number; // Controls up/down movement in pixels
};

export const BackgroundImage = ({
  position = "center",
  verticalPosition = 0,
}: BackgroundImageProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case "left":
        return "w-1/2 left-10";
      case "left-center":
        return "w-1/2 left-1/3";
      case "right":
        return "w-1/2 right-10";
      default:
        return "w-full"; // center - full width
    }
  };

  const verticalStyle = {
    transform: `translateY(${verticalPosition}px)`,
  };

  return (
    <div
      className={`absolute inset-0 -z-10 ${
        position === "center" ? "flex" : ""
      }`}
      style={verticalStyle}
    >
      {position === "center" ? (
        // Default center layout
        <>
          <img
            src={bgPink.src}
            alt="Background Pink"
            className="w-3/4 h-full object-contain"
          />
          <img
            src={bgYellow.src}
            alt="Background Yellow"
            className="w-3/4 h-full object-contain -ml-150"
          />
        </>
      ) : // Left or Right layout with stacked images
      position === "left" || position === "left-center" ? (
        <div className={`absolute h-full ${getPositionClasses()}`}>
          <img
            src={bgPink.src}
            alt="Background Pink"
            className={
              "absolute inset-0 h-full w-full object-contain translate-y-1/8 -translate-x-1/2"
            }
          />
          <img
            src={bgYellow.src}
            alt="Background Yellow"
            className="absolute inset-0 h-full w-full object-contain -translate-y-1/8 -translate-x-1/2"
          />
        </div>
      ) : (
        <div className={`absolute h-full ${getPositionClasses()}`}>
          <img
            src={bgPink.src}
            alt="Background Pink"
            className="absolute inset-0 h-full w-full object-contain translate-y-1/8 translate-x-1/2"
          />
          <img
            src={bgYellow.src}
            alt="Background Yellow"
            className="absolute inset-0 h-full w-full object-contain -translate-y-1/8 translate-x-1/2"
          />
        </div>
      )}
    </div>
  );
};
