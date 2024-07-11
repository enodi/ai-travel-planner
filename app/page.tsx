"use client";

import { useRouter } from "next/navigation";

import Layout from "@/src/components/common/layout/Layout";
import TopSection from "@/src/components/top-section/TopSection";
import PopularItinerary from "@/src/components/popular-itinerary/PopularItinerary";

const PROMPT_KEY = "user-prompt";

export default function Page() {
  const router = useRouter();

  const handleSubmit = async (values: { prompt: string }) => {
    localStorage.setItem(PROMPT_KEY, values.prompt);
    router.push("/itineraries");
  };

  return (
    <Layout>
      <TopSection handleSubmit={handleSubmit} />
      <PopularItinerary />
    </Layout>
  );
}
