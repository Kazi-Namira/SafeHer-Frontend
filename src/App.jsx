import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SafetyDashboard from "./components/SafetyDashboard";
import GigMarketplace from "./components/GigMarketplace";
import LearningHub from "./components/LearningHub";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";
import SOSModal from "./components/SOSModal";

function App() {
  const [showSOSModal, setShowSOSModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <HeroSection onSOSClick={() => setShowSOSModal(true)} />
      <SafetyDashboard />
      <GigMarketplace />
      <LearningHub />
      <CommunitySection />
      <Footer />
      <SOSModal isOpen={showSOSModal} onClose={() => setShowSOSModal(false)} />
    </div>
  );
}

export default App;
