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
  itinerary: any;
}

function ItineraryItem({ itinerary }: Props) {
  return (
    <div>
      {itinerary?.day && (
        <h3 className="text-md font-bold">{`Day ${itinerary.day}`}</h3>
      )}
      {itinerary.description && (
        <p className="text-sm">{itinerary.description}</p>
      )}
      <div className="mt-5">
        {itinerary.events.map((event: any, eventIndex: number) => (
          <Accordion
            title={event.event_name}
            key={`${eventIndex}-${event.name}`}
          >
            <div className="flex gap-4">
              <Card>
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt={event?.altText}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    {event?.event_name && (
                      <Heading size="sm">{event?.event_name}</Heading>
                    )}
                    <div className="flex gap-2 items-center">
                      {event?.type && (
                        <p className="text-sm">{`${event?.event_type}`}</p>
                      )}{" "}
                      |
                      {event?.period && (
                        <p className="text-sm">{`${event.period}`}</p>
                      )}
                    </div>
                    <p className="text-sm">{event.description}</p>
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
