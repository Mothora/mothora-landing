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
        <WelcomeSection />
        <EssenceSection />
        <DAOSection />
      </main>
    </>
  );
}

const HeroSection = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          -webkit-linear-gradient(top, 
          rgba(0,0,0,0.1) 0%, 
          rgba(0,0,0,0.2) 20%,
          rgba(0,0,0,0.7) 80%,
          rgba(0,0,0,0.9) 100%
          ),
          url("/images/cdys-art-4.png")`,
      }}
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
            link="https://app.mothora.xyz"
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

const WelcomeSection = () => {
  return (
    <div
      className="h-96 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          -webkit-linear-gradient(top, 
          rgba(0,0,0,0.9) 0%, 
          rgba(0,0,0,0.5) 20%,
          rgba(0,0,0,0) 50%,
          rgba(0,0,0,0) 80%,
          rgba(0,0,0,0.4) 100%
          ),
          url("/images/cdys-walls.png")`,
      }}
    >
      <div className="flex items-center justify-between px-14">
        <div>
          <h2>Welcome to Mothora</h2>
          <p className="max-w-xl">
            Join the fight for dominance in Mothora, the epic Grand Strategy
            First-Person Shooter Web3 game set in a dystopian sci-fi future.
            Mothora is a Grand Strategy First-Person Shooter web3 game, players
            can join DAOs to govern themselves and the outcome of the game.
          </p>
          <div className="flex gap-4 pt-4">
            <a className="btn w-56 text-center" href="https://app.mothora.xyz">
              Enter the World Now
            </a>
            <a
              className="btn w-56 text-center"
              href="https://mothora.gitbook.io/mothora/"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>

        <Image
          src="/images/dalle8.png"
          alt="Mothora Example"
          className="rounded-md"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

const EssenceSection = () => {
  return (
    <div
      className="h-full w-full bg-cover bg-center bg-no-repeat pb-8"
      style={{
        backgroundImage: `
          -webkit-linear-gradient(top, 
          rgba(0,0,0,0.9) 0%, 
          rgba(0,0,0,0.5) 20%,
          rgba(0,0,0,0.4) 50%,
          rgba(0,0,0,0.4) 80%,
          rgba(0,0,0,0.7) 100%
          ),
          url("/images/cdys-essence-2.png")`,
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="essence text-center text-8xl">$ESSENCE</h2>
        <p className="max-w-3xl text-center font-bold">
          <span className="text-shadow">
            Earn and craft unique, soulbound non-fungible tokens (NFTs) as you
            earn{" "}
          </span>
          <span className="essence font-extrabold">$ESSENCE </span>
          <span className="text-shadow">
            and rise to the top of your DAO's governance ranks.
          </span>
        </p>
        <h2 className="text-shadow text-center text-6xl font-bold">SRep</h2>
        <p className="text-shadow max-w-3xl text-center">
          SRep represents the shares of ownership a player has on their DAO
          during a season. It is obtained by locking $ESSENCE or NFTs.
        </p>
        <a
          className="btn text-center"
          href="https://mothora.gitbook.io/mothora/fundamentals/economic-loops"
        >
          Learn more about the Economy Loop
        </a>
      </div>
    </div>
  );
};

const DAOSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-shadow text-center text-3xl">Meet the DAOs</h2>
      <p className="max-w-3xl pb-8 text-center">
        DAOs allow for groups of like-minded players to govern themselves. These
        organizations of people can make proposals that influence how the game
        is meant to be played by them, their strategies and how they are
        managed.
      </p>
      <div
        className="mb-8 h-40 w-full bg-cover bg-center object-cover"
        style={{
          backgroundImage: "url('/images/daos/dao-banner.jpeg')",
        }}
      />
      <Image
        src="/images/map.png"
        alt="Map"
        width={500}
        height={500}
        className="mb-8"
      ></Image>

      <p className="max-w-2xl text-center">
        Become a member of a Decentralized Autonomous Organization (DAO) and
        strategize your way to victory in Mothora's immersive and intense world.
      </p>

      <SlideTransitionButton
        text="Meet the DAOs"
        secondaryText="Meet the DAOs"
        link="/daos"
        type="link"
      />
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
  const classNames =
    "group relative my-4 inline-flex w-64 items-center justify-center overflow-hidden rounded-md border-2 border-black bg-mothora-primary px-6 py-3 text-white shadow-md transition animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out";
  return type === "a" ? (
    <a href={link} className={classNames}>
      <InnerContent />
    </a>
  ) : (
    <Link href={link} className={classNames}>
      <InnerContent />
    </Link>
  );
};
