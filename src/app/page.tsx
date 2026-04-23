import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import Background from "@/components/Background";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <main>
        <Hero />
        <Background />
      </main>
    </div>
  );
}
