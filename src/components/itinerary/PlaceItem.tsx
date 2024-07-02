import {
  Card,
  Image,
  Heading,
  CardBody,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";

import { places } from "@/src/components/helper";

interface Props {
  place: (typeof places)[0]; //TODO: Change this
}

function PlaceItem({ place }: Props) {
  return (
    <Card maxW="md">
      <CardBody>
        <Flex>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "120px" }}
            src={place.image}
            alt={place.altText}
            borderRadius="lg"
          />
          <div className="ml-4 flex flex-col gap-2">
            <Heading size="sm">{place.name}</Heading>
            {place.distance && (
              <p className="text-sm">{`${place.distance} from city centre`}</p>
            )}
            {place.rating && <p className="text-sm">{`${place.rating}`}</p>}
            {place?.price && (
              <p className="text-sm">{`${place.price} per night`}</p>
            )}
            {place?.wifi && <p className="text-sm">{`${place.wifi}`}</p>}
          </div>
        </Flex>
        <Divider my={5} />
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            {place?.parking && <p className="text-sm">{`${place.parking}`}</p>}{" "}
            |{place?.pool && <p className="text-sm">{`${place.pool}`}</p>}
          </div>
          <p className="text-sm">{place.description}</p>
        </div>
        <div className="mt-5 flex justify-end">
          <Button colorScheme="blue">Add to cart</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default PlaceItem;
