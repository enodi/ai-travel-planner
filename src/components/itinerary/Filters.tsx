import { Card, CardBody, Checkbox, CheckboxGroup } from "@chakra-ui/react";

function Filters() {
  return (
    <div className="flex flex-col gap-8 w-1/2">
      <h3 className="text-lg font-bold">Filter by:</h3>
      <Card maxW="md">
        <CardBody>
          <h4 className="text-md font-bold mb-4">Popular filters:</h4>
          <CheckboxGroup>
            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <Checkbox /> <span className="ml-3">Kid friendly</span>
              </div>
              <div className="flex items-center">
                <Checkbox /> <span className="ml-3">Cheap flights</span>
              </div>
              <div className="flex items-center">
                <Checkbox /> <span className="ml-3">5-star hotel</span>
              </div>
              <div className="flex items-center">
                <Checkbox /> <span className="ml-3">Airbnb</span>
              </div>
              <div className="flex items-center">
                <Checkbox />{" "}
                <span className="ml-3">Limited visa restrictions</span>
              </div>
              <div className="flex items-center">
                <Checkbox /> <span className="ml-3">Visa on entry</span>
              </div>
              <div className="flex items-center">
                <Checkbox /> <span className="ml-3">Twin bedroom</span>
              </div>
            </div>
          </CheckboxGroup>
        </CardBody>
      </Card>
    </div>
  );
}

export default Filters;
