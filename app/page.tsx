"use client";

import { useState } from "react";
import { Button } from "@chakra-ui/react";

import Layout from "@/src/components/common/layout/Layout";
import Itinerary from "@/src/components/itinerary/Itinerary";
import TopSection from "@/src/components/top-section/TopSection";
import PopularItinerary from "@/src/components/popular-itinerary/PopularItinerary";

export default function Page() {
  const [hasFetchItinerary, setHasFetchItinerary] = useState(false);

  const renderButton = () => (
    <Button onClick={() => setHasFetchItinerary(!hasFetchItinerary)}>
      Switch
    </Button>
  );

  if (!hasFetchItinerary) {
    return (
      <Layout>
        {renderButton()}
        <TopSection />
        <PopularItinerary />
      </Layout>
    );
  }

  return (
    <Layout>
      {renderButton()}
      <section className="my-10">
        <Itinerary />
      </section>
    </Layout>
  );
}
