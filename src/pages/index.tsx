import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { BsChevronDown } from "react-icons/bs";
import Header from "@components/header";
import { url } from "inspector";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mothora</title>
        <meta name="description" content="Mothora" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="text-white">
        <div
          className="h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cdys-art-4.png')" }}
        >
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="text-shadow text-slate-200 animate-in fade-in slide-in-from-top-10 duration-700">
              Immerse yourself in a Grand Strategy Sci-Fi Future.
            </h1>
            <div className="flex w-full items-center justify-center">
              {/* <button className="btn w-64 animate-in fade-in slide-in-from-bottom-10 duration-700">
                Enter the World
              </button> */}
              {/* Enter the World button */}
              <a
                href="#_"
                className="group relative inline-flex w-64 items-center justify-center overflow-hidden rounded-md border-2 border-black bg-mothora-primary p-4 px-6 py-3 text-white shadow-md transition animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out "
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-mothora-hover text-white duration-300 group-hover:translate-x-0">
                  <span className="pr-2 text-black">Join Now!</span>
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center text-black transition-all duration-300 group-hover:translate-x-full">
                  Enter the World
                </span>
                <span className="invisible relative">Enter the World</span>
              </a>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute inset-x-0 bottom-6 mx-auto transition-transform animate-in fade-in slide-in-from-bottom-10 duration-500 hover:translate-y-5">
              <div className="mx-auto flex flex-col items-center">
                <p className="text-shadow cursor-default text-2xl font-bold">
                  Scroll
                </p>
                <BsChevronDown />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
