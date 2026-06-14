import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Verticals from "@/components/sections/Verticals";
import WhyMurliLeela from "@/components/sections/WhyMurliLeela";
import Careers from "@/components/sections/Careers";

export default function Home() {
  return (
    <>
      <Header initialBg="#ffffff" position="fixed" />
      <main>
        <Hero />
        <About />
        <Verticals />
        <WhyMurliLeela />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
