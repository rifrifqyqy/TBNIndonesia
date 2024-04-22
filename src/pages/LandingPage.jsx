import AboutSection from "../components/AboutSection";
import EventSection from "../components/EventSection";
import FooterSection from "../components/FooterSection";
import HomeSection from "../components/HomeSection";
import NavigationBar from "../components/NavigationBar";
import SponsorSection from "../components/SponsorSection";

export default function LandingPage() {
  return (
    <>
      <div className="fixed z-50 w-full">
        <NavigationBar></NavigationBar>
      </div>

      <div className="overflow-x-hidden">
        <HomeSection></HomeSection>
        <SponsorSection></SponsorSection>
        <EventSection></EventSection>
        <AboutSection></AboutSection>
        <SponsorSection />
        <FooterSection />
      </div>
    </>
  );
}
