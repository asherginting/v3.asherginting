import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative px-6 md:px-30 lg:px-30 max-w-360 mx-auto">
      <div className="absolute top-5 right-7.5 md:top-8 md:right-12 z-10">
        <ThemeToggle />
      </div>
    </main>
  );
}
