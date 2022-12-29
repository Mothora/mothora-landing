import Image from "next/image";

import { SiDiscord } from "react-icons/si";
import { BsStack, BsTelegram, BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className="fixed top-0 right-0 z-10 h-20 w-full bg-black bg-opacity-20 px-4 py-2 shadow-lg animate-in fade-in slide-in-from-top-10 duration-700">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-full w-full items-center gap-4">
          <Image
            src="/images/brand/mothora-full.png"
            className="cursor-pointer text-white duration-500 hover:scale-95"
            alt="Mothora"
            width={300}
            height={100}
            onClick={() => {
              router.push("/");
            }}
          />
          <div className="flex gap-2">
            <Link
              className="btn btn-header animate-in fade-in slide-in-from-left-10 duration-300"
              href="/daos"
            >
              <span>DAOs</span>
            </Link>

            <Link
              className="btn btn-header animate-in fade-in slide-in-from-left-16 duration-300"
              href="/faq"
            >
              <span>FAQ</span>
            </Link>

            <a className="btn btn-header animate-in fade-in slide-in-from-left-24 duration-300">
              <span>Community</span>
            </a>

            <a
              className="btn btn-header animate-in fade-in slide-in-from-left-14 duration-300"
              href="https://mothora.gitbook.io/mothora/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Read More</span>
            </a>
          </div>
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
          <a
            href="https://t.me/mothoragame"
            target={"_blank"}
            rel="noreferrer"
            className="btn-header-social"
          >
            <span>
              <BsTelegram size={24} />
            </span>
          </a>
          <a
            href="https://mothora.substack.com/_"
            target={"_blank"}
            rel="noreferrer"
            className="btn-header-social"
          >
            <span>
              <BsStack size={24} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
