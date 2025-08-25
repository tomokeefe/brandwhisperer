import React from "react";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BrandStageQuiz from "@/components/BrandStageQuiz";

const Quiz = () => {
  const { ref: quizRef, isVisible: quizVisible } = useScrollAnimation();

  const quizPageSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "@id": "https://brandwhisperer.com/quiz/#quiz",
    name: "Startup Brand Stage Quiz",
    description:
      "Interactive quiz to assess your startup's branding readiness and get personalized recommendations for growth.",
    url: "https://brandwhisperer.com/quiz",
    about: {
      "@type": "Thing",
      name: "Startup Branding Assessment",
    },
    author: {
      "@type": "Organization",
      "@id": "https://brandwhisperer.com/#organization",
    },
    hasPart: [
      {
        "@type": "Question",
        name: "Mission Clarity",
        text: "How clear is your startup's mission?",
      },
      {
        "@type": "Question",
        name: "Audience Understanding",
        text: "Do you know your target audience?",
      },
      {
        "@type": "Question",
        name: "Visual Identity",
        text: "How's your visual branding?",
      },
    ],
    educationalLevel: "Beginner to Advanced",
    timeRequired: "PT2M",
    interactivityType: "mixed",
  };

  return (
    <div className="bg-dark-950 pb-16">
      <SEO
        title="Startup Brand Stage Quiz | Find Your Brand's Growth Stage"
        description="Take our free 2-minute quiz to discover your startup's branding stage and get personalized recommendations. Used by 2,500+ founders to scale smarter."
        keywords="startup brand quiz, brand assessment, startup branding stage, brand readiness quiz, startup brand evaluation, brand growth quiz"
        url="https://brandwhisperer.com/quiz"
        schema={quizPageSchema}
      />

      {/* Quiz Section */}
      <section
        ref={quizRef}
        className={`relative py-20 lg:py-28 overflow-hidden transition-all duration-700 ${
          quizVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.05),transparent_50%)]" />

        <div className="container-custom relative">
          <BrandStageQuiz />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Why Take Our Brand Assessment?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get insights that help you make informed decisions about your
              brand investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-400/10 border border-secondary-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Instant Assessment
              </h3>
              <p className="text-gray-300">
                Get immediate feedback on your brand's strengths and areas for
                improvement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-400/10 border border-secondary-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Actionable Insights
              </h3>
              <p className="text-gray-300">
                Receive specific recommendations tailored to your startup's
                current stage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-400/10 border border-secondary-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Free Resources
              </h3>
              <p className="text-gray-300">
                Access our library of brand guides and frameworks based on your
                results
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
