import DisclosureComp from "@components/ui/disclosureComp";
import Head from "next/head";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Faq() {
  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  return (
    <>
      <Head>
        <title>FAQ - Mothora</title>
      </Head>
      <div
        className="fixed h-screen min-h-screen w-full bg-cover bg-center bg-no-repeat animate-in fade-in duration-1000"
        style={{
          backgroundImage: `
          -webkit-linear-gradient(top, 
          rgba(0,0,0,0.9) 0%, 
          rgba(0,0,0,0.2) 20%,
          rgba(0,0,0,0) 50%,
          rgba(0,0,0,0) 80%,
          rgba(0,0,0,0.2) 100%
          ),
          url("/images/cdys-essence-2.jpeg")`,
        }}
      ></div>
      <div className="relative mt-20 flex flex-col items-center rounded-lg px-4">
        <h1>FAQ</h1>
        <h2 className="mb-2 rounded-lg bg-black bg-opacity-70 px-4 py-4 text-center backdrop-blur-sm">
          Welcome to the FAQ page! Here, you'll find answers to some of the most
          common questions. If you have a question that isn't answered here,
          don't hesitate to ask the team for assistance.
        </h2>
        <div
          className="h-full w-full max-w-[900px] overflow-hidden rounded-lg bg-black bg-opacity-40 px-8 py-4 backdrop-blur-md"
          ref={animationParent}
        >
          <DisclosureComp
            text="What is Mothora?"
            answer="Mothora is a Grand Strategy First-Person Shooter web3 game set in a dystopian sci-fi future. Players belong to one of three DAOs and compete for map dominance, making economic and war decisions through a participatory process. The goal is to provide an intense and engaging experience with many players coordinating across time zones and displaying their allegiance to their DAO."
          />
          <DisclosureComp
            text="What is the goal of Mothora?"
            answer="The goal of Mothora is for a DAO to have the highest collective SREP (Social Reputation) at the end of a game season. Players can earn SREP by locking $ESSENCE and NFTs in their DAO, which increases their governance power. To win the game, players need to be successful in both the tactical First Person Shooter gameplay and the Grand Strategy game."
          />
          <DisclosureComp
            text="Can I trade $ESSENCE or NFTs?"
            answer='$ESSENCE is a non-tradeable token used as the social performance mechanism in Mothora. NFTs in Mothora are also non-tradeable and are referred to as "soulbound" NFTs.'
          />
          <DisclosureComp
            text="How do I get started with Mothora?"
            answer="To get started, connect your wallet, link your Discord account, and join one of the three DAOs. You can then participate in missions and work with other players in your chosen guild."
          />
          <DisclosureComp
            text="What are the missions in Mothora's website?"
            answer="The missions in Mothora are tasks or challenges that players can compete to complete in order to earn points, ranks, Discord roles, and NFT prizes before the game is released."
          />
          <DisclosureComp
            text="What are the guilds in Mothora?"
            answer="The guilds in Mothora are groups of players who come together to work on missions and achieve shared goals. There will be a guild module where 60 project ambassadors can create a guild, commit to a DAO, and invite their follow base to join. Ambassadors can apply in early 2023."
          />
          <DisclosureComp
            text="When will the Mothora web app be released?"
            answer="The Mothora web app is expected to be released during Q1 2023."
          />
          <DisclosureComp
            text="How can I become a project ambassador for Mothora?"
            answer="Project ambassadors for Mothora will be handpicked and invited to fill out an interest form in early 2023. Updates on the Mothora website or social media channels will provide more information on how to apply."
          />
        </div>
      </div>
    </>
  );
}
