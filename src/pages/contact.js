import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { Main } from "next/document";
import Head from "next/head";
// import { LinkArrow } from "@/components/Icons";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
      <title>Kuldeep | Portfolio</title>
        <meta name="description" content="Contact Details" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Connect for Infinite Possibilities "
            className="mb-16 dark:text-light lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div
            name="contact"
            className="w-full h-screen p-4 dark:text-light"
          >
            <div className="flex flex-col p-4 justify-center mx-w-screen-lg mx-auto h-full">
              <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-black dark:border-light">
                  Contact
                </p>
                <p className="py-6 text-2xl font-semibold font-serif">
                  Submit the form to get touch with me
                </p>
              </div>
              <div className="flex justify-center items-center">
                <form
                  action="https://getform.io/f/fad5befb-fd45-442d-b24d-ec12339d8510"
                  method="POST"
                  className="flex flex-col w-full md:w-[70%]"
                  
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="my-4 p-2 bg-transparent border-2 border-dark dark:border-light rounded-md  dark:text-light focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="my-4 p-2 bg-transparent border-2 border-dark dark:border-light rounded-md dark:text-light focus:outline-none"
                  />
                  <textarea
                    name="message"
                    rows="10"
                    placeholder="Your message"
                    className="p-2 bg-transparent border-2 border-dark dark:border-light rounded-md dark:text-light focus:outline-none"
                  ></textarea>
                  <button className="   bg-gradient-to-b from-cyan-500 to-black-800 font-semibold px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base hover:scale-110 duration-300"
                  target="_blank"
                  >
                    Let's talk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
