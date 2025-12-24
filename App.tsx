import React from 'react';
import ChinaBackground from './components/ChinaBackground';
import SponsorInfoPage from './components/SponsorInfoPage';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Animated Background */}
      <ChinaBackground />

      {/* Sponsor Info Content */}
      <SponsorInfoPage />
    </div>
  );
};

export default App;