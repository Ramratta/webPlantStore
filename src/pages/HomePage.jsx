import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TrendyPlantsSection from "../components/TrendyPlantsSection";
import TopSellingSection from "../components/TopSellingSection";
import ReviewsSection from "../components/ReviewsSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6faf6] text-gray-900">
      <Header />
      <HeroSection />
      <TrendyPlantsSection />
      <TopSellingSection />
      <ReviewsSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}
