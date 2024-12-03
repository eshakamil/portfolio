import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Project() {
  return (
    <div id="Project" className="bg-slate-100">
      <section className="text-gray-600 body-font">
        <div className="text-black text-5xl font-bold text-center pt-20 underline">MY PROJECT</div>
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-50 py-32 px-10 relative mb-4 cursor-pointer">
              <Image
                alt="Screenshot of Amazon Clone homepage"
                className="w-full object-cover h-full object-center block opacity-20 hover:opacity-100 absolute inset-0"
                src="/assests/project/abc.jpeg"
                width={600}
                height={400}
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-gray-900 title-font mb-2 font-bold">
                  AMAZON CLONE PROJECT
                </h2>
                <p className="text-black text-xl font-bold">
                  Clone homepage of Amazon using basic HTML and CSS. This is for those who want to make their websites frontend the best.
                </p>
                <Link
                  target="_blank"
                  href="https://html-css-project-ivory.vercel.app/"
                  className="mt-3 text-blue-700 font-bold hover:text-black hover:underline inline-flex items-center"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;

