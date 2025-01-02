import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Secure Your Access with Ease
              <span className="sm:block"> Authentication Partner. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Say goodbye to complexity and hello to seamless access. With
              cutting-edge technology and unmatched security, Amork is your
              ultimate solution for managing users with confidence and ease.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/"
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
