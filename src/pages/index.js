import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import en from "../../public/locale/en";
import es from "../../public/locale/es";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <>
      <Head>
        <title>Setapps | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <main>
        <h1>{t.home.title}</h1>
        <p>{t.home.description}</p>
      </main>
    </>
  );
}
