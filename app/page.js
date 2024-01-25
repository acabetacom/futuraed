import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Topics from "./components/Topics";

export default function Home() {
  return (
    <main>
      <div className="h-dvh">
      <Header />
      <Hero />
      </div>
      <About/>
      <Topics/>
    </main>
  );
}
