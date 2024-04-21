import AboutSection from "../components/AboutSection";
import EventSection from "../components/EventSection";
import HomeSection from "../components/HomeSection";
import NavigationBar from "../components/NavigationBar";
import SponsorSection from "../components/SponsorSection";


export default function LandingPage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="overflow-x-hidden">
        <HomeSection></HomeSection>
        <SponsorSection></SponsorSection>
        <EventSection></EventSection>
        <AboutSection></AboutSection>
        <SponsorSection />
      </div>
    </>
  );
}
