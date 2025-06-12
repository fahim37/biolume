import About from "@/components/web/About";
import Clients from "@/components/web/Clients";
import ParticleHero from "@/components/web/Particle-hero";
import Services from "@/components/web/Services";
import Solutions from "@/components/web/Solutions";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParticleHero
        btnText="Contact Us"
        title="Lighting with Purpose and Precision"
        description="With over a decade of experience delivering lighting packages for high-end construction projects, Biolume brings together creative design, technical expertise, and seamless project management. We provide a comprehensive, tailored, hands-on solution to construction lighting shaped by deep industry knowledge."
      />
      <About />
      <Clients />
      <Services />
      <Solutions />
    </main>
  );
}
