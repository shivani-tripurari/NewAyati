import Image from "next/image";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Grid from "./components/Grid";
import Factor from "./components/Factor";
import Minds from "./components/Minds";
import Footer from "./components/Footer";
import { PageWrapper } from "./page-wrapper";


export default function Home() {
  return (
    <>
    <PageWrapper>
      <Hero/>
      <Experience/>
      <Grid/>
      <Factor/>
      <Minds/>
      <Footer/>
    </PageWrapper>
    </>
  );
}
