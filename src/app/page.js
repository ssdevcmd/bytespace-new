
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PartnerLogos from "@/components/PartnerLogos";
import SkillsSection from "@/components/SkillsSection";
import { Divide, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PartnerLogos />
      <SkillsSection />
      <CourseCard />
    </main>
    
  );
}
