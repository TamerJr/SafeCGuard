import Image from "next/image";
import React from "react";
import Hero from "../assets/heroImg.jpg";
const HeroSection = () => {
  return (
    <section className="flex w-full justify-around text-center items-center">
      <div>
        <h1 className="font-bold font-">Feed Your Brain With Reading Books</h1>
      </div>
      <Image src={Hero} alt="Someone reading" width={800} height={800} />
    </section>
  );
};

export default HeroSection;
