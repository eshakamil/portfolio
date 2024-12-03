import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IoMdCloudDownload } from 'react-icons/io';

function Navbar() {
  return (
    <nav className="bg-slate-50 z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              className="w-10 h-15"
              src="/assests/pictures/logo.jpeg"
              alt="logo"
              width={100}
              height={100}
            />
            <span className="ml-3 text-2xl font-bold text-slate-800 font-georgia">
              Welcome To My World!
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ml-10">
            <Link href="/" className="mr-5 font-bold hover:text-black">
              Home
            </Link>
            <Link href="#About" className="mr-5 font-bold hover:text-black">
              About
            </Link>
            <Link href="#Skills" className="mr-5 font-bold hover:text-black">
              Skills
            </Link>
            <Link href="#Contact" className="mr-5 font-bold hover:text-black">
              Contact
            </Link>
            <Link href="#Project" className="mr-5 font-bold hover:text-black">
              Projects
            </Link>
          </nav>
          <a
            href="/assests/cv/cv.pdf"
            target="_blank"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            CV
            <IoMdCloudDownload className="text-2xl ml-3" />
          </a>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
