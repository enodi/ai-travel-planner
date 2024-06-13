import { Card, CardBody, Image, SimpleGrid } from "@chakra-ui/react";

const cards = [
  {
    id: "1",
    altText: "trip to vegas",
    text: "Trip to Vegas",
  },
  {
    id: "2",
    altText: "trip to paris",
    text: "Trip to Paris",
  },
  {
    id: "3",
    altText: "trip to italy",
    text: "Trip to Italy",
  },
  {
    id: "4",
    altText: "trip to zanzibar",
    text: "Trip to Zanzibar",
  },
  {
    id: "5",
    altText: "trip to mauritius",
    text: "Trip to Mauritius",
  },
];
function PopularItinerary() {
  return (
    <section className="pt-16">
      <h3 className="font-semibold text-2xl text-black">Popular Itineraries</h3>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        className="mt-6"
      >
        {cards?.map((item, index) => (
          <Card maxW="md" key={`${index}-${item.altText}`}>
            <CardBody sx={{ padding: 0 }}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt={item.altText}
                  borderRadius="lg"
                />
              </div>
              <div className="absolute bottom-1 left-0 right-0">
                <p className=" text-white font-bold text-lg px-6">
                  {item.text}
                </p>
              </div>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </section>
  );
}

export default PopularItinerary;
