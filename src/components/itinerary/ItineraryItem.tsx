import {
  Card,
  Image,
  Stack,
  Heading,
  CardBody,
  Button,
} from "@chakra-ui/react";

import { itineraries } from "@/src/components/helper";
import Accordion from "@/src/components/common/accordion/Accordion";

interface Props {
  itinerary: (typeof itineraries)[0];
}

function ItineraryItem({ itinerary }: Props) {
  return (
    <div>
      <h3 className="text-md font-bold">{itinerary.day}</h3>
      <p className="text-sm">{itinerary.description}</p>
      <div className="mt-5">
        {itinerary.events.map((event, eventIndex) => (
          <Accordion title={event.name} key={`${eventIndex}-${event.name}`}>
            <div className="flex gap-4">
              <Card>
                <CardBody>
                  <Image
                    src={event.image}
                    alt={event.altText}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="sm">{event.name}</Heading>
                    <div className="flex gap-2 items-center">
                      {event?.type && (
                        <p className="text-sm">{`${event.type}`}</p>
                      )}{" "}
                      |
                      {event?.period && (
                        <p className="text-sm">{`${event.period}`}</p>
                      )}
                    </div>
                    <p className="text-sm">{event.shortDescription}</p>
                  </Stack>
                  <div className="mt-5 flex justify-end">
                    <Button colorScheme="blue">Add to cart</Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default ItineraryItem;
