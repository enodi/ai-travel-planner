import { Heading, Button, Flex, Divider } from "@chakra-ui/react";

import Filters from "@/src/components/itinerary/Filters";
import PlaceItem from "@/src/components/itinerary/PlaceItem";
import ItineraryItem from "@/src/components/itinerary/ItineraryItem";
import { places, itineraries, flights } from "@/src/components/helper";

interface Props {
  itineraries: Record<string, any>[];
}

function Itinerary({ itineraries }: Props) {
  return (
    <section>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={10}>
        <Heading as={"h3"}>Your trip to London for 3 days</Heading>
        <Button colorScheme="blue">Save Itinerary</Button>
      </Flex>
      <Divider my={10} />
      <div className="flex md:flex-row flex-col justify-between gap-8 w-full">
        {/* <Filters /> */}
        <div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Itinerary</h3>
            <div className="flex flex-col gap-8">
              {itineraries &&
                itineraries?.length > 0 &&
                itineraries?.map((itinerary, index) => (
                  <ItineraryItem
                    key={`${index}-${itinerary.day}`}
                    itinerary={itinerary}
                  />
                ))}
            </div>
          </div>
          {/* <Divider my={10} />
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold">Places to stay</h3>
            <div className="flex md:grid-cols-2 md:grid flex-col gap-4">
              {places?.map((place, index) => (
                <PlaceItem key={`${place.name}-${index}`} place={place} />
              ))}
            </div>
          </div>
          <Divider my={10} />
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold">Flights</h3>
            <div className="flex md:grid-cols-2 md:grid flex-col gap-4">
              {flights?.map((place, index) => (
                <PlaceItem key={`${place.name}-${index}`} place={place} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Itinerary;
