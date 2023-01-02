import Image from "next/image";

import { SiDiscord } from "react-icons/si";
import { BsStack, BsTelegram, BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

import { BiMenuAltRight } from "react-icons/bi";
import { createRef, useEffect, useState } from "react";
import { useWindowSize } from "hooks/useWindowSize";
import { IoIosArrowBack } from "react-icons/io";
export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [closingMenu, setClosingMenu] = useState<boolean>(false);
  const mobileMenu = createRef<HTMLDivElement>();

  const windowSize = useWindowSize();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!!windowSize.width && windowSize.width > 1024) {
      closeMenu();
    }
  }, [windowSize.width]);

  function toggleMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
      mobileMenu.current?.classList.remove("hidden");
      setClosingMenu(false);
    }
  }

  function closeMenu() {
    if (closingMenu) return;
    setMenuOpen(false);
    setClosingMenu(true);
    setTimeout(() => {
      if (!menuOpen) {
        setClosingMenu(false);
        mobileMenu.current?.classList.add("hidden");
      }
    }, 500);
  }

  return (
    <>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={mobileMenu}
          className={`zoom-in-50' fixed top-0 right-0 z-10 h-screen w-full touch-none bg-mothora-secondary/50 bg-opacity-40 px-4 py-2 shadow-lg backdrop-blur-md animate-in fade-in duration-500`}
        >
          <div className="flex flex-col items-center py-16">
            <div className="flex w-72 flex-col gap-2 py-12 text-center">
              <Link
                className="btn btn-header"
                href="/"
                onClick={() => closeMenu()}
              >
                <span>Home</span>
              </Link>
              <Link
                className="btn btn-header"
                href="/daos"
                onClick={() => closeMenu()}
              >
                <span>DAOs</span>
              </Link>

              <Link
                className="btn btn-header"
                href="/faq"
                onClick={() => closeMenu()}
              >
                <span>FAQ</span>
              </Link>

              <a
                className="btn btn-header"
                href="https://mothora.gitbook.io/mothora/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Read More</span>
              </a>
              <button className="btn" onClick={() => setMenuOpen(false)}>
                Close
              </button>
            </div>
            {/* social icons */}
            <div className="flex h-full w-full justify-center gap-2">
              <a
                href="https://discord.gg/KxR6GzZWkK"
                target={"_blank"}
                rel="noreferrer"
                className="btn-header-social btn-header-social-mobile"
              >
                <span>
                  <SiDiscord size={32} />
                </span>
              </a>
              <a
                href="https://twitter.com/mothora_"
                target={"_blank"}
                rel="noreferrer"
                className="btn-header-social btn-header-social-mobile"
              >
                <span>
                  <BsTwitter size={32} />
                </span>
              </a>
              <a
                href="https://www.instagram.com/mothoragame/"
                target={"_blank"}
                rel="noreferrer"
                className="btn-header-social btn-header-social-mobile"
              >
                <span>
                  <BsInstagram size={32} />
                </span>
              </a>
              <a
                href="https://t.me/mothoragame"
                target={"_blank"}
                rel="noreferrer"
                className="btn-header-social btn-header-social-mobile"
              >
                <span>
                  <BsTelegram size={32} />
                </span>
              </a>
              <a
                href="https://mothora.substack.com/_"
                target={"_blank"}
                rel="noreferrer"
                className="btn-header-social btn-header-social-mobile"
              >
                <span>
                  <BsStack size={32} />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="fixed top-0 right-0 z-10 h-20 w-full bg-black bg-opacity-20 px-4 py-2 shadow-lg backdrop-blur-sm animate-in fade-in slide-in-from-top-10 duration-700">
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
            {/* Links */}
            <div className="hidden gap-2 lg:flex">
              {router.pathname !== "/" && (
                <div className="flex items-center px-4 animate-in fade-in slide-in-from-left-10 duration-300">
                  <Link href="/">
                    <IoIosArrowBack size={32} />
                  </Link>
                </div>
              )}

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
          {/* Social Icons */}
          <div className=" hidden h-full items-center gap-2 animate-in fade-in slide-in-from-right-10 duration-700 lg:flex">
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
          {/* Mobile Menu */}
          <div
            className="flex transition-transform duration-300 hover:scale-110 hover:text-mothora-primary lg:hidden"
            onClick={() => {
              toggleMenu();
            }}
          >
            <BiMenuAltRight size={32} />
          </div>
        </div>
      </div>
    </>
  );
}
