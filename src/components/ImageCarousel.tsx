import { useState } from "react";

const images = [
  {
    src: "/src/assets/carousel/hero-1.png",
    alt: "image 1",
  },
  {
    src: "/src/assets/carousel/hero-2.png",
    alt: "Image 2",
  },
  {
    src: "/src/assets/carousel/hero-3.png",
    alt: "Image 3",
  },
  {
    src: "/src/assets/carousel/hero-1.png",
    alt: "Image 4",
  },
  {
    src: "/src/assets/carousel/hero-2.png",
    alt: "Image 5",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full mb-20">
      <div className="">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] h-[400px] flex-shrink-0 snap-center"
            >
              <div className="w-full h-full p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden ">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
