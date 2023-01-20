import Head from "next/head";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Yliess Hati</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center p-4">
        <div className="flex flex-col gap-8 md:gap-16 md:max-w-3xl xl:max-w-4xl min-h-full">
          <Nav />
          <main className="flex flex-col gap-8 md:gap-16">
            {children}
          </main>
          <Footer/>
        </div>
      </div>
    </>
  );
};