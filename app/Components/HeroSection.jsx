import Image from "next/image";
import React from "react";
import Hero from "../assets/heroImg.jpg";
import styles from "@/app/HeroSection.module.css";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className=" box-border text-center md:flex sm:max-w-full md:w-full justify-center items-center lg:m-5 md:m-0 lg:h-96 ">
      <div className="gap-2 justify-center w-5/6  m-auto flex lg:justify-around md:gap-8 items-center flex-col min-h-full lg:w-3/6 relative">
        <h1 className="text-2xl font-bold md:text-5xl leading-20 ">
          Feed Your Brain With Reading Books
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-slate-900 ">Books never lies</h3>
        <p className="text-sm sm:text-base lg:text-xl text-slate-500">
          Do not judge a book by its cover! The title of the text, how it is
          organized, and the images and illustrations in the text are all
          important parts of something you are reading.
        </p>
        <Link
          href="/#breifaboutus"
          className="px-5 py-1 text-sm font-normal md:px-10 md:py-2 border md:text-xl rounded-md border-orange-500 text-orange-600 md:font-semibold  hover:bg-orange-500 hover:rounded-sm hover:text-white duration-500 ease-in-out"
        >
          Get Start
        </Link>
      </div>
      <div className="hidden lg:block h-full w-2/4">
        <div className={styles.HeroSection}>
          <Image
            src={Hero}
            className="h-full"
            alt="Someone reading"
            width="auto"
            height="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
