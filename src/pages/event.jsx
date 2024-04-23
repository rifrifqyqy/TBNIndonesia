import EventPageBanner from "../components/EventPageBanner";
import NavPage from "../components/NavigationPage";
import TabEventCategory from "../components/Layouts/TabEvents/TabEventCategory";
import ScrollToTop from "../scrollToTop";
import FooterSection from "../components/FooterSection";
export default function EventPage() {
  return (
    <>
      <NavPage>EVENT PAGES</NavPage>
      <div className="mx-[20px] lg:mx-[80px]" id="top">
        <div className="mt-4 lg:mt-10 font-inter text-gray1">
          <EventPageBanner></EventPageBanner>
        </div>
        <div className="mt-6 lg:mt-10">
          <TabEventCategory>
            <TabEventCategory.Header></TabEventCategory.Header>
          </TabEventCategory>
        </div>
      </div>
      <FooterSection/>
    </>
  );
}
