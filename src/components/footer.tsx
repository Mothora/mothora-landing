import Image from "next/image";
import { BsDiscord, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { SiGitbook, SiSubstack } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="botom-0 absolute bottom-0 flex h-32 w-full items-center bg-black bg-opacity-10 p-3 text-center text-xs backdrop-blur-sm md:h-20">
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 text-white">
            <a href="https://mothora.xyz">
              <Image
                src="/images/brand/mothora-full.png"
                className="cursor-pointer text-white duration-500 hover:scale-95"
                alt="Mothora"
                width={250}
                height={100}
              />
            </a>

            <p className="mt-1 text-gray-400">
              &copy;
              {new Date().getFullYear() === 2022
                ? "2022"
                : "2022 - " + String(new Date().getFullYear())}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            className="text-gray-400 hover:underline"
            href="https://mothora.gitbook.io/mothora/"
          >
            <SiGitbook size={28} />
          </a>
          <a
            className="text-gray-400 hover:underline"
            href="https://discord.gg/KxR6GzZWkK"
          >
            <BsDiscord size={28} />
          </a>
          <a
            className="text-gray-400 hover:underline"
            href="https://twitter.com/mothora_"
          >
            <BsTwitter size={28} />
          </a>
          <a
            className="text-gray-400 hover:underline"
            href="https://www.instagram.com/mothoragame/"
          >
            <BsInstagram size={28} />
          </a>
          <a
            className="text-gray-400 hover:underline"
            href="https://t.me/mothoragame"
          >
            <BsTelegram size={28} />
          </a>
          <a
            className="text-gray-400 hover:underline"
            href="https://mothora.substack.com/_"
          >
            <SiSubstack size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
