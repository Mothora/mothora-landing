import Head from "next/head";
import Header from "@components/header";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";

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
        <HeroSection />
        <div className="flex flex-col items-center">
          <div
            className="h-40 w-full bg-cover bg-center object-cover"
            style={{
              backgroundImage: "url('/images/daos/dao-banner.jpeg')",
            }}
          />
          <h2 className="text-shadow text-center text-3xl">Meet the DAOs</h2>
          <p className="max-w-3xl pb-8 text-center">
            DAOs allow for groups of like-minded players to govern themselves.
            These organizations of people can make proposals that influence how
            the game is meant to be played by them, their strategies and how
            they are managed.
          </p>

          <Image
            src="/images/map.png"
            alt="Map"
            width={500}
            height={500}
            className="mb-8"
          ></Image>

          <SlideTransitionButton
            text="Meet the DAOs"
            secondaryText="Meet the DAOs"
            link="/daos"
            type="link"
          />
        </div>
      </main>
    </>
  );
}

const HeroSection = () => {
  return (
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
          <SlideTransitionButton
            text="Enter the World"
            secondaryText="Join Now!"
            link="app.mothora.xyz"
            type="a"
          />
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
  );
};

const SlideTransitionButton = ({
  text,
  secondaryText,
  link,
  type,
}: {
  text: string;
  secondaryText: string;
  link: string;
  type: "a" | "link";
}) => {
  const InnerContent = () => {
    return (
      <>
        <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-mothora-hover text-white duration-300 group-hover:translate-x-0">
          <span className="pr-2 text-black">{secondaryText}</span>
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
          {text}
        </span>
        <span className="invisible relative">{text}</span>
      </>
    );
  };
  return type === "a" ? (
    <a
      href={link}
      className="group relative inline-flex w-64 items-center justify-center overflow-hidden rounded-md border-2 border-black bg-mothora-primary p-4 px-6 py-3 text-white shadow-md transition animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out"
    >
      <InnerContent />
    </a>
  ) : (
    <Link
      href={link}
      className="group relative inline-flex w-64 items-center justify-center overflow-hidden rounded-md border-2 border-black bg-mothora-primary p-4 px-6 py-3 text-white shadow-md transition animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out"
    >
      <InnerContent />
    </Link>
  );
};
