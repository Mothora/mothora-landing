import Head from "next/head";
import Header from "@components/header";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import { RxDoubleArrowRight } from "react-icons/rx";

export default function Home() {
  return (
    <div className="overflow-hidden overflow-y-hidden">
      <Head>
        <title>Mothora</title>
        <meta name="description" content="Mothora" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <WelcomeSection />
      <DAOSection />
      <EssenceSection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat animate-in fade-in duration-700"
      style={{
        backgroundImage: `
          -webkit-linear-gradient(top, 
          rgba(0,0,0,0.1) 0%, 
          rgba(0,0,0,0.2) 20%,
          rgba(0,0,0,0.5) 80%,
          rgba(0,0,0,0.9) 100%
          ),
          url("/images/top-mountain.jpeg")`,
      }}
    >
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-shadow text-center text-slate-200 animate-in fade-in slide-in-from-top-10 duration-700">
          Immerse yourself in a Grand Strategy Sci-Fi Future.
        </h1>
        <div className="flex w-full justify-center ">
          {/* <button className="btn w-64 animate-in fade-in slide-in-from-bottom-10 duration-700">
                Enter the World
              </button> */}
          {/* Enter the World button */}
          <SlideTransitionButton
            text="Enter the World"
            secondaryText="Be Immersed in the Future"
            link="https://app.mothora.xyz"
            type="a"
            w="72"
          />
        </div>
        {/* Scroll Indicator */}
        <div className="absolute inset-x-0 bottom-6 mx-auto transition-transform animate-in fade-in slide-in-from-bottom-10 duration-500 hover:translate-y-2">
          <a
            className="mx-auto flex cursor-pointer flex-col items-center"
            href="#welcome"
          >
            <p className="text-shadow text-2xl font-bold">Scroll</p>
            <BsChevronDown />
          </a>
        </div>
      </div>
    </div>
  );
};

const WelcomeSection = () => {
  return (
    <div
      className="h-[550px] min-h-screen w-full bg-cover bg-center bg-no-repeat"
      id="welcome"
      style={{
        backgroundImage: `
          -webkit-linear-gradient(top, 
          rgba(0,0,0,0.9) 0%, 
          rgba(0,0,0,0.5) 20%,
          rgba(0,0,0,0) 50%,
          rgba(0,0,0,0.2) 80%,
          rgba(0,0,0,0.9) 100%
          ),
          url("/images/cdys-walls.jpeg")`,
      }}
    >
      <div className="flex h-full items-center justify-between px-14 pb-16">
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
        <div className="pt-10">
          <Image
            src="/images/n1.jpeg"
            alt="Mothora Example"
            className="rounded-md"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

const DAOSection = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover"
      style={{
        backgroundImage: `
          -webkit-linear-gradient(top, 
          rgba(0,0,0,0.9) 0%, 
          rgba(0,0,0,0.2) 20%,
          rgba(0,0,0,0) 50%,
          rgba(0,0,0,0) 80%,
          rgba(0,0,0,0.2) 100%
          ),
          url("/images/walls-zoom.jpeg")`,
      }}
    >
      <h2 className="text-shadow text-center text-3xl">Meet the DAOs</h2>
      <p className="max-w-3xl text-center">
        DAOs allow for groups of like-minded players to govern themselves. These
        organizations of people can make proposals that influence how the game
        is meant to be played by them, their strategies and how they are
        managed.
      </p>

      {/* Icons */}
      <div className="my-6 flex shrink-0 items-center gap-6 rounded-lg bg-gray-700 bg-opacity-20 pl-4">
        <Link href="/daos#Shadow Council">
          <Image
            src="/images/daos/sc-logo.png"
            alt="Shadow Council"
            width="160"
            height="160"
            className="cursor-pointer duration-300 hover:scale-110"
          />
        </Link>

        <a
          href="https://mothora.gitbook.io/mothora/set-and-setting/the-daos/eclipse-horizon"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/daos/eh-logo.png"
            alt="Iron Empire"
            width="160"
            height="160"
            className="cursor-pointer duration-300 hover:scale-110"
          />
        </a>

        <a
          href="https://mothora.gitbook.io/mothora/set-and-setting/the-daos/the-federation"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/daos/fed-logo.png"
            alt="The Federation"
            width="160"
            height="160"
            className="cursor-pointer duration-300 hover:scale-110"
          />
        </a>
      </div>

      <p className="max-w-2xl text-center">
        Become a member of a Decentralized Autonomous Organization (DAO) and
        strategize your way to victory in Mothora's immersive and intense world.
      </p>

      <SlideTransitionButton
        text="Meet the DAOs"
        secondaryText="Meet your Future Allies"
        link="/daos"
        type="link"
      />
    </div>
  );
};

const EssenceSection = () => {
  return (
    <div
      className="h-[700px] min-h-screen w-full bg-cover bg-center bg-no-repeat pb-8"
      style={{
        backgroundImage: `
          -webkit-linear-gradient(top, 
          rgba(0,0,0,0.7) 0%, 
          rgba(0,0,0,0.5) 20%,
          rgba(0,0,0,0.2) 50%,
          rgba(0,0,0,0.3) 80%,
          rgba(0,0,0,0.4) 100%
          ),
          url("/images/cdys-essence-2.jpeg")`,
      }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <div className="mb-6 flex items-center gap-8 px-8">
          <div className="w-[400px] rounded-xl bg-black bg-opacity-70 px-4 pb-4">
            <h2 className="essence text-center text-4xl">ESSENCE</h2>
            <p className="max-w-3xl text-center font-bold">
              <span className="text-shadow">
                Earn and craft unique, soulbound non-fungible tokens (NFTs) as
                you earn{" "}
              </span>
              <span className="essence font-extrabold">$ESSENCE </span>
              <span className="text-shadow">
                and rise to the top of your DAO's governance ranks.
              </span>
            </p>
          </div>

          <RxDoubleArrowRight size={64} />

          <div className="w-[400px] rounded-xl bg-black bg-opacity-70 px-4 pb-4">
            <h2 className="text-shadow text-center text-4xl font-bold">SRep</h2>
            <p className="max-w-3xl text-center font-bold">
              <span className="text-shadow">
                SRep represents the shares of ownership a player has on their
                DAO during a season. It is obtained by locking{" "}
              </span>
              <span className="essence font-extrabold">$ESSENCE </span>
              <span className="text-shadow">or NFTs.</span>
            </p>
          </div>
        </div>

        <SlideTransitionButton
          text="Learn more about the Economy Loop"
          secondaryText="Become an Economy Expert"
          link="https://mothora.gitbook.io/mothora/fundamentals/economic-loops"
          type="a"
          w="96"
        />
      </div>
    </div>
  );
};

const SlideTransitionButton = ({
  text,
  secondaryText,
  link,
  type,
  w = "64",
}: {
  text: string;
  secondaryText: string;
  link: string;
  type: "a" | "link";
  w?: string;
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

  const classNames = `group relative my-4 inline-flex w-${w} items-center justify-center rounded-lg overflow-x-hidden bg-mothora-primary px-6 py-3 text-white shadow-md transition animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out`;
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
