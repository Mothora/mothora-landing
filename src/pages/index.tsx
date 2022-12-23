import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { BsChevronDown } from "react-icons/bs";
import Header from "@components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mothora</title>
        <meta name="description" content="Mothora" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white">
        <video
          autoPlay
          muted
          id="myVideo"
          className="absolute right-0 bottom-0 min-h-full min-w-full"
        >
          <source src="/videos/teaser.mp4" type="video/mp4" />
        </video>
        <Header />
        <div className="mt-36">
          <div className="fixed inset-x-0 bottom-10 mx-auto transition-transform duration-500 hover:translate-y-5 ">
            <div className="mx-auto flex flex-col items-center">
              <p className="text-shadow cursor-default text-2xl font-bold">
                Scroll
              </p>
              <BsChevronDown />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
