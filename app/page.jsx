import HeroSection from './comonents/HeroSection'
import ProblemSolution from './comonents/ProblemSolution'
import HowItWorks from './comonents/HowItWorks'
import BenefitsSection from './comonents/BenefitsSection'
import TestimonialsSection from './comonents/TestimonialsSection'
import FAQSection from './comonents/FAQSection'
import Navbar from './comonents/Navbar'
import ContactSection from './comonents/ContactSection'
import SkoolCommunityTrial from './comonents/Skull'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar/>
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <BenefitsSection />
      <TestimonialsSection />
      <SkoolCommunityTrial />
      <FAQSection />
      <ContactSection/>
    </main>
  )
}
