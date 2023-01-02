import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://fonts.googleapis.com/css?family=Poppins&display=optional"
        rel="stylesheet"
      ></link>
      <Head />
      <body className="overflow-x-hidden">
        <div className="hidden sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-purple-500"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
