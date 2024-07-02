import React, { PropsWithChildren } from "react";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

type Props = PropsWithChildren<{
  isOpen: boolean;
  placement?: "top" | "right" | "bottom" | "left";
  onClose: () => void;
  footer?: React.ReactNode;
  headerTitle?: string;
  closeButtonAddOn?: React.ReactNode;
}>;

function Drawer({
  isOpen,
  placement = "right",
  onClose,
  children,
  footer,
  headerTitle,
  closeButtonAddOn,
}: Props) {
  return (
    <ChakraDrawer isOpen={isOpen} placement={placement} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <div className="flex justify-between p-5 items-center">
          {closeButtonAddOn && closeButtonAddOn}
          <DrawerCloseButton />
        </div>
        {headerTitle && <DrawerHeader>{headerTitle}</DrawerHeader>}

        <DrawerBody>{children}</DrawerBody>

        {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </ChakraDrawer>
  );
}

export default Drawer;
