import About from "@/components/web/About";
import Clients from "@/components/web/Clients";


import Hero from "@/components/web/Hero";
import Services from "@/components/web/Services";
import Solutions from "@/components/web/Solutions";


export default function Home() {
  return (
    <main className="min-h-screen">
     
      <Hero />
      <About />
      <Clients />
      <Services />
      <Solutions />
     
    </main>
  )
}
