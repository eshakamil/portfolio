import Link from "next/link";
import React from "react";
import Image from "next/image";

function About() {
  return (
    <div id="About" className="bg-slate-100">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-1/4 md:w-1/3 w-1/2 mb-10 object-cover object-center rounded"
            alt="Avatar"
            src="/assests/pictures/avatar.png"
            width={300}
            height={300}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed text-lg text-black font-semibold">
              Welcome! I'm <strong>Eshyy Khan</strong>, a frontend developer
              with a passion for building fast, scalable, and user-friendly web
              applications using HTML, CSS, TypeScript, and Next.js. With a
              strong foundation in UI/UX design principles, I strive to deliver
              exceptional digital experiences that exceed expectations.
            </p>
            <p className="mb-4 leading-relaxed text-lg text-black font-semibold">
              <strong>Technical Skills:</strong>
            </p>
            <ul className="list-disc list-inside mb-5 text-lg text-black font-semibold">
              <li>Frontend Development: HTML, CSS, TypeScript</li>
              <li>Framework: Next.js</li>
              <li>UI/UX Design</li>
            </ul>
            <p className="mb-5 leading-relaxed text-lg text-black font-semibold">
              I'm excited to collaborate and bring innovative ideas to life.
            </p>
            <div className="flex justify-center">
              <a
                href="/assests/cv/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
              >
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
                  Resume
                </button>
              </a>
              <Link href={"#Contact"} aria-label="Navigate to Contact Section">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 hover:text-white rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
