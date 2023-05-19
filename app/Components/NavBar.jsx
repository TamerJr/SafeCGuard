"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handelToggleMenu = () => {
    setIsToggle(!isToggle);
  };
  const asideStyles = `md:hidden sm:block  w-32 absolute ${
    !isToggle ? "right-full" : "right-2"
  } top-16 bg-orange-400 shadow-md text-white rounded-lg py-8 transition duration-600 ease-in-out`;

  console.log(isToggle);
  console.log(asideStyles);
  return (
    <nav className="flex justify-between items-center w-full bg-orange-400 text-black px-12">
        <Link href="/">
      <Image
        className="h-12 object-contain"
        src={Logo}
        height={500}
        width={300}
        alt="Logo"
        />
        </Link>
      <ul className=" md:flex justify-center items-center list-none gap-12 shrink-0 hidden">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="support">
          <li>Support</li>
        </Link>
        <Link href="/shop">
          <li>Shop</li>
        </Link>
        <Link href="/aboutus">
          <li>About Us</li>
        </Link>
      </ul>
      <div className="sm:block md:hidden" onClick={handelToggleMenu}>
        {!isToggle ? (
          <p>
            <RxHamburgerMenu size={30} />
          </p>
        ) : (
          <p>
            <TfiClose size={30} />
          </p>
        )}
      </div>
      <aside className={asideStyles}>
        <ul className=" flex-col  h-full text-center justify-center items-center list-none ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="support">
            <li>Support</li>
          </Link>
          <Link href="/shop">
            <li>Shop</li>
          </Link>
          <Link href="/aboutus">
            <li>About Us</li>
          </Link>
        </ul>
      </aside>
    </nav>
  );
};

export default NavBar;
