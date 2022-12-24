import Image from "next/image";

import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 h-20 w-full bg-black px-4 py-2 animate-in fade-in slide-in-from-top-10 duration-700">
      <div className="flex h-full w-full items-center justify-between gap-2">
        <div className="flex h-full w-full items-center gap-2">
          <Image
            src="/images/brand/mothora-full.png"
            alt="Mothora"
            width={300}
            height={100}
          />

          <a className="btn-header animate-in fade-in slide-in-from-left-10 duration-700">
            <span>DAOs</span>
          </a>

          <a className="btn-header animate-in fade-in slide-in-from-left-14 duration-700 ">
            <span>Gitbook</span>
          </a>

          <a className="btn-header animate-in fade-in slide-in-from-left-16 duration-700 ">
            <span>FAQ</span>
          </a>

          <a className="btn-header animate-in fade-in slide-in-from-left-24 duration-700 ">
            <span>Support</span>
          </a>
        </div>

        <div className="flex h-full items-center gap-2 animate-in fade-in slide-in-from-right-10 duration-700">
          <a href="https://aydens.us" className="btn-header-social">
            <span>
              <SiDiscord size={24} />
            </span>
          </a>
          <a href="https://aydens.us" className="btn-header-social">
            <span>
              <BsTwitter size={24} />
            </span>
          </a>
          <a href="https://aydens.us" className="btn-header-social">
            <span>
              <BsInstagram size={24} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
