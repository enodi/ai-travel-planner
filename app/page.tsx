"use client";

import TopSection from "@/src/components/top-section/TopSection";
import Layout from "@/src/components/common/layout/Layout";
import PopularItinerary from "@/src/components/popular-itinerary/PopularItinerary";

export default function Page() {
  return (
    <Layout>
      <section>
        <TopSection />
        <PopularItinerary />
      </section>
    </Layout>
  );
}
