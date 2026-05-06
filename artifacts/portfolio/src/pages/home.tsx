import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Samples } from "@/components/sections/Samples";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="md:flex">
        <aside className="hidden md:flex md:w-[300px] lg:w-[320px] xl:w-[340px] md:sticky md:top-0 md:h-screen flex-col shrink-0">
          <Sidebar />
        </aside>

        <main className="flex-1 pt-20 md:pt-0 min-w-0">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Samples />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
