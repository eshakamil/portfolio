import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const socialLinks = {
  instagram: "https://www.instagram.com/esha_kamil/profilecard/?igsh=MTRkdW5lZWQ3M2k5ZQ==",
  facebook: "https://www.facebook.com/esha.kamil.5?mibextid=ZbWKwL",
  linkedin: "https://www.linkedin.com/in/eshyy-khan-01996930b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

function Footer() {
  return (
    <div className="bg-gray-200">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex items-center sm:flex-row flex-col">
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            href="#"
          >
            <Image
              className="w-10 h-15"
              src="/assests/pictures/logo.jpeg"
              alt="logo"
              width={100}
              height={100}
            />
            <span className="ml-3 text-xl">Thank you!</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 eshyykhan —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={socialLinks.instagram}
              className="text-gray-500"
              aria-label="Visit Instagram profile"
            >
              <FaInstagram className="text-3xl hover:text-pink-600 focus:text-pink-600" />
            </Link>
            <Link
              target="_blank"
              href={socialLinks.facebook}
              className="ml-3 text-gray-500"
              aria-label="Visit Facebook profile"
            >
              <FaFacebook className="text-3xl hover:text-blue-600 focus:text-blue-600" />
            </Link>
            <Link
              target="_blank"
              href={socialLinks.linkedin}
              className="ml-3 text-gray-500"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin className="text-3xl hover:text-blue-800 focus:text-blue-800" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;



