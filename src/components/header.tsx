import Image from "next/image";

import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 h-20 w-full bg-black px-4 py-2">
      <div className="flex h-full w-full items-center justify-between gap-2">
        <div className="flex h-full w-full items-center gap-2">
          <Image
            src="/images/brand/mothora-full.png"
            alt="Mothora"
            width={300}
            height={100}
          />

          <a className="btn-header">
            <span>DAOs</span>
          </a>

          <a className="btn-header">
            <span>Gitbook</span>
          </a>

          <a className="btn-header">
            <span>FAQ</span>
          </a>

          <a className="btn-header">
            <span>Support</span>
          </a>
        </div>

        <div className="flex h-full items-center gap-2">
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
