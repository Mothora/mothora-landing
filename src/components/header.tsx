import Image from "next/image";

import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 z-10 h-20 w-full bg-black px-4 py-2 animate-in fade-in slide-in-from-top-10 duration-700">
      <div className="flex h-full w-full items-center justify-between gap-2">
        <div className="flex h-full w-full items-center gap-2">
          <Image
            src="/images/brand/mothora-full.png"
            className="cursor-pointer text-white duration-500 hover:scale-95"
            alt="Mothora"
            width={300}
            height={100}
            onClick={() => {
              window.location.replace("https://mothora.xyz");
            }}
          />

          <a className="btn-header animate-in fade-in slide-in-from-left-10 duration-700">
            <span>DAOs</span>
          </a>

          <a className="btn-header animate-in fade-in slide-in-from-left-16 duration-700">
            <span>FAQ</span>
          </a>

          <a className="btn-header animate-in fade-in slide-in-from-left-24 duration-700">
            <span>Community</span>
          </a>

          <a
            className="btn-header animate-in fade-in slide-in-from-left-14 duration-700"
            href="https://mothora.gitbook.io/mothora/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Read More</span>
          </a>
        </div>

        <div className="flex h-full items-center gap-2 animate-in fade-in slide-in-from-right-10 duration-700">
          <a
            href="https://discord.gg/KxR6GzZWkK"
            target={"_blank"}
            rel="noreferrer"
            className="btn-header-social"
          >
            <span>
              <SiDiscord size={24} />
            </span>
          </a>
          <a
            href="https://twitter.com/mothora_"
            target={"_blank"}
            rel="noreferrer"
            className="btn-header-social"
          >
            <span>
              <BsTwitter size={24} />
            </span>
          </a>
          <a
            href="https://www.instagram.com/mothoragame/"
            target={"_blank"}
            rel="noreferrer"
            className="btn-header-social"
          >
            <span>
              <BsInstagram size={24} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
