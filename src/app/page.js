
import CallToAction from "@/components/CallToAction";
import CareerGrowth from "@/components/CareerGrowth";
import CourseCard from "@/components/CourseCard";
import CourseGrid from "@/components/CourseGrid";
import Creator from "@/components/Creator";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PartnerLogos from "@/components/PartnerLogos";
import SkillsSection from "@/components/SkillsSection";
import Testimonials from "@/components/Testimonials";
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
      <CourseGrid />
      <CareerGrowth />
      <Creator />
      <CallToAction />
      <Testimonials />
    </main>
    
  );
}
