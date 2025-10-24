import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import AboutSection from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoursesSection />
      <AboutSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
