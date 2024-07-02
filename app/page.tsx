"use client";

import { useState } from "react";

import Layout from "@/src/components/common/layout/Layout";
import Itinerary from "@/src/components/itinerary/Itinerary";
import TopSection from "@/src/components/top-section/TopSection";
import PopularItinerary from "@/src/components/popular-itinerary/PopularItinerary";

export default function Page() {
  const [hasFetchItinerary, setHasFetchItinerary] = useState(true);

  if (!hasFetchItinerary) {
    return (
      <Layout>
        <TopSection />
        <PopularItinerary />
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="my-10">
        <Itinerary />
      </section>
    </Layout>
  );
}
