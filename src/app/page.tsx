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
} from "@/components/landing";

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
      <div className="min-h-screen bg-background text-foreground">
        <LandingNavbar />
        <main id="main-content" role="main">
          <LandingHero />
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
      </div>
    </>
  );
}
