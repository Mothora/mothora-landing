import Head from "next/head";
import Image from "next/image";

export default function Daos() {
  interface DAOSectionProps {
    image: string;
    imageLogo: string;
    color: string;
    name: string;
    link: string;
    layout: "left" | "right";
    description: string;
  }
  const DAOSection = ({
    image,
    imageLogo,
    color,
    name,
    link,
    layout,
    description,
  }: DAOSectionProps) => {
    return (
      <div
        className={`${color} group w-full rounded-xl border border-solid border-slate-700 bg-opacity-20 px-12 py-6 backdrop-blur-md animate-in fade-in slide-in-from-${
          layout == "left" ? "left" : "right"
        }-10 duration-700`}
        id={name}
      >
        <div className="flex justify-center gap-20 transition-all duration-300 group-hover:scale-105">
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className={`bg-fill flex h-64 w-64 items-center justify-center rounded-lg bg-center bg-no-repeat shadow-md ${
              layout == "right" && "order-2"
            } `}
          >
            <Image
              src={`/images/daos/${imageLogo}`}
              alt={name}
              width={150}
              height={150}
            />
          </div>
          <div className="flex w-96 flex-col">
            <h2>{name}</h2>
            <p>{description}</p>
            <a className="btn mt-6 w-64 text-center" href={link}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>DAOs - Mothora</title>
      </Head>
      <div
        className="fixed h-screen w-full bg-cover bg-center bg-no-repeat animate-in fade-in duration-700"
        style={{
          backgroundImage: `
          -webkit-linear-gradient(top, 
          rgba(0,0,0,0.1) 0%, 
          rgba(0,0,0,0.2) 20%,
          rgba(0,0,0,0.5) 80%,
          rgba(0,0,0,0.9) 100%
          ),
          url("/images/bottom-mountain.jpeg")`,
        }}
      ></div>
      <div className="relative pb-40">
        <div className="flex w-full flex-col items-center gap-4 px-8 pt-24">
          <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-black bg-opacity-50 px-6 pb-4 text-center backdrop-blur-md animate-in fade-in slide-in-from-top-10 duration-700">
            <h1 className="pb-0">The DAOs</h1>
            <h2>Meet the 3 DAOs</h2>
            <p className="pb-4">
              Decentralized Autonomous Organizations, or DAOs, are a critical
              part of Mothora. They allow for groups of like-minded players to
              govern themselves. These organizations of people can make
              proposals that influence how the game is meant to be played by
              them, their strategies and how they are managed.
            </p>
            <a
              className="btn text-center"
              href="https://mothora.gitbook.io/mothora/fundamentals/daos"
              target="_blank"
              rel="noreferrer"
            >
              Read More about DAOs
            </a>
          </div>

          <DAOSection
            image="/images/daos/sc.jpeg"
            imageLogo="sc-logo.png"
            color="bg-blue-500"
            name="Shadow Council"
            link="https://mothora.gitbook.io/mothora/set-and-setting/the-daos/shadow-council"
            layout="left"
            description="Nimble as the wind, the Shadow Council operates underground in Mothora and resort to anything to get what they want. There is no going back once you're taken"
          />
          <DAOSection
            image="/images/daos/eh.jpeg"
            imageLogo="eh-logo.png"
            color="bg-purple-600"
            name="Eclipse Horizon"
            link="https://mothora.gitbook.io/mothora/set-and-setting/the-daos/eclipse-horizon"
            layout="right"
            description="Explore the far reaches of Mothora with the Eclipse Horizon, a group of bounty hunters and adventurers. From discovering long-lost shrines to crafting specialized dune vehicles, their adventures are not to be missed."
          />
          <DAOSection
            image="/images/daos/fed.jpeg"
            imageLogo="fed-logo.png"
            color="bg-amber-800"
            name="The Federation"
            link="https://mothora.gitbook.io/mothora/set-and-setting/the-daos/the-federation"
            layout="left"
            description="The Federation, a DAO of the elite, nobles, and cultists, seek balance and elegance in all they do. But their true goal is eternal life and the replication of consciousness. Will you serve them in their quest?"
          />
        </div>
      </div>
    </>
  );
}
