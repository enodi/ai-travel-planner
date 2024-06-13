import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

function Accordion({ title, children }: Props) {
  return (
    <ChakraAccordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </ChakraAccordion>
  );
}

export default Accordion;
