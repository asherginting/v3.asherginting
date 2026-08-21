import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import Background from "@/components/Background";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Volunteer from "@/components/Volunteer";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <Hero />
      <main>
        <Background />
        <Skills />
        <Experience />
        <Volunteer />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
