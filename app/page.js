"use client";
import { useGetBooksQuery } from "./GlobalRedux/Features/FetchDataSlice";
import HeroSection from "./Components/HeroSection";
import AboutUsSection from "./Components/AboutUsSection";
import BooksShilf from "./Components/BooksShilf";
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutUsSection />
      </main>
      <BooksShilf />
    </>
  );
}
