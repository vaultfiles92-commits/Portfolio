import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="md:flex">
        <aside className="hidden md:flex md:w-[38%] lg:w-[35%] xl:w-[32%] md:sticky md:top-0 md:h-screen flex-col shrink-0">
          <Sidebar />
        </aside>

        <main className="flex-1 pt-20 md:pt-0">
          <About />
          <Services />
          <Skills />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
