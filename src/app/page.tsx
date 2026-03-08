import Script from "next/script";
import { createCourseJsonLd } from "@/lib/seo";
import {
  LandingNavbar,
  LandingHero,
  LandingProblemSolution,
  LandingBenefits,
  LandingCurriculum,
  LandingResults,
  LandingInstructor,
  LandingTestimonials,
  LandingFaq,
  LandingFinalCta,
  LandingFooter,
  LandingCoursesList,
  ScrollToTop,
  ContactButton,
} from "@/components/landing";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  const jsonLd = createCourseJsonLd();

  return (
    <>
      <Script
        id="json-ld-course"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <div className="min-h-screen text-foreground">
        <LandingNavbar />
        <main id="main-content" role="main">
          <AuroraBackground className="text-foreground">
            <LandingHero />
          </AuroraBackground>
          <LandingCoursesList />
          <LandingProblemSolution />
          <LandingBenefits />
          <LandingCurriculum />
          <LandingResults />
          <LandingInstructor />
          <LandingTestimonials />
          <LandingFaq />
          <LandingFinalCta />
          <LandingFooter />
        </main>
        <ContactButton />
        <ScrollToTop />
      </div>
    </>
  );
}
