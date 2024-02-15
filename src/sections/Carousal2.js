import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/h1.jpg";
import city2 from "../assets/h4.jpg";
import city3 from "../assets/h2.jpg";
import planet1 from "../assets/h4.jpg";
import planet2 from "../assets/h4.jpg";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [city1, city2, city3, planet1, planet2];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1.5, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <>
    
    <div className='text-center pt-20'>
    <p className='text-2xl font-semibold'>Recommendation</p>
    <h1 className='text-[40px] font-bold'>Best homes in the best places</h1>
   </div>
    <div className="flex items-center flex-col justify-center h-[80vh]">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 z-10 "
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 z-10 "
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default ImageSlider;