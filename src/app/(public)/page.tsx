import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import EventsSection from "@/components/sections/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <DepartmentsSection />
      <EventsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}