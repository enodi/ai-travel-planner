"use client";

import { useEffect, useState } from "react";
import { SkeletonText } from "@chakra-ui/react";

import Layout from "@/src/components/common/layout/Layout";
import Itinerary from "@/src/components/itinerary/Itinerary";
import { useGetItinerary } from "@/src/hooks/useGetItinerary";

const PROMPT_KEY = "user-prompt";
export default function Page() {
  const [prompt, setPrompt] = useState("");
  useEffect(() => {
    const result = localStorage.getItem(PROMPT_KEY) || "";
    setPrompt(result);
  }, []);

  const { isError, isLoading, data } = useGetItinerary(prompt);

  if (isError) {
    return <div>Error occurred</div>;
  }

  if (isLoading) {
    return (
      <Layout>
        <SkeletonText mt={10} noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt={10} noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt={10} noOfLines={4} spacing="4" skeletonHeight="2" />
      </Layout>
    );
  }

  return (
    <Layout>
      <Itinerary itineraries={data?.itineraries} />
    </Layout>
  );
}
