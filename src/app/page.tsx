import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import Background from "@/components/Background";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <main>
        <Hero />
        <Background />
      </main>
      <ScrollToTop />
    </div>
  );
}
