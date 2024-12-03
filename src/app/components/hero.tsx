"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="text-gray-600 body-font bg-slate-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I'm
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Front-end Developer",
                  "UI/UX Designer",
                  "Sales Representative",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <div className="text-slate-700">_____</div>
          </h1>
          <p className="mb-8 leading-relaxed">
            Highly skilled Frontend Developer & UI/UX Designer with expertise
            in crafting visually stunning and responsive web applications.
            Proficient in HTML, CSS, and Next.js, I bring a passion for
            creating seamless user experiences.
          </p>
          <div className="flex justify-center">
            <Link href="#Contact">
              <button className="inline-flex text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 max-h-200">
          <Image
            alt="Avatar of the developer"
            src="/assests/pictures/avatar.png"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
