import { Card, Image, Stack, Heading, Text, CardBody } from "@chakra-ui/react";

import Accordion from "@/src/components/common/accordion/Accordion";

const itineraries = [
  {
    id: "1",
    title: "Day 1",
    events: [
      {
        id: "event_1",
        title: "Morning",
        description:
          "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      },
      {
        id: "event_2",
        title: "Afternoon",
        description:
          "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      },
      {
        id: "event_3",
        title: "Evening",
        description:
          "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      },
    ],
  },
  {
    id: "2",
    title: "Day 2",
    events: [
      {
        id: "event_4",
        title: "Morning",
        description:
          "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      },
      {
        id: "event_5",
        title: "Afternoon",
        description:
          "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      },
      {
        id: "event_6",
        title: "Evening",
        description:
          "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      },
    ],
  },
];

function Itinerary() {
  return (
    <>
      {itineraries.map((itinerary, index) => (
        <Accordion title={itinerary.title} key={`${index}-${itinerary.title}`}>
          <div className="flex flex-col gap-4">
            {itinerary.events.map((event, eventIndex) => (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                key={`${eventIndex}-${event.title}`}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{event.title}</Heading>

                    <Text py="2">{event.description}</Text>
                  </CardBody>
                </Stack>
              </Card>
            ))}
          </div>
        </Accordion>
      ))}
    </>
  );
}

export default Itinerary;
