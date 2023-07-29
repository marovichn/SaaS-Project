import { LandingContent } from "@/components/LandingContent";
import { LandingHero } from "@/components/LandingHero";
import { LandingNavbar } from "@/components/LandingNavbar";

export default function Home() {
  
  return (
    <main>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </main>
  );
}
