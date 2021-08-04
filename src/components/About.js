import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Tania.
                <br className="hidden lg:inline-block" />I'm an enthusiastic Senior Design Technologist who loves bridging the gap between design and development world.
              </h1>
              <p className="mb-8 leading-relaxed">
                I grew up in Bangkok, Thailand, then moved to Sydney, Australia to pursued M.Sc. of Computing and Information Technology from the University of New South Wales. Now I lived in Seattle, WA, working as a Senior Design Technologist at Amazon.
              </p>
              <p className="mb-8 leading-relaxed">
                I have over 10 years experience in front-end development, 3 years in design, and 5 years in leading projects. Before going to Australia, I have a background in Chemical Engineering and Industrial Engineering. I believe every single background is part of a bigger picture. My experience in diverse fields can be applied correspondently.
              </p>
              <p className="mb-8 leading-relaxed">
                Outside of work, I love to do yoga, hiking, skiing, paddleboarding, kayaking, and spending time with my Corgi.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );
}