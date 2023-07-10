import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";

const Banner = dynamic(() => import("@/components/sections/Banner"));
const Menu = dynamic(() => import("@/components/sections/Menu"));
const Facility = dynamic(() => import("@/components/sections/Facility"));
const Reviews = dynamic(() => import("@/components/sections/Reviews"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee-Shop</title>
      </Head>
      <Layout>
        <Banner />
        <Menu />
        <Facility />
        <Reviews />
      </Layout>
    </>
  );
}
