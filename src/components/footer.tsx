import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full bg-[#2d1613ff] p-3 text-center text-xs">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
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

        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <a
              className="text-gray-400 hover:underline"
              href="https://discord.gg/KxR6GzZWkK"
            >
              Discord
            </a>
            <a
              className="text-gray-400 hover:underline"
              href="https://twitter.com/mothora_"
            >
              Twitter
            </a>
            <a
              className="text-gray-400 hover:underline"
              href="https://mothora.gitbook.io/mothora/"
            >
              Gitbook
            </a>
          </div>
          <div className="flex flex-col">
            <a
              className="text-gray-400 hover:underline"
              href="https://www.instagram.com/mothoragame/"
            >
              Instagram
            </a>
            <a
              className="text-gray-400 hover:underline"
              href="https://t.me/mothoragame"
            >
              Telegram
            </a>
            <a
              className="text-gray-400 hover:underline"
              href="https://mothora.substack.com/_"
            >
              Substack
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
